import { site } from "@/data/site";

/** SimplyBook.me booking base (v2 widget / deep links). */
export const SIMPLYBOOK_BASE_URL = `${site.bookingUrl.replace(/\/$/, "")}/v2/`;

/**
 * Deep-link URL for a SimplyBook.me service variant.
 * Without bookingId, returns the general booking entry point.
 */
export function getSimplyBookServiceUrl(bookingId?: number): string {
  if (!bookingId) {
    return SIMPLYBOOK_BASE_URL;
  }

  return `${SIMPLYBOOK_BASE_URL}#book/service/${bookingId}/count/1/`;
}
