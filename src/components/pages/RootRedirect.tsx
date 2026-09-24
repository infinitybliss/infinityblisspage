"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { es } from "@/messages/es";

export function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/es");
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-sm text-muted" role="status">
        {es.notFound.text}
      </p>
      <Link
        href="/es"
        className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-primary transition-colors duration-200 hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {es.notFound.cta}
      </Link>
    </main>
  );
}
