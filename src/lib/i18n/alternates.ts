import { site } from "@/data/site";
import { locales } from "@/lib/i18n/config";
import { getLocalizedHref, type RouteId } from "@/lib/i18n/paths";
import { getEquivalentServiceHref } from "@/lib/services";
import type { Locale } from "@/types/locale";
import type { Service } from "@/types/service";

export function buildRouteLanguageAlternates(
  routeId: RouteId,
): Record<string, string> {
  const languages = Object.fromEntries(
    locales.map((locale) => [
      locale,
      `${site.url}${getLocalizedHref(locale, routeId)}`,
    ]),
  ) as Record<Locale, string>;

  return {
    ...languages,
    "x-default": `${site.url}${getLocalizedHref("es", routeId)}`,
  };
}

export function buildServiceLanguageAlternates(
  service: Service,
): Record<string, string> {
  const languages = Object.fromEntries(
    locales.map((locale) => [
      locale,
      `${site.url}${getEquivalentServiceHref(service, locale)}`,
    ]),
  ) as Record<Locale, string>;

  return {
    ...languages,
    "x-default": `${site.url}${getEquivalentServiceHref(service, "es")}`,
  };
}
