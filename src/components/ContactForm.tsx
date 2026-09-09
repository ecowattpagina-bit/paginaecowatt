"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/site";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { ok: false, message: "" };

const fieldClass =
  "h-9 min-h-9 rounded-md border-[#00558f]/12 bg-[#f4fafd] px-2.5 text-[13px] text-[#0c2a3f] shadow-none placeholder:text-[#0c2a3f]/30 focus-visible:border-[#1a7ab8] focus-visible:ring-2 focus-visible:ring-[#1a7ab8]/20 sm:h-10 sm:min-h-10 sm:text-sm";

const labelClass = "text-[11px] font-semibold tracking-wide text-[#0c2a3f]/70 sm:text-xs";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initial);

  return (
    <form
      id="contacto"
      action={action}
      className="flex w-full max-w-sm flex-col gap-2.5 rounded-xl border border-white/25 bg-white/96 p-3.5 shadow-[0_16px_36px_-22px_rgba(0,0,0,0.5)] backdrop-blur-md sm:max-w-md sm:gap-3 sm:rounded-2xl sm:p-5 lg:justify-self-end"
    >
      <div className="pb-0.5 sm:border-b sm:border-[#00558f]/10 sm:pb-2.5">
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#1a7ab8] sm:text-[0.65rem]">
          Cotización
        </p>
        <p className="mt-0.5 font-[family-name:var(--font-outfit)] text-base font-bold tracking-tight text-[#0c2a3f] sm:text-lg">
          Cuéntanos tu proyecto
        </p>
        <p className="mt-0.5 hidden text-xs leading-snug text-[#0c2a3f]/50 sm:block">
          Asesoría gratuita · Presupuesto sin compromiso
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
        <div className="col-span-2 space-y-1 sm:col-span-1">
          <Label htmlFor="nombre" className={labelClass}>
            Nombre
          </Label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            disabled={pending}
            className={fieldClass}
          />
        </div>
        <div className="col-span-2 space-y-1 sm:col-span-1">
          <Label htmlFor="ciudad" className={labelClass}>
            Ciudad
          </Label>
          <Input
            id="ciudad"
            name="ciudad"
            type="text"
            required
            autoComplete="address-level2"
            placeholder="Chillán"
            disabled={pending}
            className={fieldClass}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="numero" className={labelClass}>
            Número
          </Label>
          <Input
            id="numero"
            name="numero"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="+56 9 ..."
            disabled={pending}
            className={fieldClass}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="correo" className={labelClass}>
            Correo
          </Label>
          <Input
            id="correo"
            name="correo"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@correo.cl"
            disabled={pending}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="necesita" className={labelClass}>
          Qué necesita
        </Label>
        <Textarea
          id="necesita"
          name="necesita"
          rows={2}
          required
          placeholder="Pintura, revestimientos, remodelación..."
          disabled={pending}
          className={`${fieldClass} min-h-[3.25rem] resize-none py-2 sm:min-h-[4.25rem] sm:resize-y`}
        />
      </div>

      {state.message ? (
        <p
          className={`rounded-md px-2.5 py-1.5 text-xs sm:text-sm ${
            state.ok
              ? "bg-[#128C4B]/10 text-[#128C4B]"
              : "bg-red-50 text-red-600"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <Button
        type="submit"
        size="default"
        disabled={pending}
        className="mt-0.5 h-10 min-h-10 w-full text-xs font-bold sm:h-11 sm:min-h-11 sm:text-sm"
      >
        {pending ? "Enviando..." : "Enviar cotización"}
      </Button>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 py-0.5 text-xs font-semibold text-[#128C4B] lg:hidden"
      >
        <WhatsAppIcon className="size-3.5" />
        WhatsApp
      </a>
    </form>
  );
}
