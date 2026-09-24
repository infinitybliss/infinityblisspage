import type { LocalizedString } from "@/types/service";

export type SiteImage = {
  src: string;
  alt: LocalizedString;
  width: number;
  height: number;
};

export const siteImages = {
  hero: {
    src: "/images/services/manicura-y-unas.webp",
    alt: {
      es: "Masaje de manos en un ambiente cálido y relajado",
      gl: "Masaxe de mans nun ambiente cálido e relaxado",
      en: "Hand massage in a warm, relaxing atmosphere",
    },
    width: 1024,
    height: 691,
  },
  about: {
    src: "/images/services/ritual-alma.webp",
    alt: {
      es: "Tratamiento facial con mascarilla en Infinity Bliss",
      gl: "Tratamento facial con máscara en Infinity Bliss",
      en: "Facial treatment with mask at Infinity Bliss",
    },
    width: 562,
    height: 354,
  },
  pilgrims: {
    src: "/images/services/pilgrim-massage.webp",
    alt: {
      es: "Masaje peregrino para recuperar las piernas después del Camino",
      gl: "Masaxe peregrino para recuperar as pernas despois do Camiño",
      en: "Pilgrim massage to help tired legs recover after the Camino",
    },
    width: 1013,
    height: 760,
  },
  bookingAtmosphere: {
    src: "/images/services/hospitality-reset-premium.webp",
    alt: {
      es: "Ambiente de bienestar durante un masaje de espalda",
      gl: "Ambiente de benestar durante unha masaxe de costas",
      en: "Wellbeing atmosphere during a back massage",
    },
    width: 547,
    height: 365,
  },
} as const satisfies Record<string, SiteImage>;
