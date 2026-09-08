import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramGallery from "@/components/InstagramGallery";
import { getInstagramMedia } from "@/lib/instagram";
import { INSTAGRAM_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotos y reels de @ecowattchile. Remodelaciones, viviendas y obras en Chillán y Ñuble.",
  alternates: {
    canonical: "/galeria",
  },
  openGraph: {
    title: "Galería | Ecowatt Chile",
    description:
      "Fotos y reels de @ecowattchile. Remodelaciones, viviendas y obras en Chillán y Ñuble.",
    url: "/galeria",
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 600;

export default async function GaleriaPage() {
  const items = await getInstagramMedia(30);

  return (
    <main className="flex-1 bg-[#f4fafd]">
      <section className="relative overflow-hidden bg-[#003d68] pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003d68] via-[#00558f] to-[#1a7ab8]/40" />
        <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-[#fbb03b]/20 blur-3xl" />
        <Header variant="solid" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#fbb03b]">
            Instagram
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Galería Ecowatt Chile
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Fotos y reels de{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#fbb03b] hover:underline"
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

      <Footer />
    </main>
  );
}
