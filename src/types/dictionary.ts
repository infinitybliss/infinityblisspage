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
    pageEyebrow: string;
    pageTitle: string;
    pageDescription: string;
    pilgrimsIntro: string;
    viewTreatment: string;
    fromPrice: string;
    bookCta: string;
    bookThisTreatment: string;
    bookDuration: string;
    benefitsTitle: string;
    durationsTitle: string;
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
    secondaryText: string;
    cta: string;
    pageEyebrow: string;
    pageTitle: string;
    pageDescription: string;
    loadingLabel: string;
    errorText: string;
    errorLinkLabel: string;
    groupTitle: string;
    groupText: string;
    groupCta: string;
    selectionLabel: string;
    changeTreatment: string;
    metaTitle: string;
    metaDescription: string;
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
    bookingTerms: string;
    rights: string;
  };
  legal: {
    notice: { title: string; description: string };
    privacy: { title: string; description: string };
    cookies: { title: string; description: string };
    bookingTerms: { title: string; description: string };
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
};
