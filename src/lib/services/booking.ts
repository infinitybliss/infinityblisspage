import { servicesCatalog } from "@/data/services/catalog";
import {
  serviceIds,
  type Service,
  type ServiceDuration,
  type ServiceId,
} from "@/types/service";

export type ServiceBookingVariant = {
  service: Service;
  variant: ServiceDuration;
  bookingId?: number;
};

export function isServiceId(value: string): value is ServiceId {
  return (serviceIds as readonly string[]).includes(value);
}

/**
 * Resolves a catalog service + duration variant for booking deep-links.
 * Returns null when the service or duration does not exist.
 */
export function getServiceBookingVariant(
  serviceId: string,
  durationMinutes: number,
): ServiceBookingVariant | null {
  if (!isServiceId(serviceId) || !Number.isFinite(durationMinutes)) {
    return null;
  }

  const service = servicesCatalog.find((item) => item.id === serviceId);
  if (!service) {
    return null;
  }

  const variant = service.durations.find(
    (duration) => duration.minutes === durationMinutes,
  );

  if (!variant || typeof variant.bookingId !== "number" || variant.bookingId <= 0) {
    return null;
  }

  return {
    service,
    variant,
    bookingId: variant.bookingId,
  };
}
