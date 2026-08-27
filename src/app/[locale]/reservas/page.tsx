import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingPageContent } from "@/components/booking/BookingPageContent";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import { getServiceBookingVariant } from "@/lib/services/booking";

type BookingPageProps = PageProps<"/[locale]/reservas"> & {
  searchParams: Promise<{
    service?: string | string[];
    duration?: string | string[];
  }>;
};

function firstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/reservas">): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale) {
    return {};
  }

  const dictionary = getDictionary(validLocale);

  return {
    title: {
      absolute: dictionary.booking.metaTitle,
    },
    description: dictionary.booking.metaDescription,
    ...getRouteAlternates(validLocale, "booking"),
  };
}

export default async function BookingPage({
  params,
  searchParams,
}: BookingPageProps) {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);

  if (!validLocale) {
    notFound();
  }

  const query = await searchParams;
  const serviceId = firstParam(query.service);
  const durationRaw = firstParam(query.duration);
  const durationMinutes = durationRaw ? Number.parseInt(durationRaw, 10) : NaN;

  const selection =
    serviceId && Number.isFinite(durationMinutes)
      ? getServiceBookingVariant(serviceId, durationMinutes)
      : null;

  const dictionary = getDictionary(validLocale);

  return (
    <BookingPageContent
      locale={validLocale}
      dictionary={dictionary}
      selection={selection}
    />
  );
}
