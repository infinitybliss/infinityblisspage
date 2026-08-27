import { bookingTermsContent } from "@/data/legal/booking-terms";
import { cookiesContent } from "@/data/legal/cookies";
import { legalNoticeContent } from "@/data/legal/notice";
import { privacyContent } from "@/data/legal/privacy";
import type { LegalDocumentContent } from "@/types/legal";
import type { Locale } from "@/types/locale";

export type LegalDocumentId =
  | "notice"
  | "privacy"
  | "cookies"
  | "bookingTerms";

const documents: Record<
  LegalDocumentId,
  Record<Locale, LegalDocumentContent>
> = {
  notice: legalNoticeContent,
  privacy: privacyContent,
  cookies: cookiesContent,
  bookingTerms: bookingTermsContent,
};

export function getLegalDocument(
  id: LegalDocumentId,
  locale: Locale,
): LegalDocumentContent {
  return documents[id][locale];
}
