import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PendingValue } from "@/components/ui/PendingValue";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";
import { getTelHref, getWhatsAppHref } from "@/lib/format";
import { getSectionId } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type ContactProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function ContactItem({
  label,
  value,
  href,
  pendingLabel,
}: {
  label: string;
  value: string | null;
  href: string | null;
  pendingLabel: string;
}) {
  return (
    <div>
      <dt className="text-[0.9375rem] font-medium text-foreground">{label}</dt>
      <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
        {href && value ? (
          <a
            href={href}
            className="transition-colors duration-200 hover:text-primary"
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {value}
          </a>
        ) : (
          <PendingValue value={value} pendingLabel={pendingLabel} />
        )}
      </dd>
    </div>
  );
}

export function Contact({ locale, dictionary }: ContactProps) {
  const titleId = "contact-title";
  const phoneHref = getTelHref(site.contact.phone);
  const whatsappHref = getWhatsAppHref(site.contact.whatsapp);
  const addressHref = site.mapsDirectionsUrl;

  return (
    <Section
      id={getSectionId(locale, "contact")}
      ariaLabelledBy={titleId}
      className="bg-surface"
    >
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{dictionary.contact.eyebrow}</Eyebrow>
          <h2
            id={titleId}
            className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            {dictionary.contact.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {dictionary.contact.text}
          </p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6">
            <ContactItem
              label={dictionary.contact.address}
              value={site.contact.address}
              href={addressHref}
              pendingLabel={dictionary.contact.pending}
            />
            <ContactItem
              label={dictionary.contact.phone}
              value={site.contact.phone}
              href={phoneHref}
              pendingLabel={dictionary.contact.pending}
            />
            <ContactItem
              label={dictionary.contact.whatsapp}
              value={site.contact.whatsapp}
              href={whatsappHref}
              pendingLabel={dictionary.contact.pending}
            />
            <ContactItem
              label={dictionary.contact.email}
              value={site.contact.email}
              href={
                site.contact.email ? `mailto:${site.contact.email}` : null
              }
              pendingLabel={dictionary.contact.pending}
            />
            <ContactItem
              label={dictionary.contact.hours}
              value={site.contact.hours}
              href={null}
              pendingLabel={dictionary.contact.pending}
            />
          </dl>
        </div>
        <div
          className="relative min-h-64 overflow-hidden rounded-2xl border border-border bg-sage-soft sm:min-h-80 lg:min-h-[22rem]"
          aria-label={dictionary.contact.mapLabel}
        >
          {site.mapsEmbedUrl ? (
            <iframe
              title={dictionary.contact.mapLabel}
              src={site.mapsEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full min-h-64 items-end p-5">
              <p className="rounded-full bg-surface/90 px-3 py-1 text-xs text-muted">
                {dictionary.contact.mapPlaceholder}
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
