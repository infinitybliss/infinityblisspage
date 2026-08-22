import type { LocalizedString, ServiceCategory } from "@/types/service";

export const categoryLabels: Record<ServiceCategory, LocalizedString> = {
  massages: { es: "Masajes", gl: "Masaxes" },
  rituals: { es: "Rituales", gl: "Rituais" },
  spa: { es: "Spa", gl: "Spa" },
  specials: { es: "Especiales", gl: "Especiais" },
};

export const categoryOrder: ServiceCategory[] = [
  "massages",
  "rituals",
  "spa",
  "specials",
];
