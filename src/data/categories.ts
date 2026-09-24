import type { ServiceCategory, LocalizedString } from "@/types/service";

export const categoryLabels: Record<ServiceCategory, LocalizedString> = {
  massages: { es: "Masajes", gl: "Masaxes", en: "Massages" },
  rituals: { es: "Rituales", gl: "Rituais", en: "Rituals" },
  spa: { es: "Spa", gl: "Spa", en: "Spa" },
  nails: {
    es: "Manicura y pedicura",
    gl: "Manicura e pedicura",
    en: "Manicure & pedicure",
  },
  wellbeing: { es: "Bienestar", gl: "Benestar", en: "Wellbeing" },
  specials: { es: "Especiales", gl: "Especiais", en: "Special treatments" },
};

export const categoryOrder: ServiceCategory[] = [
  "massages",
  "rituals",
  "spa",
  "nails",
  "wellbeing",
  "specials",
];
