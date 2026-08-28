import type { LocalizedString, ServiceCategory } from "@/types/service";

export const categoryLabels: Record<ServiceCategory, LocalizedString> = {
  massages: { es: "Masajes", gl: "Masaxes", en: "Massages" },
  rituals: { es: "Rituales", gl: "Rituais", en: "Rituals" },
  spa: { es: "Spa", gl: "Spa", en: "Spa" },
  specials: { es: "Especiales", gl: "Especiais", en: "Special treatments" },
};

export const categoryOrder: ServiceCategory[] = [
  "massages",
  "rituals",
  "spa",
  "specials",
];
