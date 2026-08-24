import Image from "next/image";
import type { Locale } from "@/types/locale";
import type { SiteImage } from "@/data/media";

type MediaImageProps = {
  image: SiteImage;
  locale: Locale;
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: boolean;
};

export function MediaImage({
  image,
  locale,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  rounded = true,
}: MediaImageProps) {
  return (
    <figure
      className={`relative overflow-hidden bg-sage-soft ${rounded ? "rounded-2xl" : ""} ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt[locale]}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </figure>
  );
}
