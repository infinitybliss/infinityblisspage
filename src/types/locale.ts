export const locales = ["es", "gl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeHtmlLang: Record<Locale, string> = {
  es: "es",
  gl: "gl",
};

export const localeOpenGraph: Record<Locale, string> = {
  es: "es_ES",
  gl: "gl_ES",
};
