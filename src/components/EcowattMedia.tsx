"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EcowattMedia() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  async function toggleSong() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-10">
      <div className="w-full max-w-[320px] shrink-0 sm:max-w-[360px]">
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_20px_50px_-28px_rgba(0,0,0,0.55)]">
          {ready ? (
            <video
              className="aspect-[9/16] h-auto w-full bg-black object-contain"
              src="/ecowatt-video.mp4"
              controls
              playsInline
              preload="metadata"
              poster="/servicio-energias.jpg"
            />
          ) : (
            <div className="aspect-[9/16] w-full bg-[#002844]" />
          )}
        </div>
      </div>
      <div className="flex w-full max-w-md flex-1 flex-col justify-center gap-5 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-7 lg:max-w-lg">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#fbb03b]">
            Canción
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-outfit)] text-2xl font-bold text-white">
            Escucha Ecowatt Chile
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
            La música de nuestra marca mientras conoces paneles solares on-grid y off-grid,
            venta, instalación y asesorías.
          </p>
        </div>
        {ready ? (
          <audio
            ref={audioRef}
            src="/ecowatt-cancion.mp3"
            preload="metadata"
            loop
            onEnded={() => setPlaying(false)}
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
          />
        ) : null}
        <Button type="button" size="lg" onClick={toggleSong} className="min-h-12 w-full font-bold sm:w-auto">
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          {playing ? "Pausar canción" : "Reproducir canción"}
        </Button>
        <p className="inline-flex items-center gap-2 text-xs text-white/60">
          <Volume2 className="size-3.5" />
          Activa el sonido desde tu dispositivo
        </p>
      </div>
    </div>
  );
}
