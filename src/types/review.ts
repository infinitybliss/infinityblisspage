import type { Locale } from "@/types/locale";

export type ReviewSource = "google" | "direct";

export type Review = {
  id: string;
  author: string;
  locale: Locale;
  quote: string;
  source?: ReviewSource;
};
