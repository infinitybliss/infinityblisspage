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

const commercialRoutes: Array<{
  routeId: RouteId;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { routeId: "home", priority: 1, changeFrequency: "weekly" },
  { routeId: "services", priority: 0.9, changeFrequency: "weekly" },
  { routeId: "booking", priority: 0.8, changeFrequency: "weekly" },
];

const legalRoutes: Array<{
  routeId: RouteId;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { routeId: "legalNotice", priority: 0.3, changeFrequency: "yearly" },
  { routeId: "privacy", priority: 0.3, changeFrequency: "yearly" },
  { routeId: "cookies", priority: 0.3, changeFrequency: "yearly" },
  { routeId: "bookingTerms", priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [...commercialRoutes, ...legalRoutes].flatMap(
    ({ routeId, priority, changeFrequency }) =>
      locales.map((locale) => ({
        url: `${site.url}${getLocalizedHref(locale, routeId)}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: buildRouteLanguageAlternates(routeId),
        },
      })),
  );

  const serviceRoutes = servicesCatalog.flatMap((service) =>
    locales.map((locale) => ({
      url: `${site.url}${getEquivalentServiceHref(service, locale)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: buildServiceLanguageAlternates(service),
      },
    })),
  );

  return [...staticRoutes, ...serviceRoutes];
}
