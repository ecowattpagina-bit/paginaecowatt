import { WHATSAPP_URL } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed right-4 z-50 flex h-14 min-w-14 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-white shadow-[0_10px_28px_-8px_rgba(18,140,70,0.7)] transition hover:bg-[#1ebe57] active:scale-95 max-sm:bottom-[max(1.25rem,env(safe-area-inset-bottom))] sm:right-6 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:h-16 sm:px-5"
    >
      <WhatsAppIcon className="size-7 shrink-0 sm:size-8" />
      <span className="hidden pr-1 text-sm font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
