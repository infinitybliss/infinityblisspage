import type { LocalizedString } from "@/types/service";

/**
 * Informational-only upcoming offerings.
 * When a service launches: remove it from here, add it to the active catalog
 * with durations/prices/bookingId, and create its detail route.
 */
export type UpcomingService = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  /** Public image path under /public. */
  image: string;
  imageAlt: LocalizedString;
};

export const upcomingServices: UpcomingService[] = [
  {
    id: "pressotherapy",
    name: {
      es: "Presoterapia",
      gl: "Presoterapia",
      en: "Pressotherapy",
    },
    description: {
      es: "Una experiencia de bienestar pensada para favorecer la sensación de ligereza y descanso en las piernas mediante sesiones de presoterapia.",
      gl: "Unha experiencia de benestar pensada para favorecer a sensación de lixeireza e descanso nas pernas mediante sesións de presoterapia.",
      en: "A wellbeing experience designed to promote a feeling of lightness and relaxation in the legs through pressotherapy sessions.",
    },
    // Final asset: public/images/services/pressotherapy.jpg
    image: "/images/services/pressotherapy.jpg",
    imageAlt: {
      es: "Tratamiento de presoterapia en un ambiente relajante iluminado por velas",
      gl: "Tratamento de presoterapia nun ambiente relaxante iluminado por velas",
      en: "Pressotherapy treatment in a relaxing candlelit setting",
    },
  },
  {
    id: "nail-care",
    name: {
      es: "Manicura y cuidado de uñas",
      gl: "Manicura e coidado das uñas",
      en: "Manicure & Nail Care",
    },
    description: {
      es: "Cuidado de manos y uñas con tratamientos pensados para mantenerlas cuidadas, bonitas y saludables.",
      gl: "Coidado de mans e uñas con tratamentos pensados para mantelas coidadas, bonitas e saudables.",
      en: "Hand and nail care treatments designed to keep them looking neat, beautiful and well cared for.",
    },
    // Final asset: public/images/services/nail-care.jpg
    image: "/images/services/nail-care.jpg",
    imageAlt: {
      es: "Manicura y cuidado de uñas en un ambiente de bienestar",
      gl: "Manicura e coidado das uñas nun ambiente de benestar",
      en: "Manicure and nail care in a wellbeing setting",
    },
  },
];
