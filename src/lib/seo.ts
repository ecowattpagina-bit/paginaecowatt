import {
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  WHATSAPP_PHONE,
  YOUTUBE_URL,
} from "@/lib/site";

export const seo = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Ecowatt Chile",
    "construcción Chillán",
    "remodelaciones Ñuble",
    "casas prefabricadas Chillán",
    "muebles a medida",
    "radieres y revestimientos",
    "energías renovables",
    "quinchos",
    "piscinas",
    "ingeniería y construcción",
  ],
};

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/logo-ecowatt.png`,
    logo: `${SITE_URL}/logo-ecowatt.png`,
    description: SITE_DESCRIPTION,
    telephone: `+${WHATSAPP_PHONE}`,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Huambalí 1123",
      postalCode: "3821027",
      addressLocality: "Chillán Viejo",
      addressRegion: "Ñuble",
      addressCountry: "CL",
    },
    areaServed: ["Chillán", "Chillán Viejo", "Ñuble"],
    openingHours: "Mo-Sa 09:00-19:00",
    priceRange: "$$",
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL, YOUTUBE_URL],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_PHONE}`,
      contactType: "sales",
      availableLanguage: ["Spanish"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "es-CL",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-ecowatt.png`,
    },
  };
}
