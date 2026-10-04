import { brandAssets } from "@/data/brand";
import { siteImages } from "@/data/media";
import { SITE_ORIGIN, site } from "@/data/site";

/** Absolute asset URLs always use the production origin for SEO consistency. */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export const seoAssets = {
  logo: absoluteUrl(brandAssets.logo),
  ogImage: absoluteUrl(siteImages.hero.src),
  ogImageAlt: siteImages.hero.alt.es,
} as const;

export function getLocalBusinessJsonLd() {
  const telephone = site.contact.phone;
  const email = site.contact.email;
  const address = site.contact.address;

  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${SITE_ORIGIN}/#business`,
    name: site.name,
    alternateName: "Infinity Bliss — Nails & Massage",
    description:
      "Centro de bienestar en Santiago de Compostela especializado en masajes, rituales, manicura, pedicura y presoterapia.",
    url: SITE_ORIGIN,
    logo: seoAssets.logo,
    image: [seoAssets.ogImage, seoAssets.logo],
    ...(telephone ? { telephone } : {}),
    ...(email ? { email } : {}),
    ...(address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Gómez Ulla 4, Bajo",
            postalCode: "15702",
            addressLocality: "Santiago de Compostela",
            addressRegion: "A Coruña",
            addressCountry: "ES",
          },
        }
      : {}),
    areaServed: {
      "@type": "City",
      name: "Santiago de Compostela",
    },
    priceRange: "€€",
  };
}
