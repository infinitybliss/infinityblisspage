import type { Metadata, Viewport } from "next";
import { fontSans, fontSerif } from "@/lib/fonts";
import { site } from "@/data/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F7F3EE",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontSans.variable} ${fontSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
