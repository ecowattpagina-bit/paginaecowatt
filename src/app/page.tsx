import Image from "next/image";
import Header from "@/components/Header";

const servicios = [
  {
    titulo: "Energía solar",
    texto:
      "Diseño e instalación de sistemas fotovoltaicos para hogares, empresas y proyectos productivos.",
    icono: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
        <circle cx="24" cy="24" r="8" fill="currentColor" />
        <path
          d="M24 6v4M24 38v4M6 24h4M38 24h4M11.5 11.5l2.8 2.8M33.7 33.7l2.8 2.8M11.5 36.5l2.8-2.8M33.7 14.3l2.8-2.8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    titulo: "Energía eólica",
    texto:
      "Evaluación e integración de soluciones eólicas complementarias para maximizar tu autonomía energética.",
    icono: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
        <path
          d="M24 40V22M18 40h12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M24 22c0-6 4-10 10-12-2 6-6 10-10 12Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path
          d="M24 22c-5-3-7-9-6-15 5 3 8 9 6 15Z"
          fill="currentColor"
          opacity="0.65"
        />
        <path
          d="M24 22c3 5 9 8 15 6-4-5-9-7-15-6Z"
          fill="currentColor"
          opacity="0.75"
        />
        <circle cx="24" cy="22" r="2.5" fill="var(--navy-deep)" />
      </svg>
    ),
  },
  {
    titulo: "Construcción y asesoría",
    texto:
      "Obras y consultoría técnica con enfoque en eficiencia energética y materiales de alto rendimiento.",
    icono: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
        <path
          d="M8 40V20l16-10 16 10v20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 40V28h8v12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 24h4M30 24h4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
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
          className="object-cover object-center animate-drift"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-deep)]/88 via-[var(--navy)]/72 to-[var(--wave)]/55" />
        <div className="animate-shimmer absolute -right-20 top-16 h-72 w-72 rounded-full bg-[var(--sun)]/25 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -left-16 bottom-24 h-64 w-64 rounded-full bg-[var(--sky)]/20 blur-3xl" />
        <Header />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-24 pt-28 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32">
          <div className="max-w-2xl">
            <p className="animate-rise font-display text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Ecowatt
              <span className="mt-1 block text-[0.55em] font-semibold tracking-wide text-[var(--sun)] sm:mt-2">
                Chile
              </span>
            </p>
            <h1 className="animate-rise-delay-1 mt-6 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl">
              Construcción y energías renovables
            </h1>
            <p className="animate-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
              Proyectos sostenibles con sol, viento y criterio técnico en la región de Ñuble.
            </p>
            <div className="animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--sun)] px-6 text-base font-bold text-[var(--navy-deep)] transition hover:bg-[var(--sun-deep)]"
              >
                Solicitar cita
              </a>
              <a
                href="#servicios"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 px-6 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden leading-none">
          <svg
            className="animate-wave relative block h-14 w-[200%] text-[var(--mist)] sm:h-20"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M0,48 C180,80 360,16 540,40 C720,64 900,24 1080,44 C1260,64 1350,56 1440,40 L1440,80 L0,80 Z"
            />
            <path
              fill="currentColor"
              opacity="0.55"
              d="M1440,48 C1620,80 1800,16 1980,40 C2160,64 2340,24 2520,44 C2700,64 2790,56 2880,40 L2880,80 L1440,80 Z"
            />
          </svg>
        </div>
      </section>

      <section id="servicios" className="bg-[var(--mist)] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--wave)]">
              Servicios
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
              Energía limpia y construcción responsable
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink)]/70 sm:text-lg">
              Integramos renovables y obras con un mismo objetivo: eficiencia real para tu proyecto.
            </p>
          </div>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {servicios.map((item) => (
              <li key={item.titulo} className="group">
                <div className="text-[var(--sun-deep)] transition group-hover:text-[var(--navy)]">
                  {item.icono}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-[var(--ink)]">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--ink)]/70">
                  {item.texto}
                </p>
              </li>
            ))}
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
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/50 to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center bg-[var(--navy)] px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--sun)]">
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
            <p className="mt-6 text-sm font-semibold text-[var(--sky)]">
              Abierto ahora · Solo con cita
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[var(--mist)] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--wave)]">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
              Conversemos sobre tu próximo proyecto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink)]/70 sm:text-lg">
              Escríbenos o agenda una visita. Estamos en Diguillín, Chillán Viejo.
            </p>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--wave)]">
                  Dirección
                </p>
                <p className="mt-2 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
                  Huambalí 1123, 3821027 Diguillín
                  <br />
                  Chillán Viejo, Ñuble, Chile
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--wave)]">
                  Correo
                </p>
                <a
                  href="mailto:carayam@live.cl"
                  className="mt-2 inline-block text-base font-semibold text-[var(--navy)] transition hover:text-[var(--sun-deep)] sm:text-lg"
                >
                  carayam@live.cl
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--wave)]">
                  Sitio web
                </p>
                <a
                  href="http://www.ecowattchile.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-base font-semibold text-[var(--navy)] transition hover:text-[var(--sun-deep)] sm:text-lg"
                >
                  www.ecowattchile.cl
                </a>
              </div>
            </div>
            <form
              action="mailto:carayam@live.cl"
              method="get"
              encType="text/plain"
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_20px_50px_-28px_rgba(0,61,104,0.35)] sm:p-8"
            >
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[var(--ink)]">Nombre</span>
                <input
                  name="nombre"
                  type="text"
                  required
                  className="min-h-12 w-full rounded-md border border-[var(--navy)]/15 bg-[var(--foam)] px-4 text-base text-[var(--ink)] outline-none transition focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--sky)]/40"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[var(--ink)]">Correo</span>
                <input
                  name="correo"
                  type="email"
                  required
                  className="min-h-12 w-full rounded-md border border-[var(--navy)]/15 bg-[var(--foam)] px-4 text-base text-[var(--ink)] outline-none transition focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--sky)]/40"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[var(--ink)]">Mensaje</span>
                <textarea
                  name="mensaje"
                  rows={4}
                  required
                  className="w-full resize-y rounded-md border border-[var(--navy)]/15 bg-[var(--foam)] px-4 py-3 text-base text-[var(--ink)] outline-none transition focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--sky)]/40"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--sun)] px-6 text-base font-bold text-[var(--navy-deep)] transition hover:bg-[var(--sun-deep)]"
              >
                Solicitar cita
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[var(--navy-deep)] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--sun)] via-[var(--sky)] to-[var(--wave)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-ecowatt.jpg"
              alt="Ecowatt Chile"
              width={120}
              height={54}
              className="h-12 w-auto rounded-sm bg-white object-contain p-1"
            />
            <div>
              <p className="font-display text-lg font-bold">
                Ecowatt Chile
              </p>
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
