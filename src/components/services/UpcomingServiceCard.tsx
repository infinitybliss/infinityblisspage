import Image from "next/image";
import type { UpcomingService } from "@/data/services/upcoming";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type UpcomingServiceCardProps = {
  service: UpcomingService;
  locale: Locale;
  dictionary: Dictionary;
  accent?: "primary" | "secondary";
};

export function UpcomingServiceCard({
  service,
  locale,
  dictionary,
  accent = "primary",
}: UpcomingServiceCardProps) {
  const accentBarClass =
    accent === "primary" ? "bg-primary/70" : "bg-secondary/70";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface">
      <div className={`h-0.5 w-full ${accentBarClass}`} aria-hidden="true" />
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sage-soft">
        <Image
          src={service.image}
          alt={service.imageAlt[locale]}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-[0.88] saturate-[0.88]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-background/20"
          aria-hidden="true"
        />
        <span className="absolute left-4 top-4 inline-block rounded-full border border-primary/25 bg-sand-soft/95 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-primary backdrop-blur-[2px]">
          {dictionary.upcoming.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3.5 p-5 sm:p-6">
        <h3 className="font-serif text-[1.625rem] font-medium leading-snug text-foreground sm:text-[1.75rem]">
          {service.name[locale]}
        </h3>
        <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {service.description[locale]}
        </p>
        <p className="mt-auto text-[0.9375rem] font-medium text-primary/90 sm:text-base">
          {dictionary.upcoming.availableSoon}
        </p>
      </div>
    </article>
  );
}
