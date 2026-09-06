import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import InstagramIcon from "@/components/InstagramIcon";
import FacebookIcon from "@/components/FacebookIcon";
import YouTubeIcon from "@/components/YouTubeIcon";
import {
  ADDRESS_LINES,
  EMAIL,
  EMAIL_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  SOCIAL_LINKS,
  WEBSITE_URL,
  WHATSAPP_URL,
  YOUTUBE_URL,
} from "@/lib/site";

const nav = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#trabajo-del-mes", label: "Trabajo del mes" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/galeria", label: "Galería" },
  { href: "/#contacto", label: "Contacto" },
];

function SocialIcon({ id }: { id: (typeof SOCIAL_LINKS)[number]["id"] }) {
  if (id === "instagram") return <InstagramIcon className="size-5" />;
  if (id === "facebook") return <FacebookIcon className="size-5" />;
  if (id === "youtube") return <YouTubeIcon className="size-5" />;
  if (id === "whatsapp") return <WhatsAppIcon className="size-5" />;
  if (id === "web") return <Globe className="size-5" aria-hidden />;
  return <Mail className="size-5" aria-hidden />;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sun via-sky to-wave" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 pb-28 sm:grid-cols-2 sm:px-8 sm:pb-14 lg:grid-cols-4 lg:gap-8 lg:px-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo-ecowatt.png"
              alt="Ecowatt Chile"
              width={160}
              height={107}
              className="h-14 w-auto object-contain drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]"
            />
          </Link>
          <p className="mt-4 font-display text-lg font-bold">Ecowatt Chile</p>
          <p className="mt-1 text-sm leading-relaxed text-white/65">
            Construcción, remodelaciones y viviendas a medida en Ñuble.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.id === "email" ? undefined : "_blank"}
                rel={item.id === "email" ? undefined : "noopener noreferrer"}
                aria-label={item.label}
                className={`inline-flex size-11 items-center justify-center rounded-full transition ${item.className}`}
              >
                <SocialIcon id={item.id} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Navegación
          </p>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Redes
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/75 transition hover:text-primary"
              >
                <InstagramIcon className="size-4 shrink-0 text-[#E4405F]" />
                Instagram · @ecowattchile
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/75 transition hover:text-primary"
              >
                <FacebookIcon className="size-4 shrink-0 text-[#1877F2]" />
                Facebook · Ecowatt Chile
              </a>
            </li>
            <li>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/75 transition hover:text-primary"
              >
                <YouTubeIcon className="size-4 shrink-0 text-[#FF0000]" />
                YouTube · Ecowatt Chile
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/75 transition hover:text-primary"
              >
                <WhatsAppIcon className="size-4 shrink-0 text-[#25D366]" />
                WhatsApp · {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 break-all text-white/75 transition hover:text-primary"
              >
                <Globe className="size-4 shrink-0 text-sky" aria-hidden />
                www.ecowattchile.cl
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Contacto
          </p>
          <ul className="mt-4 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
              <span>
                {ADDRESS_LINES[0]}
                <br />
                {ADDRESS_LINES[1]}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
              <a href={WHATSAPP_URL} className="transition hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
              <a href={EMAIL_URL} className="break-all transition hover:text-primary">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {year} Ecowatt Chile. Chillán Viejo, Ñuble.</p>
          <p>Abierto con cita</p>
        </div>
      </div>
    </footer>
  );
}
