export type LegalField = {
  label: string;
  value: string;
};

export type LegalTable = {
  type: "table";
  caption: string;
  headers: [string, string, string, string];
  rows: Array<[string, string, string, string]>;
};

export type LegalExternalLink = {
  type: "externalLink";
  href: string;
  label: string;
};

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "fields"; items: LegalField[] }
  | { type: "note"; text: string }
  | LegalTable
  | LegalExternalLink;

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocumentContent = {
  title: string;
  description: string;
  sections: LegalSection[];
};
