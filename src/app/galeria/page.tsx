import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import InstagramGallery from "@/components/InstagramGallery";
import { getInstagramMedia } from "@/lib/instagram";
import { INSTAGRAM_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Galería | Ecowatt Chile",
  description:
    "Fotos y reels de @ecowattchile. Remodelaciones, viviendas y obras en Ñuble.",
};

export const dynamic = "force-dynamic";
export const revalidate = 600;

export default async function GaleriaPage() {
  const items = await getInstagramMedia(30);

  return (
    <main className="flex-1 bg-mist">
      <section className="relative overflow-hidden bg-navy-deep pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-wave/40" />
        <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-sun/20 blur-3xl" />
        <Header variant="solid" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Instagram
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Galería Ecowatt Chile
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Fotos y reels de{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              @ecowattchile
            </a>
            . Se actualiza sola cuando publican contenido nuevo.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="min-h-12 font-bold">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Seguir en Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <InstagramGallery items={items} />
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
              className="h-14 w-auto object-contain drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]"
            />
            <div>
              <p className="font-display text-lg font-bold">Ecowatt Chile</p>
              <p className="text-sm text-white/65">Construcción y remodelaciones</p>
            </div>
          </div>
          <Link href="/" className="text-sm font-semibold text-primary hover:underline">
            Volver al inicio
          </Link>
        </div>
      </footer>
    </main>
  );
}
