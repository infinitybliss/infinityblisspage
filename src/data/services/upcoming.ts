/**
 * Informational-only upcoming offerings.
 * When a service launches: remove it from here, add it to the active catalog
 * with durations/prices/bookingId (when confirmed), and create its detail route.
 *
 * Currently empty — Presoterapia and Manicura/Uñas are live in the catalog.
 */
export type UpcomingService = {
  id: string;
  name: import("@/types/service").LocalizedString;
  description: import("@/types/service").LocalizedString;
  /** Public image path under /public. */
  image: string;
  imageAlt: import("@/types/service").LocalizedString;
};

export const upcomingServices: UpcomingService[] = [];
