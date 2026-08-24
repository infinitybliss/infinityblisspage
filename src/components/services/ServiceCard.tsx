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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_8px_24px_-12px_var(--placeholder-copper)]">
      <div className={`h-0.5 w-full ${accentBarClass}`} aria-hidden="true" />
      {!compact &&
        (service.image ? (
          <div className="relative h-44 w-full overflow-hidden bg-sage-soft">
            <Image
              src={service.image}
              alt={localized.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <ImagePlaceholder
            label={dictionary.hero.imageLabel}
            alt={`${localized.name}. ${dictionary.hero.imageAlt}`}
            className="h-44 min-h-44 rounded-none"
          />
        ))}
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary">
          {categoryLabel}
        </p>
        {localized.badge && <ServiceBadge label={localized.badge} />}
        <h3 className="font-serif text-2xl font-medium leading-snug text-foreground">
          <Link href={href} className="hover:text-primary">
            {localized.name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          {localized.shortDescription}
        </p>
        {meta && (
          <p className="text-sm font-medium text-foreground">{meta}</p>
        )}
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300 group-hover:translate-x-0.5"
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
