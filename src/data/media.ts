import type { LocalizedString } from "@/types/service";

export type SiteImage = {
  src: string;
  alt: LocalizedString;
  width: number;
  height: number;
};

export const siteImages = {
  hero: {
    src: "/images/massage-hands.jpg",
    alt: {
      es: "Masaje de manos en un ambiente cálido y relajado",
      gl: "Masaxe de mans nun ambiente cálido e relaxado",
    },
    width: 1024,
    height: 691,
  },
  about: {
    src: "/images/facial-mask.jpg",
    alt: {
      es: "Tratamiento facial con mascarilla en Ritual Essences",
      gl: "Tratamento facial con máscara en Ritual Essences",
    },
    width: 562,
    height: 354,
  },
  pilgrims: {
    src: "/images/massage-back-oil.jpg",
    alt: {
      es: "Masaje de espalda para recuperar el cuerpo después del esfuerzo",
      gl: "Masaxe de costas para recuperar o corpo despois do esforzo",
    },
    width: 701,
    height: 438,
  },
  bookingAtmosphere: {
    src: "/images/massage-back-ambiance.jpg",
    alt: {
      es: "Ambiente de bienestar durante un masaje de espalda",
      gl: "Ambiente de benestar durante unha masaxe de costas",
    },
    width: 554,
    height: 554,
  },
} as const satisfies Record<string, SiteImage>;
