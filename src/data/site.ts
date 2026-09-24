export type ContactField = string | null;

export const site = {
  name: "Infinity Bliss",
  city: "Santiago de Compostela",
  /**
   * Replace with the real production domain when it is confirmed.
   * Used for canonical URLs, Open Graph and sitemap.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contact: {
    address: "Calle Gómez Ulla 4, Bajo, 15702 Santiago de Compostela" as ContactField,
    phone: "+34 600 62 28 07" as ContactField,
    whatsapp: "+34 600 62 28 07" as ContactField,
    email: "Infinitybliss.santiago@gmail.com" as ContactField,
    hours: "9:00 – 20:00" as ContactField,
  },
  /**
   * Public SimplyBook.me booking URL (widget + fallback link).
   * Company login: `infinitybliss`
   */
  bookingUrl:
    process.env.NEXT_PUBLIC_SIMPLYBOOK_URL ??
    "https://infinitybliss.simplybook.it",
  /**
   * Google Maps embed for Calle Gómez Ulla 4, Santiago de Compostela.
   * Coordinates from OpenStreetMap (building nº 4).
   */
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Calle+G%C3%B3mez+Ulla+4,+15702+Santiago+de+Compostela&hl=es&z=17&output=embed" as string | null,
  /** Opens the location in Google Maps (new tab). */
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle+G%C3%B3mez+Ulla+4,+15702+Santiago+de+Compostela",
} as const;

/** Official SimplyBook.me widget script. */
// If non-essential cookies are introduced in the future,
// consent must be obtained before loading them.
export const simplyBookWidgetScriptSrc =
  "https://widget.simplybook.it/v2/widget/widget.js";

/**
 * Official SimplyBook.me widget configuration.
 * Keep in sync with the snippet generated in the SimplyBook dashboard.
 */
export const simplyBookWidgetConfig = {
  widget_type: "iframe",
  url: "https://infinitybliss.simplybook.it",
  theme: "simple_beauty_theme",
  theme_settings: {
    sb_base_color: "#c5a16d",
    header_color: "#fffefc",
    timeline_hide_unavailable: "1",
    hide_past_days: "0",
    timeline_show_end_time: "0",
    timeline_modern_display: "as_slots",
    display_item_mode: "block",
    body_bg_color: "#f8f5ef",
    sb_review_image: "1",
    sb_review_image_preview:
      "/uploads/infinitybliss/image_files/preview/92142aad4a8c07f2a01eb74d6bdfb7bb.png",
    dark_font_color: "#302820",
    light_font_color: "#ffffff",
    btn_color_1: "#9a7344",
    sb_company_label_color: "#302820",
    hide_img_mode: "0",
    show_sidebar: "1",
    sb_busy: "#eae0d2",
    sb_available: "#dce8d9",
  },
  timeline: "modern",
  datepicker: "top_calendar",
  is_rtl: false,
  app_config: {
    clear_session: 0,
    allow_switch_to_ada: 0,
    predefined: {} as Record<string, string>,
  },
};

/** Widget config with optional service preselection via SimplyBook predefined.service. */
export function getSimplyBookWidgetConfig(bookingId?: number) {
  return {
    ...simplyBookWidgetConfig,
    app_config: {
      ...simplyBookWidgetConfig.app_config,
      predefined: bookingId
        ? { service: String(bookingId) }
        : {},
    },
  };
}
