import { Suspense } from "react";
import { BookingPageClient } from "@/components/booking/BookingPageClient";
import { BookingPageFallback } from "@/components/booking/BookingPageFallback";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

const dictionary = getDictionary("es");

export const metadata: Metadata = {
  title: {
    absolute: dictionary.booking.metaTitle,
  },
  description: dictionary.booking.metaDescription,
  ...getRouteAlternates("es", "booking"),
};

export default function Page() {
  return (
    <Suspense fallback={<BookingPageFallback dictionary={dictionary} />}>
      <BookingPageClient locale="es" dictionary={dictionary} />
    </Suspense>
  );
}
