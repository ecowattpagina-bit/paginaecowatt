import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, EMAIL, WEBSITE_URL } from "@/lib/site";
import { TRABAJO_DEL_MES } from "@/lib/trabajo-del-mes";
import EcowattMedia from "@/components/EcowattMedia";
import ContactForm from "@/components/ContactForm";

const servicios = [
  {
    titulo: "Energías renovables",
    texto:
      "Paneles solares on-grid y off-grid. Venta, instalación y asesorías para tu hogar o empresa.",
    imagen: "/servicio-energias.jpg",
    alt: "Energías renovables Ecowatt Chile",
    href: "/sistemas-solares",
    destacada: true,
  },
  {
    titulo: "Cotización sistemas solares",
    texto:
      "Cotización de sistemas solares a medida: diseño, venta e instalación con asesoría técnica.",
    imagen:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    alt: "Paneles solares en techo residencial",
    href: "/sistemas-solares",
  },
  {
    titulo: "Remodelaciones",
    texto: "Cotizaciones a medida para renovar tu casa o local.",
    imagen:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    alt: "Interior remodelado",
  },
  {
    titulo: "Casas prefabricadas a medida",
    texto: "Casas prefabricadas diseñadas según tu terreno y presupuesto.",
    imagen:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    alt: "Estructura de casa en obra",
  },
  {
    titulo: "Muebles a medida",
    texto: "Muebles a medida para locales comerciales, cocina y dormitorios.",
    imagen: "/servicio-muebles.jpg",
    alt: "Muebles a medida en cocina, dormitorio y local comercial",
  },
  {
    titulo: "Viviendas",
    texto: "Construcción en general de viviendas y obras complementarias.",
    imagen:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
    alt: "Obra de construcción",
  },
  {
    titulo: "Mediterránea Palomo 230 m²",
    texto: "Casa mediterránea Palomo, proyecto de 230 m².",
    imagen:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    alt: "Casa de estilo contemporáneo",
  },
  {
    titulo: "Radieres y revestimientos",
    texto:
      "Radieres y revestimientos de piso como cerámicos, pisos vinílicos entre muchos. Asesoría integral de Ecowatt Chile.",
    imagen: "/servicio-revestimientos.jpg",
    alt: "Instalación de cerámicos en piso",
  },
];

