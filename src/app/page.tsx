import Image from "next/image";
import { Sun, Wind, HardHat, MapPin, Mail, Globe } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const servicios = [
  {
    titulo: "Energía solar",
    texto:
      "Diseño e instalación de sistemas fotovoltaicos para hogares, empresas y proyectos productivos.",
    icono: Sun,
  },
  {
    titulo: "Energía eólica",
    texto:
      "Evaluación e integración de soluciones eólicas complementarias para maximizar tu autonomía energética.",
    icono: Wind,
  },
  {
    titulo: "Construcción y asesoría",
    texto:
      "Obras y consultoría técnica con enfoque en eficiencia energética y materiales de alto rendimiento.",
    icono: HardHat,
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80"
          alt="Paneles solares bajo cielo azul"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/88 via-navy/72 to-wave/55" />
        <div className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-sun/25 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -left-16 bottom-24 h-64 w-64 rounded-full bg-sky/20 blur-3xl" />
        <Header />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-28 pt-28 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32">
          <div className="max-w-2xl">
            <p className="font-display text-[2.35rem] font-extrabold leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Ecowatt
              <span className="mt-1 block text-[0.55em] font-semibold tracking-wide text-primary sm:mt-2">
                Chile
              </span>
            </p>
            <h1 className="mt-6 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl">
              Construcción y energías renovables
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
              Proyectos sostenibles con sol, viento y criterio técnico en la región de Ñuble.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center">
              <Button asChild size="lg" className="min-h-12 w-full px-6 text-base font-bold sm:w-auto">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-12 w-full border-white/35 bg-transparent px-6 text-base font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden leading-none">
          <svg
            className="relative block h-14 w-full text-mist sm:h-20"
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

      <section id="servicios" className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-wave">
              Servicios
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Energía limpia y construcción responsable
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
              Integramos renovables y obras con un mismo objetivo: eficiencia real para tu proyecto.
            </p>
          </div>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {servicios.map((item) => {
              const Icon = item.icono;
              return (
                <li key={item.titulo} className="group">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-secondary text-sun-deep transition group-hover:bg-navy group-hover:text-primary">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    {item.texto}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="nosotros" className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80"
              alt="Parque eólico al atardecer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center bg-navy px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Nosotros
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Con raíces en Ñuble, mirada hacia el futuro
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Desde Chillán Viejo acompañamos proyectos de construcción y energías renovables con
              atención personalizada. Trabajamos con cita para dedicar el tiempo que tu obra o
              sistema energético necesita.
            </p>
            <p className="mt-6 text-sm font-semibold text-sky">
              Abierto ahora · Solo con cita
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-wave">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Conversemos sobre tu próximo proyecto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
              Escríbenos por WhatsApp o agenda una visita. Estamos en Diguillín, Chillán Viejo.
            </p>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-wave" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-wave">
                    Dirección
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-ink sm:text-lg">
                    Huambalí 1123, 3821027 Diguillín
                    <br />
                    Chillán Viejo, Ñuble, Chile
                  </p>
                </div>
              </div>
              <Separator className="bg-navy/10" />
              <div className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-wave" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-wave">
                    Correo
                  </p>
                  <a
                    href="mailto:carayam@live.cl"
                    className="mt-2 inline-block break-all text-base font-semibold text-navy transition hover:text-sun-deep sm:text-lg"
                  >
                    carayam@live.cl
                  </a>
                </div>
              </div>
              <Separator className="bg-navy/10" />
              <div className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 size-5 shrink-0 text-wave" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-wave">
                    WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block break-all text-base font-semibold text-navy transition hover:text-sun-deep sm:text-lg"
                  >
                    +56 9 9546 7686
                  </a>
                </div>
              </div>
              <Separator className="bg-navy/10" />
              <div className="flex gap-3">
                <Globe className="mt-0.5 size-5 shrink-0 text-wave" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-wave">
                    Sitio web
                  </p>
                  <a
                    href="http://www.ecowattchile.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block break-all text-base font-semibold text-navy transition hover:text-sun-deep sm:text-lg"
                  >
                    www.ecowattchile.cl
                  </a>
                </div>
              </div>
            </div>
            <form
              action="mailto:carayam@live.cl"
              method="get"
              encType="text/plain"
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-[0_20px_50px_-28px_rgba(0,61,104,0.35)] sm:p-8"
            >
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="min-h-12 bg-foam px-4 text-base md:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="correo">Correo</Label>
                <Input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  className="min-h-12 bg-foam px-4 text-base md:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  className="min-h-28 resize-y bg-foam px-4 py-3 text-base md:text-base"
                />
              </div>
              <Button type="submit" size="lg" className="mt-1 min-h-12 w-full text-base font-bold sm:w-auto">
                Solicitar cita
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-12 w-full border-[#25D366] text-[#128C4B] hover:bg-[#25D366]/10 hover:text-[#128C4B] sm:w-auto"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sun via-sky to-wave" />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 pb-28 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-12 lg:px-10">
          <div className="flex min-w-0 items-center gap-4">
            <Image
              src="/logo-ecowatt.png"
              alt="Ecowatt Chile"
              width={160}
              height={107}
              className="h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]"
            />
            <div>
              <p className="font-display text-lg font-bold">Ecowatt Chile</p>
              <p className="text-sm text-white/65">Construcción y energías renovables</p>
            </div>
          </div>
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} Ecowatt Chile. Chillán Viejo, Ñuble.
          </p>
        </div>
      </footer>
    </main>
  );
}
