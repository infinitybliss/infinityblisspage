import { HomePage } from "@/components/pages/HomePage";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getRouteAlternates("en", "home");

export default function Page() {
  return <HomePage locale="en" />;
}
