"use client";

import Image from "next/image";
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
            src="/logo-ecowatt.png"
            alt="Ecowatt Chile"
            width={200}
            height={134}
            className="h-12 w-auto max-w-[52vw] object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.55)] sm:h-[4.25rem] sm:max-w-none"
            priority
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/90 transition hover:text-primary"
            >
              {link.label}
            </a>
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
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                >
                  {link.label}
                </a>
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
