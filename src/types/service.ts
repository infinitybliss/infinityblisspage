import type { Locale } from "@/types/locale";

export const serviceIds = [
  "masajes",
  "manos-pies",
  "unas",
  "spa-japones",
  "presoterapia",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export type ServiceCategory =
  | "massage"
  | "hands-feet"
  | "nails"
  | "spa"
  | "pressotherapy";

export type Service = {
  id: ServiceId;
  category: ServiceCategory;
  slug: Record<Locale, string>;
  durationMinutes: number | null;
  priceEuros: number | null;
  imageSrc: string | null;
};
