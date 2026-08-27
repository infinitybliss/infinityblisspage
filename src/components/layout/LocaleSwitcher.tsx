"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { locales } from "@/lib/i18n/config";
import { getEquivalentHref } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type LocaleSwitcherProps = {
  locale: Locale;
  dictionary: Dictionary;
  className?: string;
};

export function LocaleSwitcher({
  locale,
  dictionary,
  className = "",
}: LocaleSwitcherProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const querySuffix = search ? `?${search}` : "";

  return (
    <nav aria-label={dictionary.nav.language} className={className}>
      <ul className="flex items-center gap-1 text-xs font-medium tracking-wide sm:text-sm">
        {locales.map((item, index) => {
          const isActive = item === locale;

          return (
            <li key={item} className="flex items-center gap-1">
              {index > 0 && (
                <span aria-hidden="true" className="text-border">
                  /
                </span>
              )}
              <Link
                href={`${getEquivalentHref(pathname, item)}${querySuffix}`}
                hrefLang={item}
                lang={item}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "px-1.5 py-1 text-primary"
                    : "px-1.5 py-1 text-muted/70 transition-colors duration-200 hover:text-foreground"
                }
              >
                {item.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
