"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SiteImage } from "@/data/media";
import type { Locale } from "@/types/locale";

type HeroCarouselProps = {
  slides: SiteImage[];
  locale: Locale;
  labels: {
    carouselLabel: string;
    previousSlide: string;
    nextSlide: string;
    goToSlide: string;
  };
  className?: string;
  sizes?: string;
};

const AUTOPLAY_MS = 5500;

export function HeroCarousel({
  slides,
  locale,
  labels,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotionRef = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const count = slides.length;
  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (count <= 1 || paused || reduceMotionRef.current) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [count, paused]);

  if (count === 0) {
    return null;
  }

  return (
    <figure
      className={`relative overflow-hidden bg-sage-soft rounded-2xl ${className}`}
      aria-roledescription="carousel"
      aria-label={labels.carouselLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current;
        const end = event.changedTouches[0]?.clientX;
        touchStartX.current = null;
        if (start == null || end == null) {
          return;
        }
        const delta = end - start;
        if (Math.abs(delta) < 40) {
          return;
        }
        goTo(index + (delta < 0 ? 1 : -1));
      }}
    >
      <div className="absolute inset-0">
        {slides.map((slide, slideIndex) => {
          const active = slideIndex === index;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!active}
            >
              <Image
                src={slide.src}
                alt={active ? slide.alt[locale] : ""}
                fill
                priority={slideIndex === 0}
                sizes={sizes}
                className="object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-cacao/35 to-transparent" />

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 px-4">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-background/40 bg-background/80 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={labels.previousSlide}
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ‹
          </span>
        </button>

        <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-background/75 px-3 py-2 backdrop-blur-sm">
          {slides.map((slide, slideIndex) => {
            const active = slideIndex === index;
            return (
              <button
                key={slide.src}
                type="button"
                aria-label={`${labels.goToSlide} ${slideIndex + 1}`}
                aria-current={active ? "true" : undefined}
                onClick={() => goTo(slideIndex)}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  active
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-background/40 bg-background/80 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={labels.nextSlide}
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ›
          </span>
        </button>
      </div>
    </figure>
  );
}
