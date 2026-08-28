import Image from "next/image";
import Link from "next/link";
import { categoryLabels } from "@/data/categories";
import { ServiceBadge } from "@/components/services/ServiceBadge";
import { ServicePriceNote } from "@/components/services/ServicePriceNote";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { formatServiceMeta } from "@/lib/services/format";
import {
  getServiceHref,
  localizeService,
} from "@/lib/services";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";
import type { Service } from "@/types/service";

type ServiceCardProps = {
  service: Service;
  locale: Locale;
  dictionary: Dictionary;
  accent?: "primary" | "secondary";
  compact?: boolean;
};

export function ServiceCard({
  service,
  locale,
  dictionary,
  accent = "primary",
  compact = false,
}: ServiceCardProps) {
  const localized = localizeService(service, locale);
  const href = getServiceHref(locale, service);
  const categoryLabel = categoryLabels[service.category][locale];
  const hasNote = Boolean(localized.note);
  const meta = formatServiceMeta(service.durations, locale, {
    from: dictionary.services.fromPrice,
  }, hasNote);
  const accentBarClass =
    accent === "primary" ? "bg-primary" : "bg-secondary";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-colors duration-300 hover:border-primary/30">
      <div className={`h-0.5 w-full ${accentBarClass}`} aria-hidden="true" />
      {!compact &&
        (service.image ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-sage-soft">
            <Image
              src={service.image}
              alt={localized.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <ImagePlaceholder
            label={dictionary.hero.imageLabel}
            alt={`${localized.name}. ${dictionary.hero.imageAlt}`}
            className="aspect-[16/10] min-h-0 rounded-none"
          />
        ))}
      <div className="flex flex-1 flex-col gap-3.5 p-5 sm:p-6">
        <p className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-muted">
          {categoryLabel}
        </p>
        {localized.badge && <ServiceBadge label={localized.badge} />}
        <h3 className="font-serif text-[1.625rem] font-medium leading-snug text-foreground sm:text-[1.75rem]">
          <Link
            href={href}
            className="transition-colors duration-200 hover:text-primary"
          >
            {localized.name}
          </Link>
        </h3>
        <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {localized.shortDescription}
        </p>
        {meta && (
          <p className="text-[0.9375rem] font-medium text-foreground sm:text-base">
            {meta}
          </p>
        )}
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-primary transition-colors duration-200 hover:underline"
        >
          {dictionary.services.viewTreatment}
          <span aria-hidden="true">→</span>
        </Link>
        {localized.note && (
          <ServicePriceNote note={localized.note} />
        )}
      </div>
    </article>
  );
}
