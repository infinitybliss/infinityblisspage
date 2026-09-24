/**
 * SimplyBook.me booking IDs for the Infinity Bliss account
 * (`https://infinitybliss.simplybook.it`).
 *
 * Mapped:
 * - pilgrim-massage 60 → 2 / 90 → 3
 * - relaxing-massage 60 → 4 / 90 → 5
 * - craniofacial-massage → 6
 * - express-massage → 7
 * - ritual-alma → 8
 * - ritual-light-feet → 9
 * - ritual-serenity-spa 45 → 10 / 60 → 11
 * - hospitality-reset → 12
 * - hospitality-reset-premium → 13
 * - presoterapia → 14
 * - manicura-y-unas → 15
 * - pedicura-pedi-spa → 16
 * - lymphatic-drainage → 17
 *
 * All catalog services currently have a SimplyBook bookingId.
 */
export const pendingSimplyBookBookingIds = {} as const;

export type PendingBookingServiceId = keyof typeof pendingSimplyBookBookingIds;
