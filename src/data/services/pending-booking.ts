/**
 * SimplyBook.me booking IDs for the Infinity Bliss account
 * (`https://infinitybliss.simplybook.it`).
 *
 * After migrating from the former Ritual Essences account, previous service IDs
 * were cleared and must be remapped from the new dashboard.
 *
 * When Mar confirms each ID:
 * 1. Add `bookingId` on the matching duration in `src/data/services/catalog.ts`
 * 2. Update the entry below (optional bookkeeping)
 *
 * Do NOT reuse booking IDs from the former `ritualessences` SimplyBook account.
 *
 * Pending remapping (all services):
 * - pilgrim-massage (60 / 90)
 * - lymphatic-drainage
 * - relaxing-massage (60 / 90)
 * - craniofacial-massage
 * - express-massage
 * - ritual-alma
 * - ritual-light-feet
 * - ritual-serenity-spa (45 / 60)
 * - hospitality-reset
 * - hospitality-reset-premium
 * - manicura-y-unas
 * - pedicura-pedi-spa
 * - presoterapia
 */
export const pendingSimplyBookBookingIds = {
  "pilgrim-massage": null,
  "lymphatic-drainage": null,
  "relaxing-massage": null,
  "craniofacial-massage": null,
  "express-massage": null,
  "ritual-alma": null,
  "ritual-light-feet": null,
  "ritual-serenity-spa": null,
  "hospitality-reset": null,
  "hospitality-reset-premium": null,
  "manicura-y-unas": null,
  "pedicura-pedi-spa": null,
  "presoterapia": null,
} as const;

export type PendingBookingServiceId = keyof typeof pendingSimplyBookBookingIds;
