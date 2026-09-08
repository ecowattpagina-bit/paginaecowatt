"use client";

import { useEffect, useMemo, useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";
import type { IgMedia } from "@/lib/instagram";
import { INSTAGRAM_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";

type Filter = "all" | "image" | "video";

function isVideo(item: IgMedia) {
  return item.media_type === "VIDEO" || item.media_type === "REELS";
}

function previewUrl(item: IgMedia) {
  if (isVideo(item)) return item.thumbnail_url || item.media_url || "";
  return item.thumbnail_url || item.media_url || "";
}

export default function InstagramGallery({ items }: { items: IgMedia[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<IgMedia | null>(null);

  const filtered = useMemo(() => {
    if (filter === "image") {
      return items.filter((i) => !isVideo(i));
    }
    if (filter === "video") {
      return items.filter((i) => isVideo(i));
    }
    return items;
  }, [filter, items]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-[#00558f]/14 bg-white px-6 py-14 text-center shadow-[0_16px_40px_-28px_rgba(0,61,104,0.35)]">
        <p className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[#0c2a3f]">
          Conecta Instagram para ver el feed en vivo
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#0c2a3f]/70 sm:text-base">
          Agrega <code className="rounded bg-[#e8f6fc] px-1.5 py-0.5 text-[#00558f]">INSTAGRAM_ACCESS_TOKEN</code> en
          Vercel. Mientras tanto puedes ver todo en la cuenta oficial.
        </p>
        <Button asChild size="lg" className="mt-6 min-h-12 font-bold">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Abrir @ecowattchile
          </a>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {(
          [
            ["all", "Todo"],
            ["image", "Fotos"],
            ["video", "Reels"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`min-h-10 rounded-full px-4 text-sm font-semibold transition ${
              filter === value
                ? "bg-[#00558f] text-white"
                : "bg-white text-[#00558f] ring-1 ring-[#00558f]/15 hover:bg-[#e8f6fc]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {filtered.map((item) => {
          const src = previewUrl(item);
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative aspect-square w-full overflow-hidden rounded-xl bg-[#00558f]/10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4db8e8]"
              >
                {src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={src}
                    alt={item.caption?.slice(0, 120) || "Publicación de Instagram"}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#00558f] text-white/80">
                    Ver post
                  </div>
                )}
                {isVideo(item) ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <span className="flex size-12 items-center justify-center rounded-full bg-white/95 text-[#00558f] shadow-lg">
                      <Play className="size-5 fill-current" />
                    </span>
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Vista de publicación"
          onClick={() => setActive(null)}
        >
          <div
            className="relative flex max-h-[100svh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl bg-[#003d68] sm:max-h-[90svh] sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <p className="truncate text-sm font-semibold text-white/90">@ecowattchile</p>
              <div className="flex items-center gap-2">
                <a
                  href={active.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-white/85 hover:bg-white/10"
                >
                  <ExternalLink className="size-4" />
                  Instagram
                </a>
                <button
                  type="button"
                  aria-label="Cerrar"
                  onClick={() => setActive(null)}
                  className="inline-flex size-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
              {isVideo(active) && active.media_url ? (
                <video
                  key={active.id}
                  src={active.media_url}
                  poster={active.thumbnail_url}
                  controls
                  playsInline
                  autoPlay
                  className="max-h-[70svh] w-full object-contain"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={previewUrl(active)}
                  alt={active.caption?.slice(0, 120) || "Publicación de Instagram"}
                  className="max-h-[70svh] w-full object-contain"
                />
              )}
            </div>

            {active.caption ? (
              <p className="max-h-28 overflow-y-auto border-t border-white/10 px-4 py-3 text-sm leading-relaxed text-white/80">
                {active.caption}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
