export const locales = ["es", "gl", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeHtmlLang: Record<Locale, string> = {
  es: "es",
  gl: "gl",
  en: "en",
};

export const localeOpenGraph: Record<Locale, string> = {
  es: "es_ES",
  gl: "gl_ES",
  en: "en_GB",
};
