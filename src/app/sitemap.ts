import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { locales } from "@/lib/i18n/config";
import { getLocalizedHref, type RouteId } from "@/lib/i18n/paths";

const indexedRoutes: RouteId[] = ["home", "legalNotice", "privacy", "cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    indexedRoutes.map((routeId) => ({
      url: `${site.url}${getLocalizedHref(locale, routeId)}`,
      alternates: {
        languages: {
          es: `${site.url}${getLocalizedHref("es", routeId)}`,
          gl: `${site.url}${getLocalizedHref("gl", routeId)}`,
        },
      },
    })),
  );
}
