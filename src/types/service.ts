import type { Locale } from "@/types/locale";

export type LocalizedString = Record<Locale, string>;

export const serviceCategories = [
  "massages",
  "rituals",
  "spa",
  "specials",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export type ServiceDuration = {
  minutes: number;
  price: number;
  /** SimplyBook.me service ID for this duration variant. */
  bookingId?: number;
};

export const serviceIds = [
  "pilgrim-massage",
  "lymphatic-drainage",
  "relaxing-massage",
  "craniofacial-massage",
  "express-massage",
  "ritual-alma",
  "ritual-light-feet",
  "ritual-serenity-spa",
  "hospitality-reset",
  "hospitality-reset-premium",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export type Service = {
  id: ServiceId;
  slug: LocalizedString;
  category: ServiceCategory;
  name: LocalizedString;
  tagline?: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  benefits?: LocalizedString[];
  durations: ServiceDuration[];
  featured?: boolean;
  pilgrimFeatured?: boolean;
  audience?: string[];
  image?: string;
  badge?: LocalizedString;
  note?: LocalizedString;
};

export type LocalizedService = {
  id: ServiceId;
  slug: string;
  category: ServiceCategory;
  name: string;
  tagline?: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  durations: ServiceDuration[];
  featured?: boolean;
  pilgrimFeatured?: boolean;
  audience?: string[];
  image?: string;
  badge?: string;
  note?: string;
};