export default function Home() {
  return (
    <main className="w-full flex-1">
      <section id="inicio" className="relative w-full overflow-hidden lg:min-h-[100svh]">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
          alt="Obra de construcción"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#003d68]/88 via-[#00558f]/72 to-[#1a7ab8]/55" />
        <div className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-[#fbb03b]/25 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -left-16 bottom-24 h-64 w-64 rounded-full bg-[#4db8e8]/20 blur-3xl" />
        <Header />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-3 pb-10 pt-20 sm:px-8 sm:pb-16 lg:min-h-[100svh] lg:justify-center lg:px-10 lg:pb-24 lg:pt-24">
          <div className="grid w-full items-center gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
            <div className="w-full min-w-0 lg:max-w-xl">
              <Image
                src="/logo-hero.png"
                alt="Ecowatt Chile"
                width={1031}
                height={501}
                priority
                quality={100}
                unoptimized
                sizes="480px"
                className="h-auto w-full max-w-[20rem] object-contain object-left sm:max-w-[24rem] lg:max-w-[28rem]"
              />
              <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold leading-snug text-white sm:mt-5 sm:text-2xl md:text-3xl">
                Asesoría en ingeniería y construcción
              </h1>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85 sm:mt-3 sm:text-base">
                Casas a medida, casas prefabricadas, energías renovables, quinchos, piscinas,
                mantenciones, renovaciones y remodelaciones en Chillán y la región de Ñuble.
                Número uno en servicios y garantía.
              </p>
              <div className="mt-4 flex w-full flex-col gap-2.5 sm:mt-5 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="min-h-12 w-full px-5 text-sm font-bold sm:w-auto">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-4" />
                    Hablar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden leading-none">
          <svg
            className="relative block h-14 w-full text-[#f4fafd] sm:h-20"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M0,48 C180,80 360,16 540,40 C720,64 900,24 1080,44 C1260,64 1350,56 1440,40 L1440,80 L0,80 Z"
            />
          </svg>
        </div>
      </section>

      <section id="servicios" className="relative overflow-hidden bg-[#f4fafd] py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#4db8e8]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#fbb03b]/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1a7ab8]">
                Servicios
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-[#0c2a3f] sm:text-4xl">
                Lo que hacemos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#0c2a3f]/70 sm:text-lg">
                Energías renovables, sistemas solares, construcción y remodelación. Cotización a
                medida por WhatsApp.
              </p>
            </div>
            <Button asChild size="lg" variant="outline" className="min-h-11 w-fit font-semibold">
              <Link href="/sistemas-solares">
                Ver sistemas solares
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {servicios.map((item) => {
              const inner = (
                <>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8f6fc]">
                    <Image
                      src={item.imagen}
                      alt={item.alt}
                      fill
                      className={`object-cover transition duration-700 group-hover:scale-105 ${
                        item.destacada ? "object-top" : "object-center"
                      }`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003d68]/55 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                    {item.href ? (
                      <span className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-white/95 text-[#00558f] shadow-sm transition group-hover:bg-[#fbb03b] group-hover:text-[#003d68]">
                        <ArrowUpRight className="size-4" />
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-[family-name:var(--font-outfit)] text-lg font-bold text-[#0c2a3f] sm:text-xl">
                      {item.titulo}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#0c2a3f]/70 sm:text-base">
                      {item.texto}
                    </p>
                    <span className="mt-4 inline-flex h-1 w-10 rounded-full bg-[#fbb03b] transition-all group-hover:w-16" />
                  </div>
                </>
              );

              return (
                <li
                  key={item.titulo}
                  className={`group flex overflow-hidden rounded-2xl border border-[#00558f]/12 bg-white shadow-[0_18px_44px_-30px_rgba(0,61,104,0.45)] transition duration-300 hover:-translate-y-1 hover:border-[#4db8e8]/40 hover:shadow-[0_24px_50px_-28px_rgba(0,61,104,0.5)] ${
                    item.destacada ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {item.href ? (
                    <Link href={item.href} className="flex w-full flex-col focus-visible:outline-none">
                      {inner}
                    </Link>
                  ) : (
                    <div className="flex w-full flex-col">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="energias-renovables" className="relative overflow-hidden bg-[#003d68] py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003d68] via-[#00558f] to-[#1a7ab8]/50" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#fbb03b]/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#fbb03b]">
              Energías renovables
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Paneles solares on-grid y off-grid
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Cotización de sistemas solares, venta e instalación y asesorías técnicas para un
              hogar que te cuida a ti y al planeta.
            </p>
          </div>
          <EcowattMedia />
          <div className="mt-8">
            <Button asChild size="lg" className="min-h-12 font-bold">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-4" />
                Cotizar sistema solar
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="trabajo-del-mes" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1a7ab8]">
              {TRABAJO_DEL_MES.etiqueta}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-[#0c2a3f] sm:text-4xl">
              {TRABAJO_DEL_MES.titulo}
            </h2>
            <p className="mt-2 text-sm font-semibold text-[#fbb03b]">{TRABAJO_DEL_MES.mes}</p>
            <p className="mt-4 text-base leading-relaxed text-[#0c2a3f]/70 sm:text-lg">
              {TRABAJO_DEL_MES.texto}
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#00558f]/14 bg-white shadow-[0_20px_50px_-28px_rgba(0,61,104,0.35)] sm:mt-10">
            <div className="relative aspect-[3/4] w-full sm:aspect-[4/5] md:aspect-[16/12]">
              <Image
                src={TRABAJO_DEL_MES.imagen}
                alt={TRABAJO_DEL_MES.alt}
                fill
                className="object-contain bg-[#e8f6fc] object-top md:object-center"
                sizes="(max-width: 1024px) 100vw, 1152px"
                priority={false}
              />
            </div>
            <div className="flex flex-col gap-4 border-t border-[#00558f]/14 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="text-sm leading-relaxed text-[#0c2a3f]/70 sm:max-w-md sm:text-base">
                Asesoría gratuita · Presupuesto sin compromiso
              </p>
              <Button asChild size="lg" className="min-h-12 w-full font-bold sm:w-auto">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  {TRABAJO_DEL_MES.cta}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              alt="Vivienda contemporánea"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003d68]/50 to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center bg-[#00558f] px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#fbb03b]">
              Nosotros
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight sm:text-4xl">
              Construcción y remodelación en Ñuble
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Desde Chillán para Ñuble armamos viviendas, remodelaciones, muebles en drywall y
              revestimientos a medida. Trabajamos con cita para cotizar tu proyecto con calma.
            </p>
            <p className="mt-6 text-sm font-semibold text-[#4db8e8]">
              Abierto ahora · Solo con cita
            </p>
          </div>
        </div>
      </section>

      <section id="datos-contacto" className="bg-[#f4fafd] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1a7ab8]">
              Contacto
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-[#0c2a3f] sm:text-4xl">
              Conversemos sobre tu próximo proyecto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#0c2a3f]/70 sm:text-lg">
              Escríbenos por WhatsApp o agenda una visita. Estamos en Diguillín, Chillán Viejo.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-[#1a7ab8]" aria-hidden />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1a7ab8]">
                  Dirección
                </p>
                <p className="mt-2 text-base leading-relaxed text-[#0c2a3f]">
                  Huambalí 1123, 3821027 Diguillín
                  <br />
                  Chillán Viejo, Ñuble, Chile
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-[#1a7ab8]" aria-hidden />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1a7ab8]">
                  Correo
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 inline-block break-all text-base font-semibold text-[#00558f] transition hover:text-[#fbb03b]"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 size-5 shrink-0 text-[#1a7ab8]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1a7ab8]">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block break-all text-base font-semibold text-[#00558f] transition hover:text-[#fbb03b]"
                >
                  +56 9 9546 7686
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Globe className="mt-0.5 size-5 shrink-0 text-[#1a7ab8]" aria-hidden />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1a7ab8]">
                  Sitio web
                </p>
                <a
                  href={WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block break-all text-base font-semibold text-[#00558f] transition hover:text-[#fbb03b]"
                >
                  www.ecowattchile.cl
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
