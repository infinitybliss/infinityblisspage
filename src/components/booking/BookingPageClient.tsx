"use client";

import { useSearchParams } from "next/navigation";
import { BookingPageContent } from "@/components/booking/BookingPageContent";
import { getServiceBookingVariant } from "@/lib/services/booking";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type BookingPageClientProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function BookingPageClient({
  locale,
  dictionary,
}: BookingPageClientProps) {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service");
  const durationRaw = searchParams.get("duration");
  const durationMinutes = durationRaw ? Number.parseInt(durationRaw, 10) : NaN;

  const selection =
    serviceId && Number.isFinite(durationMinutes)
      ? getServiceBookingVariant(serviceId, durationMinutes)
      : null;

  return (
    <BookingPageContent
      locale={locale}
      dictionary={dictionary}
      selection={selection}
    />
  );
}
