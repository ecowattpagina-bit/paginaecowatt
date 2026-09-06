"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#trabajo-del-mes", label: "Del mes" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/galeria", label: "Galería" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Header({
  variant = "transparent",
}: {
  variant?: "transparent" | "solid";
}) {
  const [open, setOpen] = useState(false);
  const solid = variant === "solid";

  return (
    <header
      className={
        solid
          ? "absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-deep/80 backdrop-blur-md"
          : "absolute inset-x-0 top-0 z-50"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="relative z-10 block shrink-0">
          <Image
            src="/logo-ecowatt.png"
            alt="Ecowatt Chile"
            width={200}
            height={134}
            className="h-12 w-auto max-w-[52vw] object-contain drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] sm:h-[4.25rem] sm:max-w-none"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/90 transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg" className="min-h-11 px-4 font-bold">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </Button>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              aria-label="Abrir menú"
              className="bg-white/15 text-white hover:bg-white/25 hover:text-white md:hidden"
            >
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-navy-deep bg-navy-deep text-white sm:max-w-xs [&_[data-slot=sheet-close]]:text-white"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-white">Menú</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pb-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-4 min-h-12 w-full font-bold">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <WhatsAppIcon className="size-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
