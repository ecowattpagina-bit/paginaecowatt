import type { Metadata, Viewport } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import WhatsAppButton from "@/components/WhatsAppButton";

const display = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ecowatt Chile | Asesoría en ingeniería y construcción",
  description:
    "Casas a medida, prefabricadas, energías renovables, quinchos, piscinas, mantenciones, renovaciones y remodelaciones en Chillán y Ñuble.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("h-full antialiased font-sans", display.variable, body.variable)}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col overflow-x-hidden font-sans"
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
