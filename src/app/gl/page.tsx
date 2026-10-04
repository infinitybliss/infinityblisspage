import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";

const dictionary = getDictionary("gl");
const routeMeta = getRouteAlternates("gl", "home");

export const metadata: Metadata = {
  title: {
    absolute: dictionary.meta.title,
  },
  description: dictionary.meta.description,
  ...routeMeta,
  openGraph: {
    ...routeMeta.openGraph,
    title: dictionary.meta.title,
    description: dictionary.meta.description,
  },
  twitter: {
    ...routeMeta.twitter,
    title: dictionary.meta.title,
    description: dictionary.meta.description,
  },
};

export default function Page() {
  return <HomePage locale="gl" />;
}
