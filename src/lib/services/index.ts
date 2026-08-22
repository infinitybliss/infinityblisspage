import { servicesCatalog } from "@/data/services/catalog";
import type { Locale } from "@/types/locale";
import type {
  LocalizedService,
  Service,
  ServiceCategory,
  ServiceId,
} from "@/types/service";

export { servicesCatalog };

export function localizeService(service: Service, locale: Locale): LocalizedService {
  return {
    id: service.id,
    slug: service.slug[locale],
    category: service.category,
    name: service.name[locale],
    tagline: service.tagline?.[locale],
    shortDescription: service.shortDescription[locale],
    description: service.description[locale],
    benefits: service.benefits?.map((item) => item[locale]) ?? [],
    durations: service.durations,
    featured: service.featured,
    pilgrimFeatured: service.pilgrimFeatured,
    audience: service.audience,
    image: service.image,
    badge: service.badge?.[locale],
    note: service.note?.[locale],
    bookingId: service.bookingId,
  };
}

export function getServiceById(id: ServiceId): Service | undefined {
  return servicesCatalog.find((service) => service.id === id);
}

export function getServiceBySlug(
  locale: Locale,
  slug: string,
): Service | undefined {
  return servicesCatalog.find((service) => service.slug[locale] === slug);
}

export function getFeaturedServices(): Service[] {
  return servicesCatalog.filter((service) => service.featured);
}

export function getPilgrimFeaturedServices(): Service[] {
  return servicesCatalog.filter((service) => service.pilgrimFeatured);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return servicesCatalog.filter((service) => service.category === category);
}

export function getAllServiceSlugs(locale: Locale): string[] {
  return servicesCatalog.map((service) => service.slug[locale]);
}

export function getServicesBasePath(locale: Locale): string {
  return locale === "es" ? "/servicios" : "/servizos";
}

export function getServicesHref(locale: Locale): string {
  return `/${locale}${getServicesBasePath(locale)}`;
}

export function getServiceHref(locale: Locale, service: Service): string {
  return `${getServicesHref(locale)}/${service.slug[locale]}`;
}

export function getEquivalentServiceHref(
  service: Service,
  targetLocale: Locale,
): string {
  return getServiceHref(targetLocale, service);
}

export function isServicesPath(locale: Locale, segment: string): boolean {
  return segment === getServicesBasePath(locale).slice(1);
}
