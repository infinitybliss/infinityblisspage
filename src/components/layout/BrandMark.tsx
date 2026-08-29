import Image from "next/image";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-7 w-7 sm:h-10 sm:w-10",
  md: "h-9 w-9 sm:h-10 sm:w-10",
  lg: "h-12 w-12 sm:h-14 sm:w-14",
} as const;

export function BrandMark({
  size = "md",
  className = "",
}: BrandMarkProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/brand/imagotipo.png"
        alt=""
        width={112}
        height={112}
        className="h-full w-full object-contain"
        priority
      />
    </span>
  );
}
