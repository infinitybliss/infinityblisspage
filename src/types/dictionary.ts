import type { ServiceId } from "@/types/service";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tagline: string;
  };
  skipToContent: string;
  nav: {
    home: string;
    services: string;
    pilgrims: string;
    about: string;
    contact: string;
    book: string;
    language: string;
    openMenu: string;
    closeMenu: string;
    main: string;
  };
  hero: {
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    imageLabel: string;
    imageAlt: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    text: string;
  };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    duration: string;
    items: Record<ServiceId, { name: string; description: string }>;
  };
  pilgrims: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    points: {
      personalized: { title: string; text: string };
      treatments: { title: string; text: string };
      atmosphere: { title: string; text: string };
      professionals: { title: string; text: string };
    };
    imageLabel: string;
    imageAlt: string;
  };
  reviews: {
    eyebrow: string;
    title: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    placeholderLabel: string;
    placeholderText: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    address: string;
    phone: string;
    whatsapp: string;
    hours: string;
    pending: string;
    mapLabel: string;
    mapPlaceholder: string;
  };
  footer: {
    nav: string;
    contact: string;
    legal: string;
    legalNotice: string;
    privacy: string;
    cookies: string;
    rights: string;
  };
  legal: {
    pendingBody: string;
    notice: { title: string; description: string };
    privacy: { title: string; description: string };
    cookies: { title: string; description: string };
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
};
