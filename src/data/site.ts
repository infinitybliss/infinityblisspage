export type ContactField = string | null;

export const site = {
  name: "Ritual Essences",
  city: "Santiago de Compostela",
  /**
   * Replace with the real production domain when it is confirmed.
   * Used for canonical URLs, Open Graph and sitemap.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contact: {
    address: "Calle Gómez Ulla 4, Bajo" as ContactField,
    phone: "+34 600 62 28 07" as ContactField,
    whatsapp: "+34 600 62 28 07" as ContactField,
    email: null as ContactField,
    hours: "9:00 – 20:00" as ContactField,
  },
  /**
   * Replace with the SimplyBook.me public booking URL or widget mount point.
   */
  bookingHref: "#reservas",
  /**
   * Replace with the Google Maps embed URL when the address is confirmed.
   */
  mapsEmbedUrl: null as string | null,
} as const;
