export const WHATSAPP_PHONE = "56995467686";
export const WHATSAPP_TEXT =
  "Hola Ecowatt Chile, quiero una cotización.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
export const INSTAGRAM_HANDLE = "ecowattchile";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const FACEBOOK_URL = "https://www.facebook.com/ecowattchile";
export const YOUTUBE_URL = "https://www.youtube.com/@ecowattchile";
export const SITE_URL = "https://www.ecowattchile.cl";
export const WEBSITE_URL = SITE_URL;
export const SITE_NAME = "Ecowatt Chile";
export const SITE_TITLE =
  "Ecowatt Chile | Asesoría en ingeniería y construcción";
export const SITE_DESCRIPTION =
  "Casas a medida, prefabricadas, energías renovables, quinchos, piscinas, mantenciones, renovaciones y remodelaciones en Chillán y la región de Ñuble.";
export const EMAIL = "carayam@live.cl";
export const EMAIL_URL = `mailto:${EMAIL}`;
export const PHONE_DISPLAY = "+56 9 9546 7686";
export const ADDRESS_LINES = [
  "Huambalí 1123, 3821027 Diguillín",
  "Chillán Viejo, Ñuble, Chile",
] as const;

export const SOCIAL_LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    href: INSTAGRAM_URL,
    className: "bg-[#E4405F] hover:bg-[#d13252] text-white",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: FACEBOOK_URL,
    className: "bg-[#1877F2] hover:bg-[#1464ce] text-white",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: YOUTUBE_URL,
    className: "bg-[#FF0000] hover:bg-[#e00000] text-white",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: WHATSAPP_URL,
    className: "bg-[#25D366] hover:bg-[#1ebe57] text-white",
  },
  {
    id: "web",
    label: "Sitio web",
    href: WEBSITE_URL,
    className: "bg-[#4db8e8] hover:bg-[#1a7ab8] text-[#003d68]",
  },
  {
    id: "email",
    label: "Correo",
    href: EMAIL_URL,
    className: "bg-white/15 hover:bg-[#fbb03b] hover:text-[#003d68] text-white",
  },
] as const;
