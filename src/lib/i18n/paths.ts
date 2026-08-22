import { locales, type Locale } from "@/lib/i18n/config";
import {
  isServicesPath,
} from "@/lib/services";
import { resolveEquivalentServicePath } from "@/lib/services/metadata";

export const routeIds = [
  "home",
  "services",
  "contact",
  "legalNotice",
  "privacy",
  "cookies",
] as const;

export type RouteId = (typeof routeIds)[number];

export const sectionIds = {
  services: { es: "servicios", gl: "servizos" },
  pilgrims: { es: "peregrinos", gl: "peregrinos" },
  about: { es: "sobre-nosotros", gl: "sobre-nos" },
  booking: { es: "reservas", gl: "reservas" },
  contact: { es: "contacto", gl: "contacto" },
} as const;

export type SectionId = keyof typeof sectionIds;

/**
 * Localized pathnames without the locale prefix.
 * Home is an empty string so /es and /gl remain the locale roots.
 */
export const pathnames: Record<RouteId, Record<Locale, string>> = {
  home: { es: "", gl: "" },
  services: { es: "/servicios", gl: "/servizos" },
  contact: { es: "/contacto", gl: "/contacto" },
  legalNotice: { es: "/aviso-legal", gl: "/aviso-legal" },
  privacy: { es: "/privacidad", gl: "/privacidade" },
  cookies: { es: "/cookies", gl: "/cookies" },
};

export function getLocalizedHref(locale: Locale, routeId: RouteId): string {
  return `/${locale}${pathnames[routeId][locale]}`;
}

export function getHomeSectionHref(locale: Locale, section: SectionId): string {
  return `${getLocalizedHref(locale, "home")}#${sectionIds[section][locale]}`;
}

export function getSectionId(locale: Locale, section: SectionId): string {
  return sectionIds[section][locale];
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(es|gl)(?=\/|$)/, "");
  return stripped;
}

function normalizePath(pathname: string): string {
  if (pathname === "/" || pathname === "") {
    return "";
  }
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function getLocaleFromPathname(pathname: string): Locale | null {
  const match = pathname.match(/^\/(es|gl)(?=\/|$)/);
  return match?.[1] === "gl" ? "gl" : match?.[1] === "es" ? "es" : null;
}

export function getRouteIdFromPathname(pathname: string): RouteId {
  const rest = normalizePath(stripLocalePrefix(pathname));

  for (const routeId of routeIds) {
    for (const locale of locales) {
      if (normalizePath(pathnames[routeId][locale]) === rest) {
        return routeId;
      }
    }
  }

  const segments = rest.split("/").filter(Boolean);
  if (segments.length >= 1) {
    for (const locale of locales) {
      if (isServicesPath(locale, segments[0])) {
        return "services";
      }
    }
  }

  return "home";
}

export function mapSectionId(sectionId: string, targetLocale: Locale): string {
  for (const map of Object.values(sectionIds)) {
    if (map.es === sectionId || map.gl === sectionId) {
      return map[targetLocale];
    }
  }

  return sectionId;
}

/**
 * Builds the equivalent URL in another locale, including localized pathnames
 * and in-page section hashes.
 */
export function getEquivalentHref(
  pathname: string,
  targetLocale: Locale,
  hash?: string,
): string {
  const sourceLocale = getLocaleFromPathname(pathname);
  const servicePath =
    sourceLocale &&
    resolveEquivalentServicePath(pathname, sourceLocale, targetLocale);

  const href = servicePath ?? getLocalizedHref(
    targetLocale,
    getRouteIdFromPathname(pathname),
  );

  if (!hash) {
    return href;
  }

  const sectionId = hash.replace(/^#/, "");
  return `${href}#${mapSectionId(sectionId, targetLocale)}`;
}
