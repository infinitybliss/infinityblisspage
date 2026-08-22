import type { ContactField } from "@/data/site";

export function getTelHref(phone: ContactField): string | null {
  if (!phone) {
    return null;
  }

  return `tel:${phone.replace(/[\s()-]/g, "")}`;
}

export function getWhatsAppHref(whatsapp: ContactField): string | null {
  if (!whatsapp) {
    return null;
  }

  const digits = whatsapp.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : null;
}

export function formatDuration(minutes: number, locale: string): string {
  return new Intl.NumberFormat(locale, { style: "unit", unit: "minute" }).format(
    minutes,
  );
}

export function formatPrice(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}
