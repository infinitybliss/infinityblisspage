import type { Metadata } from "next";
import { site } from "@/data/site";
import {
  getEquivalentServiceHref,
  getServiceBySlug,
  getServicesHref,
  isServicesPath,
  localizeService,
} from "@/lib/services";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import type { Locale } from "@/types/locale";
import type { Service } from "@/types/service";

export function getServicesPageMetadata(locale: Locale): Metadata {
  const titles: Record<Locale, string> = {
    es: "Servicios de bienestar en Santiago de Compostela",
    gl: "Servizos de benestar en Santiago de Compostela",
  };
  const descriptions: Record<Locale, string> = {
    es: "Masajes, rituales y tratamientos de bienestar en Santiago de Compostela. Descubre duraciones, precios y reserva tu cita.",
    gl: "Masaxes, rituais e tratamentos de benestar en Santiago de Compostela. Descubre duracións, prezos e reserva a túa cita.",
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    ...getRouteAlternates(locale, "services"),
    openGraph: {
      url: `${site.url}${getServicesHref(locale)}`,
    },
  };
}

export function getServiceDetailMetadata(
  locale: Locale,
  service: Service,
): Metadata {
  const localized = localizeService(service, locale);
  const title = `${localized.name} en Santiago de Compostela`;
  const description = localized.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}${getEquivalentServiceHref(service, locale)}`,
      languages: {
        es: `${site.url}${getEquivalentServiceHref(service, "es")}`,
        gl: `${site.url}${getEquivalentServiceHref(service, "gl")}`,
        "x-default": `${site.url}${getEquivalentServiceHref(service, "es")}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${site.url}${getEquivalentServiceHref(service, locale)}`,
    },
  };
}

export function resolveEquivalentServicePath(
  pathname: string,
  sourceLocale: Locale,
  targetLocale: Locale,
): string | null {
  const rest = pathname.replace(/^\/(es|gl)/, "");
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
