import type { Metadata } from "next";
import { SITE_ORIGIN, site } from "@/data/site";
import { buildServiceLanguageAlternates } from "@/lib/i18n/alternates";
import { locales } from "@/lib/i18n/config";
import {
  getEquivalentServiceHref,
  getServiceBySlug,
  getServicesHref,
  isServicesPath,
  localizeService,
} from "@/lib/services";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import { seoAssets } from "@/lib/seo";
import type { Locale } from "@/types/locale";
import type { Service } from "@/types/service";

const localePathPattern = `^/(${locales.join("|")})`;

export function getServicesPageMetadata(locale: Locale): Metadata {
  const titles: Record<Locale, string> = {
    es: "Servicios de bienestar en Santiago de Compostela",
    gl: "Servizos de benestar en Santiago de Compostela",
    en: "Wellness treatments in Santiago de Compostela",
  };
  const descriptions: Record<Locale, string> = {
    es: "Masajes, rituales, manicura, pedicura y presoterapia en Infinity Bliss, Santiago de Compostela. Consulta duraciones, precios y reserva tu cita.",
    gl: "Masaxes, rituais, manicura, pedicura e presoterapia en Infinity Bliss, Santiago de Compostela. Consulta duracións, prezos e reserva a túa cita.",
    en: "Massage, rituals, manicure, pedicure and pressotherapy at Infinity Bliss in Santiago de Compostela. Check durations, prices and book your appointment.",
  };

  const routeMeta = getRouteAlternates(locale, "services");

  return {
    title: titles[locale],
    description: descriptions[locale],
    ...routeMeta,
    openGraph: {
      ...routeMeta.openGraph,
      title: `${titles[locale]} | ${site.name}`,
      description: descriptions[locale],
      url: `${site.url}${getServicesHref(locale)}`,
    },
  };
}

export function getServiceDetailMetadata(
  locale: Locale,
  service: Service,
): Metadata {
  const localized = localizeService(service, locale);
  const title =
    locale === "en"
      ? `${localized.name} in Santiago de Compostela`
      : `${localized.name} en Santiago de Compostela`;

  const descriptionByLocale: Record<Locale, string> = {
    es: `${localized.shortDescription} Disponible en Infinity Bliss, Santiago de Compostela.`,
    gl: `${localized.shortDescription} Dispoñible en Infinity Bliss, Santiago de Compostela.`,
    en: `${localized.shortDescription} Available at Infinity Bliss in Santiago de Compostela.`,
  };
  const description = descriptionByLocale[locale];

  const canonical = `${site.url}${getEquivalentServiceHref(service, locale)}`;
  const imageSrc = service.image
    ? `${SITE_ORIGIN}${service.image}`
    : seoAssets.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: buildServiceLanguageAlternates(service),
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
      locale:
        locale === "es" ? "es_ES" : locale === "gl" ? "gl_ES" : "en_GB",
      images: [
        {
          url: imageSrc,
          alt: localized.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [imageSrc],
    },
  };
}

export function resolveEquivalentServicePath(
  pathname: string,
  sourceLocale: Locale,
  targetLocale: Locale,
): string | null {
  const rest = pathname.replace(new RegExp(localePathPattern), "");
  const segments = rest.split("/").filter(Boolean);

  if (segments.length === 0 || !isServicesPath(sourceLocale, segments[0])) {
    return null;
  }

  if (segments.length === 1) {
    return getServicesHref(targetLocale);
  }

  const slug = segments[1];
  const service = getServiceBySlug(sourceLocale, slug);
  if (!service) {
    return getServicesHref(targetLocale);
  }

  return getEquivalentServiceHref(service, targetLocale);
}
