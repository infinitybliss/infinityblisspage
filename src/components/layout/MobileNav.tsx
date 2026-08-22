"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/types/dictionary";

type NavLink = {
  href: string;
  label: string;
};

type MobileNavProps = {
  dictionary: Dictionary;
  links: NavLink[];
  bookHref: string;
};

export function MobileNav({ dictionary, links, bookHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previouslyFocused = document.activeElement;
    const menuButton = buttonRef.current;
    const firstLink = panelRef.current?.querySelector("a");
    firstLink?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      } else {
        menuButton?.focus();
      }
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-foreground"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <span aria-hidden="true" className="text-lg leading-none">
            ×
          </span>
        ) : (
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
          </span>
        )}
      </button>
      {open && (
        <div
          id={menuId}
          ref={panelRef}
          className="absolute inset-x-0 top-full z-50 border-t border-border-subtle bg-background px-4 py-6 shadow-sm sm:px-6"
        >
          <nav aria-label={dictionary.nav.main}>
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-3 text-base text-foreground transition-colors duration-200 hover:bg-sand-soft"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 px-3">
            <Button href={bookHref} className="w-full" onClick={() => setOpen(false)}>
              {dictionary.nav.book}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
