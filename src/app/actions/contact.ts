"use server";

import { Resend } from "resend";
import { EMAIL, PHONE_DISPLAY, SITE_NAME, SITE_URL } from "@/lib/site";

export type ContactState = {
  ok: boolean;
  message: string;
};

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nombre = String(formData.get("nombre") || "").trim();
  const numero = String(formData.get("numero") || "").trim();
  const correo = String(formData.get("correo") || "").trim();
  const ciudad = String(formData.get("ciudad") || "").trim();
  const necesita = String(formData.get("necesita") || "").trim();

  if (!nombre || !numero || !correo || !ciudad || !necesita) {
    return { ok: false, message: "Completa todos los campos." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return { ok: false, message: "Ingresa un correo válido." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      message: "El envío de correo no está configurado. Escríbenos por WhatsApp.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL || EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL || "Ecowatt Chile <noreply@ecowattchile.cl>";

  const safe = {
    nombre: escapeHtml(nombre),
    numero: escapeHtml(numero),
    correo: escapeHtml(correo),
    ciudad: escapeHtml(ciudad),
    necesita: escapeHtml(necesita),
  };

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: correo,
      subject: `Nueva cotización — ${nombre} · ${ciudad}`,
      text: [
        `Nueva cotización desde ${SITE_NAME}`,
        "",
        `Nombre: ${nombre}`,
        `Número: ${numero}`,
        `Correo: ${correo}`,
        `Ciudad: ${ciudad}`,
        "",
        "Qué necesita:",
        necesita,
      ].join("\n"),
      html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Nueva cotización</title>
</head>
<body style="margin:0;padding:0;background:#eef6fb;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0c2a3f;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef6fb;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 18px 40px rgba(0,61,104,0.12);">
          <tr>
            <td style="background:linear-gradient(135deg,#003d68 0%,#00558f 55%,#1a7ab8 100%);padding:28px 28px 24px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#fbb03b;font-weight:700;">${SITE_NAME}</p>
              <h1 style="margin:10px 0 0;font-size:24px;line-height:1.25;color:#ffffff;font-weight:700;">Nueva cotización web</h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:rgba(255,255,255,0.85);">Un cliente dejó sus datos desde el sitio.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #d7ebf6;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:14px 16px;background:#f4fafd;border-bottom:1px solid #d7ebf6;width:34%;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#1a7ab8;">Nombre</td>
                  <td style="padding:14px 16px;border-bottom:1px solid #d7ebf6;font-size:15px;color:#0c2a3f;font-weight:600;">${safe.nombre}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;background:#f4fafd;border-bottom:1px solid #d7ebf6;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#1a7ab8;">Número</td>
                  <td style="padding:14px 16px;border-bottom:1px solid #d7ebf6;font-size:15px;color:#0c2a3f;font-weight:600;">${safe.numero}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;background:#f4fafd;border-bottom:1px solid #d7ebf6;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#1a7ab8;">Correo</td>
                  <td style="padding:14px 16px;border-bottom:1px solid #d7ebf6;font-size:15px;color:#0c2a3f;font-weight:600;">${safe.correo}</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;background:#f4fafd;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#1a7ab8;">Ciudad</td>
                  <td style="padding:14px 16px;font-size:15px;color:#0c2a3f;font-weight:600;">${safe.ciudad}</td>
                </tr>
              </table>

              <p style="margin:24px 0 10px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#1a7ab8;">Qué necesita</p>
              <div style="padding:16px 18px;background:#f8fcfe;border:1px solid #d7ebf6;border-left:4px solid #fbb03b;border-radius:10px;font-size:15px;line-height:1.6;color:#0c2a3f;white-space:pre-wrap;">${safe.necesita}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px 24px;background:#f4fafd;border-top:1px solid #d7ebf6;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:#5a7385;">
                ${SITE_NAME} · ${PHONE_DISPLAY}<br />
                <a href="${SITE_URL}" style="color:#1a7ab8;text-decoration:none;">${SITE_URL.replace(/^https?:\/\//, "")}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error("[contact]", error);
      return {
        ok: false,
        message: "No pudimos enviar el mensaje. Intenta por WhatsApp.",
      };
    }

    return {
      ok: true,
      message: "Mensaje enviado. Te contactaremos pronto.",
    };
  } catch {
    return {
      ok: false,
      message: "No pudimos enviar el mensaje. Intenta por WhatsApp.",
    };
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
