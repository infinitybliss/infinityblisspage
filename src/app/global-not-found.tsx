import Link from "next/link";
import { fontSans, fontSerif } from "@/lib/fonts";
import { es } from "@/messages/es";
import "./globals.css";

export const metadata = {
  title: es.notFound.title,
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html
      lang="es"
      className={`${fontSans.variable} ${fontSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col items-center justify-center bg-cream px-6 font-sans text-charcoal">
        <h1 className="font-serif text-4xl">{es.notFound.title}</h1>
        <p className="mt-4 max-w-md text-center text-muted">{es.notFound.text}</p>
        <Link
          href="/es"
          className="mt-8 inline-flex rounded-full bg-copper px-5 py-2.5 text-sm text-white hover:bg-copper-hover"
        >
          {es.notFound.cta}
        </Link>
      </body>
    </html>
  );
}
