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
   * Public SimplyBook.me booking URL (widget + fallback link).
   */
  bookingUrl:
    process.env.NEXT_PUBLIC_SIMPLYBOOK_URL ??
    "https://ritualessences.simplybook.it",
  /**
   * Replace with the Google Maps embed URL when the address is confirmed.
   */
  mapsEmbedUrl: null as string | null,
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
  url: "https://ritualessences.simplybook.it",
  theme: "simple_beauty_theme",
  theme_settings: {
    sb_base_color: "#ad7d5b",
    header_color: "#f7f3ee",
    timeline_hide_unavailable: "1",
    hide_past_days: "0",
    timeline_show_end_time: "0",
    timeline_modern_display: "as_slots",
    display_item_mode: "block",
    body_bg_color: "#f7f3ee",
    sb_review_image: "8",
    sb_review_image_preview:
      "/uploads/ritualessences/image_files/preview/d752aa529cb12296e9f5c297ad12ab5f.png",
    dark_font_color: "#262626",
    light_font_color: "#f7f3ee",
    btn_color_1: "#ad7d5b",
    sb_company_label_color: "#262626",
    hide_img_mode: "0",
    show_sidebar: "1",
    sb_busy: "#d9bc9a",
    sb_available: "#797d75",
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
