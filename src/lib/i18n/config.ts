import { defaultLocale, locales, type Locale } from "@/types/locale";

export { defaultLocale, locales, type Locale };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromParam(value: string): Locale | null {
  return isLocale(value) ? value : null;
}
