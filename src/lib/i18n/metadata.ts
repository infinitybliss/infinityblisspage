import type { Metadata } from "next";
import { site } from "@/data/site";
import { getLocalizedHref, type RouteId } from "@/lib/i18n/paths";
import type { Locale } from "@/types/locale";
import { localeOpenGraph } from "@/types/locale";

export function getRouteAlternates(locale: Locale, routeId: RouteId): Metadata {
  const canonical = `${site.url}${getLocalizedHref(locale, routeId)}`;

  return {
    alternates: {
      canonical,
      languages: {
        es: `${site.url}${getLocalizedHref("es", routeId)}`,
        gl: `${site.url}${getLocalizedHref("gl", routeId)}`,
        "x-default": `${site.url}${getLocalizedHref("es", routeId)}`,
      },
    },
    openGraph: {
      url: canonical,
      locale: localeOpenGraph[locale],
    },
  };
}
