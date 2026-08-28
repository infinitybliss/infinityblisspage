import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import {
  buildRouteLanguageAlternates,
  buildServiceLanguageAlternates,
} from "@/lib/i18n/alternates";
import { locales } from "@/lib/i18n/config";
import { getLocalizedHref, type RouteId } from "@/lib/i18n/paths";
import { getEquivalentServiceHref, servicesCatalog } from "@/lib/services";

export const dynamic = "force-static";

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
        languages: buildRouteLanguageAlternates(routeId),
      },
    })),
  );

  const serviceRoutes = servicesCatalog.flatMap((service) =>
    locales.map((locale) => ({
      url: `${site.url}${getEquivalentServiceHref(service, locale)}`,
      alternates: {
        languages: buildServiceLanguageAlternates(service),
      },
    })),
  );

  return [...staticRoutes, ...serviceRoutes];
}
