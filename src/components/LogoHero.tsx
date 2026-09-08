import Image from "next/image";

export default function LogoHero({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-hero.png"
      alt="Ecowatt Chile — ¡Calor de hogar!"
      width={1031}
      height={501}
      priority
      quality={100}
      unoptimized
      className={className}
    />
  );
}
