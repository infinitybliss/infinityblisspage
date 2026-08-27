import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { locales } from "@/lib/i18n/config";
import { getLocalizedHref, type RouteId } from "@/lib/i18n/paths";
import { getEquivalentServiceHref, servicesCatalog } from "@/lib/services";

const indexedRoutes: RouteId[] = [
  "home",
  "services",
  "booking",
  "legalNotice",
  "privacy",
  "cookies",
  "bookingTerms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = locales.flatMap((locale) =>
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

  const serviceRoutes = servicesCatalog.flatMap((service) =>
    locales.map((locale) => ({
      url: `${site.url}${getEquivalentServiceHref(service, locale)}`,
      alternates: {
        languages: {
          es: `${site.url}${getEquivalentServiceHref(service, "es")}`,
          gl: `${site.url}${getEquivalentServiceHref(service, "gl")}`,
        },
      },
    })),
  );

  return [...staticRoutes, ...serviceRoutes];
}
