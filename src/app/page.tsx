import type { Metadata } from "next";
import { RootRedirect } from "@/components/pages/RootRedirect";
import { SITE_ORIGIN } from "@/data/site";

/**
 * `/` is a soft entry point. Production also has Cloudflare `_redirects`:
 * `/ → /es` (302). We noindex `/` so it does not compete with `/es`.
 */
export const metadata: Metadata = {
  title: "Infinity Bliss",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_ORIGIN}/es`,
  },
};

export default function RootPage() {
  return <RootRedirect />;
}
