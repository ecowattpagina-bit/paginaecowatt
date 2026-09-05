"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#inicio" className="relative z-10 block shrink-0">
          <Image
            src="/logo-ecowatt.jpg"
            alt="Ecowatt Chile"
            width={160}
            height={72}
            className="h-11 w-auto object-contain sm:h-14"
            priority
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/90 transition hover:text-[var(--sun)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-md bg-[var(--sun)] px-4 py-2.5 text-sm font-bold text-[var(--navy-deep)] transition hover:bg-[var(--sun-deep)]"
          >
            Solicitar cita
          </a>
        </nav>
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur-sm md:hidden"
        >
          <span className="sr-only">Menú</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[var(--navy-deep)]/95 px-5 py-6 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--sun)] px-4 py-3 text-sm font-bold text-[var(--navy-deep)]"
            >
              Solicitar cita
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
