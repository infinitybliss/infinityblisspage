import type { Locale } from "@/types/locale";

export type LocalizedString = Record<Locale, string>;

export const serviceCategories = [
  "massages",
  "rituals",
  "spa",
  "nails",
  "wellbeing",
  "specials",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export type ServiceDuration = {
  minutes: number;
  price: number;
  /**
   * SimplyBook.me service ID for this duration variant.
   * Only set when confirmed on the active Infinity Bliss SimplyBook account.
   * Never reuse IDs from the former Ritual Essences account.
   */
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
  "manicura-y-unas",
  "pedicura-pedi-spa",
  "presoterapia",
] as const;

export type ServiceId = (typeof serviceIds)[number];

/** Rich benefit / option shown on the treatment detail page. */
export type ServiceBenefit = {
  title: LocalizedString;
  description: LocalizedString;
};

export type Service = {
  id: ServiceId;
  slug: LocalizedString;
  category: ServiceCategory;
  name: LocalizedString;
  /** Short card/catalog summary. */
  shortDescription: LocalizedString;
  /** Lead introduction on the detail page. */
  intro?: LocalizedString;
  /** Editorial subtitle on the detail page. */
  tagline?: LocalizedString;
  /**
   * Fallback / primary detail paragraph.
   * Prefer `paragraphs` for multi-paragraph detail copy.
   */
  description: LocalizedString;
  /** Additional detail paragraphs after intro + tagline. */
  paragraphs?: LocalizedString[];
  benefits?: ServiceBenefit[];
  /** Optional heading for the benefits/options list (defaults to dictionary). */
  benefitsHeading?: LocalizedString;
  /** Optional closing line(s) after benefits. */
  closing?: LocalizedString;
  /**
   * Bookable duration/price variants with SimplyBook IDs.
   * Leave empty while online booking is pending configuration.
   */
  durations: ServiceDuration[];
  /**
   * Displayed on cards and detail when there is no fixed duration/price yet
   * (or when price varies by treatment options).
   */
  pricingLabel?: LocalizedString;
  featured?: boolean;
  pilgrimFeatured?: boolean;
  audience?: string[];
  image?: string;
  badge?: LocalizedString;
  note?: LocalizedString;
};

export type LocalizedBenefit = {
  title: string;
  description: string;
};

export type LocalizedService = {
  id: ServiceId;
  slug: string;
  category: ServiceCategory;
  name: string;
  shortDescription: string;
  intro?: string;
  tagline?: string;
  description: string;
  paragraphs: string[];
  benefits: LocalizedBenefit[];
  benefitsHeading?: string;
  closing?: string;
  durations: ServiceDuration[];
  pricingLabel?: string;
  featured?: boolean;
  pilgrimFeatured?: boolean;
  audience?: string[];
  image?: string;
  badge?: string;
  note?: string;
};
