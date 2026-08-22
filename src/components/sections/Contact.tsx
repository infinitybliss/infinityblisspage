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
      <dt className="text-sm font-medium text-charcoal">{label}</dt>
      <dd className="mt-1 text-sm text-muted">
        {href && value ? (
          <a href={href} className="hover:text-copper">
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

  return (
    <Section id={getSectionId(locale, "contact")} ariaLabelledBy={titleId}>
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{dictionary.contact.eyebrow}</Eyebrow>
          <h2
            id={titleId}
            className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl"
          >
            {dictionary.contact.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {dictionary.contact.text}
          </p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            <ContactItem
              label={dictionary.contact.address}
              value={site.contact.address}
              href={null}
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
              label={dictionary.contact.hours}
              value={site.contact.hours}
              href={null}
              pendingLabel={dictionary.contact.pending}
            />
          </dl>
        </div>
        <div
          className="flex min-h-64 items-end rounded-2xl bg-sage-soft p-5"
          aria-label={dictionary.contact.mapLabel}
        >
          {site.mapsEmbedUrl ? (
            <iframe
              title={dictionary.contact.mapLabel}
              src={site.mapsEmbedUrl}
              className="h-full min-h-64 w-full rounded-xl border-0"
              loading="lazy"
            />
          ) : (
            <p className="rounded-full bg-ivory/80 px-3 py-1 text-xs text-muted">
              {dictionary.contact.mapPlaceholder}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
