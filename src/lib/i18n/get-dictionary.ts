import { en } from "@/messages/en";
import { es } from "@/messages/es";
import { gl } from "@/messages/gl";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

const dictionaries: Record<Locale, Dictionary> = {
  es,
  gl,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
