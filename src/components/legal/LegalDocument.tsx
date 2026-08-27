import { Container } from "@/components/ui/Container";
import type { LegalBlock, LegalDocumentContent } from "@/types/legal";

type LegalDocumentProps = {
  document: LegalDocumentContent;
};

function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "p":
            return (
              <p key={key} className="text-base leading-relaxed text-muted">
                {block.text}
              </p>
            );
          case "h3":
            return (
              <h3
                key={key}
                className="pt-2 font-serif text-xl text-foreground"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul
                key={key}
                className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted"
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "fields":
            return (
              <dl key={key} className="space-y-3">
                {block.items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm font-medium text-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 text-base text-muted">{item.value}</dd>
                  </div>
                ))}
              </dl>
            );
          case "note":
            return (
              <p
                key={key}
                className="rounded-lg border border-dashed border-primary/30 bg-sand-soft/50 px-4 py-3 text-sm leading-relaxed text-muted"
              >
                {block.text}
              </p>
            );
          case "table":
            return (
              <div key={key} className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left text-sm">
                  <caption className="sr-only">{block.caption}</caption>
                  <thead>
                    <tr className="border-b border-border-subtle">
                      {block.headers.map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="whitespace-nowrap px-3 py-3 font-medium text-foreground first:pl-0 last:pr-0"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr
                        key={row[0]}
                        className="border-b border-border-subtle align-top last:border-b-0"
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={`${row[0]}-${cellIndex}`}
                            className={`px-3 py-3 text-muted first:pl-0 last:pr-0 ${
                              cellIndex === 0
                                ? "whitespace-nowrap font-medium text-foreground"
                                : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "externalLink":
            return (
              <p key={key}>
                <a
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary underline-offset-4 transition-colors duration-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {block.label}
                </a>
              </p>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export function LegalDocument({ document }: LegalDocumentProps) {
  return (
    <Container className="max-w-3xl py-14 sm:py-16 lg:py-20">
      <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
        {document.title}
      </h1>

      <div className="mt-12 space-y-12">
        {document.sections.map((section, index) => {
          const headingId = `legal-section-${index + 1}`;

          return (
            <section key={headingId} aria-labelledby={headingId}>
              <h2
                id={headingId}
                className="font-serif text-2xl text-foreground sm:text-3xl"
              >
                {section.title}
              </h2>
              <div className="mt-5">
                <LegalBlocks blocks={section.blocks} />
              </div>
            </section>
          );
        })}
      </div>
    </Container>
  );
}
