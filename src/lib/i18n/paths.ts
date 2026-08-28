import { locales, type Locale } from "@/lib/i18n/config";
import {
  isServicesPath,
} from "@/lib/services";
import { resolveEquivalentServicePath } from "@/lib/services/metadata";

export const routeIds = [
  "home",
  "services",
  "booking",
  "contact",
  "legalNotice",
  "privacy",
  "cookies",
  "bookingTerms",
] as const;

export type RouteId = (typeof routeIds)[number];

export const sectionIds = {
  services: { es: "servicios", gl: "servizos", en: "treatments" },
  pilgrims: { es: "peregrinos", gl: "peregrinos", en: "pilgrims" },
  about: { es: "sobre-nosotros", gl: "sobre-nos", en: "about-us" },
  booking: { es: "reservas", gl: "reservas", en: "book" },
  contact: { es: "contacto", gl: "contacto", en: "contact" },
} as const;

export type SectionId = keyof typeof sectionIds;

/**
 * Localized pathnames without the locale prefix.
 * Home is an empty string so /es and /gl remain the locale roots.
 */
export const pathnames: Record<RouteId, Record<Locale, string>> = {
  home: { es: "", gl: "", en: "" },
  services: { es: "/servicios", gl: "/servizos", en: "/services" },
  booking: { es: "/reservas", gl: "/reservas", en: "/book" },
  contact: { es: "/contacto", gl: "/contacto", en: "/contact" },
  legalNotice: { es: "/aviso-legal", gl: "/aviso-legal", en: "/legal-notice" },
  privacy: { es: "/privacidad", gl: "/privacidade", en: "/privacy" },
  cookies: { es: "/cookies", gl: "/cookies", en: "/cookies" },
  bookingTerms: {
    es: "/condiciones-de-reserva",
    gl: "/condicions-de-reserva",
    en: "/booking-terms",
  },
};

const localePathPattern = `^/(${locales.join("|")})(?=/|$)`;

export function getLocalizedHref(locale: Locale, routeId: RouteId): string {
  return `/${locale}${pathnames[routeId][locale]}`;
}

/** Dedicated booking page, optionally scoped to a service duration variant. */
export function getBookingHref(
  locale: Locale,
  options?: {
    serviceId?: string;
    durationMinutes?: number;
  },
): string {
  const base = getLocalizedHref(locale, "booking");
  if (!options?.serviceId) {
    return base;
  }

  const params = new URLSearchParams();
  params.set("service", options.serviceId);
  if (options.durationMinutes != null) {
    params.set("duration", String(options.durationMinutes));
  }

  return `${base}?${params.toString()}`;
}

export function getHomeSectionHref(locale: Locale, section: SectionId): string {
  return `${getLocalizedHref(locale, "home")}#${sectionIds[section][locale]}`;
}

export function getSectionId(locale: Locale, section: SectionId): string {
  return sectionIds[section][locale];
}

export function stripLocalePrefix(pathname: string): string {
  return pathname.replace(new RegExp(localePathPattern), "");
}

function normalizePath(pathname: string): string {
  if (pathname === "/" || pathname === "") {
    return "";
  }
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function getLocaleFromPathname(pathname: string): Locale | null {
  const match = pathname.match(new RegExp(localePathPattern));
  const value = match?.[1];
  return value && locales.includes(value as Locale) ? (value as Locale) : null;
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
    const values = Object.values(map);
    if (values.some((value) => value === sectionId)) {
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
