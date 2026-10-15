import type { LocalizedString } from "@/types/service";

export type SiteImage = {
  src: string;
  alt: LocalizedString;
  width: number;
  height: number;
};

export const siteImages = {
  hero: {
    src: "/images/center/recepcion-manicura.webp",
    alt: {
      es: "Recepción y zona de manicura de Infinity Bliss en Santiago de Compostela",
      gl: "Recepción e zona de manicura de Infinity Bliss en Santiago de Compostela",
      en: "Reception and manicure area at Infinity Bliss in Santiago de Compostela",
    },
    width: 768,
    height: 1024,
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

/** Homepage hero carousel — real photos of the centre. */
export const heroSlides: SiteImage[] = [
  {
    src: "/images/center/recepcion-manicura.webp",
    alt: {
      es: "Recepción y zona de manicura de Infinity Bliss en Santiago de Compostela",
      gl: "Recepción e zona de manicura de Infinity Bliss en Santiago de Compostela",
      en: "Reception and manicure area at Infinity Bliss in Santiago de Compostela",
    },
    width: 768,
    height: 1024,
  },
  {
    src: "/images/center/zona-manicura.webp",
    alt: {
      es: "Estación de manicura profesional en Infinity Bliss",
      gl: "Estación de manicura profesional en Infinity Bliss",
      en: "Professional manicure station at Infinity Bliss",
    },
    width: 768,
    height: 1024,
  },
  {
    src: "/images/center/sala-masaje-monstera.webp",
    alt: {
      es: "Sala de masaje luminosa con camilla preparada en Infinity Bliss",
      gl: "Sala de masaxe luminosa con camilla preparada en Infinity Bliss",
      en: "Bright massage room with prepared treatment table at Infinity Bliss",
    },
    width: 768,
    height: 1024,
  },
  {
    src: "/images/center/sala-masaje-zen.webp",
    alt: {
      es: "Sala de tratamiento con mural zen en Infinity Bliss",
      gl: "Sala de tratamento con mural zen en Infinity Bliss",
      en: "Treatment room with zen mural at Infinity Bliss",
    },
    width: 768,
    height: 1024,
  },
  {
    src: "/images/center/camilla-preparada.webp",
    alt: {
      es: "Camilla de masaje preparada con toallas en Infinity Bliss",
      gl: "Camilla de masaxe preparada con toallas en Infinity Bliss",
      en: "Massage table prepared with towels at Infinity Bliss",
    },
    width: 776,
    height: 1024,
  },
];
