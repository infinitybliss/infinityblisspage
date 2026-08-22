import { formatDuration, formatPrice } from "@/lib/format";
import type { Locale } from "@/types/locale";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type ServiceCardProps = {
  name: string;
  description: string;
  durationMinutes: number | null;
  priceEuros: number | null;
  imageSrc: string | null;
  durationLabel: string;
  imageLabel: string;
  imageAlt: string;
  locale: Locale;
};

export function ServiceCard({
  name,
  description,
  durationMinutes,
  priceEuros,
  imageSrc,
  durationLabel,
  imageLabel,
  imageAlt,
  locale,
}: ServiceCardProps) {
  const hasPrice = priceEuros != null && priceEuros > 0;
  const hasDuration = durationMinutes != null && durationMinutes > 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface">
      {imageSrc ? (
        // Next/Image can replace this when final photographs are available.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-44 w-full object-cover"
        />
      ) : (
        <ImagePlaceholder
          label={imageLabel}
          alt={imageAlt}
          className="h-44 min-h-44 rounded-none"
        />
      )}
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h3 className="font-serif text-2xl font-medium text-charcoal">{name}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        {(hasDuration || hasPrice) && (
          <dl className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-2 text-sm text-charcoal">
            {hasDuration && durationMinutes != null && (
              <div>
                <dt className="sr-only">{durationLabel}</dt>
                <dd>{formatDuration(durationMinutes, locale)}</dd>
              </div>
            )}
            {hasPrice && priceEuros != null && (
              <div>
                <dt className="sr-only">{name}</dt>
                <dd>{formatPrice(priceEuros, locale)}</dd>
              </div>
            )}
          </dl>
        )}
      </div>
    </article>
  );
}
