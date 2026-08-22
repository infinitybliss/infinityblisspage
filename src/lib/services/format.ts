import { formatDuration, formatPrice } from "@/lib/format";
import type { ServiceDuration } from "@/types/service";

type DurationPriceLabels = {
  from: string;
};

function withPriceNote(price: string, hasNote: boolean): string {
  return hasNote ? `${price}*` : price;
}

export function formatServiceDurationSummary(
  durations: ServiceDuration[],
  locale: string,
): string {
  if (durations.length === 0) {
    return "";
  }

  if (durations.length === 1) {
    return formatDuration(durations[0].minutes, locale);
  }

  return `${durations.map((item) => item.minutes).join(" / ")} min`;
}

export function formatServicePriceSummary(
  durations: ServiceDuration[],
  locale: string,
  labels: DurationPriceLabels,
  hasNote = false,
): string {
  if (durations.length === 0) {
    return "";
  }

  if (durations.length === 1) {
    return withPriceNote(formatPrice(durations[0].price, locale), hasNote);
  }

  const minPrice = Math.min(...durations.map((item) => item.price));
  return withPriceNote(`${labels.from} ${formatPrice(minPrice, locale)}`, hasNote);
}

export function formatServiceMeta(
  durations: ServiceDuration[],
  locale: string,
  labels: DurationPriceLabels,
  hasNote = false,
): string {
  const durationText = formatServiceDurationSummary(durations, locale);
  const priceText = formatServicePriceSummary(durations, locale, labels, hasNote);

  return [durationText, priceText].filter(Boolean).join(" · ");
}

export function formatDurationOption(
  duration: ServiceDuration,
  locale: string,
  hasNote = false,
): string {
  return `${formatDuration(duration.minutes, locale)} · ${withPriceNote(formatPrice(duration.price, locale), hasNote)}`;
}
