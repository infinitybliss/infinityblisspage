import type { Metadata } from "next";
import { site } from "@/data/site";
import { buildRouteLanguageAlternates } from "@/lib/i18n/alternates";
import { getLocalizedHref, type RouteId } from "@/lib/i18n/paths";
import { seoAssets } from "@/lib/seo";
import type { Locale } from "@/types/locale";
import { localeOpenGraph } from "@/types/locale";

export function getRouteAlternates(locale: Locale, routeId: RouteId): Metadata {
  const canonical = `${site.url}${getLocalizedHref(locale, routeId)}`;

  return {
    alternates: {
      canonical,
      languages: buildRouteLanguageAlternates(routeId),
    },
    openGraph: {
      url: canonical,
      locale: localeOpenGraph[locale],
      siteName: site.name,
      type: "website",
      images: [
        {
          url: seoAssets.ogImage,
          width: 1024,
          height: 691,
          alt: seoAssets.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [seoAssets.ogImage],
    },
  };
}
