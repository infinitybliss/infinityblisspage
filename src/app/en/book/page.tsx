import { Suspense } from "react";
import { BookingPageClient } from "@/components/booking/BookingPageClient";
import { BookingPageFallback } from "@/components/booking/BookingPageFallback";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  title: {
    absolute: dictionary.booking.metaTitle,
  },
  description: dictionary.booking.metaDescription,
  ...getRouteAlternates("en", "booking"),
};

export default function Page() {
  return (
    <Suspense fallback={<BookingPageFallback dictionary={dictionary} />}>
      <BookingPageClient locale="en" dictionary={dictionary} />
    </Suspense>
  );
}
