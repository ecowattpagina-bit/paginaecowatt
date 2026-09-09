import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EcowattMedia from "@/components/EcowattMedia";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import { CheckCircle2, Sun, Zap, Wrench, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sistemas solares",
  description:
    "Paneles solares on-grid y off-grid en Chillán y Ñuble. Cotización, venta, instalación y asesorías Ecowatt Chile.",
  alternates: {
    canonical: "/sistemas-solares",
  },
  openGraph: {
    title: "Sistemas solares | Ecowatt Chile",
    description:
      "Paneles solares on-grid y off-grid. Cotización, venta, instalación y asesorías en Chillán y Ñuble.",
    url: "/sistemas-solares",
  },
};

const pilares = [
  {
    icon: Sun,
    titulo: "On-grid",
    texto: "Sistemas conectados a la red para ahorrar en tu boleta eléctrica.",
  },
  {
    icon: Zap,
    titulo: "Off-grid",
    texto: "Autonomía energética donde no hay red o buscas independencia.",
  },
  {
    icon: Wrench,
    titulo: "Venta e instalación",
    texto: "Equipos, montaje y puesta en marcha con respaldo técnico.",
  },
  {
    icon: MessageCircle,
    titulo: "Asesorías",
    texto: "Te orientamos según consumo, techo, terreno y presupuesto.",
  },
];

const pasos = [
  "Cotización de sistemas solares a medida",
  "Paneles solares on-grid y off-grid",
  "Venta e instalación profesional",
  "Asesoría técnica en Chillán y Ñuble",
];

const galeriaSolar = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    alt: "Paneles solares en techo residencial",
    label: "Paneles en techo",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
    alt: "Campo de paneles solares",
    label: "Energía limpia",
  },
  {
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
    alt: "Aerogeneradores y energía eólica",
    label: "Energía renovable",
  },
  {
    src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80",
    alt: "Instalación de paneles solares",
    label: "Instalación",
  },
  {
    src: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=900&q=80",
    alt: "Casa con paneles solares",
    label: "Hogar solar",
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    alt: "Atardecer con turbinas eólicas",
    label: "Sostenibilidad",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    alt: "Técnico en obra de energías",
    label: "Asesoría técnica",
  },
  {
    src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=80",
    alt: "Detalle de paneles solares",
    label: "Tecnología solar",
  },
];

export default function SistemasSolaresPage() {
  return (
    <main className="flex-1 bg-[#f4fafd]">
      <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[78svh]">
        <Image
          src="/servicio-energias.jpg"
          alt="Energías renovables Ecowatt Chile"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003d68]/90 via-[#00558f]/75 to-[#003d68]/55" />
        <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-[#fbb03b]/25 blur-3xl" />
        <Header variant="solid" />
        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:min-h-[78svh] sm:px-8 sm:pb-20 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#fbb03b]">
            Energías renovables
          </p>
          <h1 className="mt-3 max-w-2xl font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Sistemas solares para tu hogar
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Cotización, venta, instalación y asesorías. Paneles on-grid y off-grid pensados
            para Chillán y la región de Ñuble.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="min-h-12 font-bold">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-4" />
                Cotizar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1a7ab8]">
            Qué incluimos
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-[#0c2a3f] sm:text-4xl">
            Soluciones solares completas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#0c2a3f]/70 sm:text-lg">
            Desde la cotización hasta la instalación, con asesoría clara y cercana.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((item) => (
            <li
              key={item.titulo}
              className="rounded-2xl border border-[#00558f]/14 bg-white p-5 shadow-[0_16px_40px_-28px_rgba(0,61,104,0.35)]"
            >
              <item.icon className="size-8 text-[#1a7ab8]" aria-hidden />
              <h3 className="mt-4 font-[family-name:var(--font-outfit)] text-lg font-bold text-[#0c2a3f]">
                {item.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0c2a3f]/70">{item.texto}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-[#00558f]/14 bg-[#e8f6fc] shadow-[0_20px_50px_-28px_rgba(0,61,104,0.35)]">
            <Image
              src="/servicio-energias.jpg"
              alt="Imagine un hogar que te cuida a ti y al planeta"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 448px"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1a7ab8]">
              Ecowatt Chile
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-[#0c2a3f] sm:text-4xl">
              Un hogar que te cuida a ti y al planeta
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0c2a3f]/70 sm:text-lg">
              Construimos el futuro sostenible de tu hogar con energía limpia, instalación
              responsable y acompañamiento real.
            </p>
            <ul className="mt-8 space-y-3">
              {pasos.map((paso) => (
                <li key={paso} className="flex items-start gap-3 text-[#0c2a3f]">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#1a7ab8]" aria-hidden />
                  <span className="text-sm font-medium sm:text-base">{paso}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 min-h-12 font-bold">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-4" />
                Pedir cotización
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#f4fafd] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1a7ab8]">
              Inspiración
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-[#0c2a3f] sm:text-4xl">
              Energía solar en acción
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0c2a3f]/70 sm:text-lg">
              Paneles, instalaciones y hogares que ya aprovechan el sol.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {galeriaSolar.map((item) => (
              <li key={item.src}>
                <figure className="group relative aspect-square overflow-hidden rounded-xl bg-[#00558f]/10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#003d68]/90 to-transparent px-3 pb-3 pt-10 text-sm font-semibold text-white">
                    {item.label}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#003d68] py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003d68] via-[#00558f] to-[#1a7ab8]/50" />
        <div className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-[#4db8e8]/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#fbb03b]">
              Video y canción
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Conoce Ecowatt Chile
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Mira el video y escucha nuestra canción mientras cotizas tu sistema solar.
            </p>
          </div>
          <EcowattMedia />
        </div>
      </section>

      <Footer />
    </main>
  );
}
