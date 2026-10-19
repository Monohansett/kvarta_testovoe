import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  brick: "bg-brick text-white hover:bg-brick-hover",
  navy: "bg-navy text-white hover:bg-navy-hover",
  white: "bg-white text-ink hover:bg-[#dde3ee]",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  outlineLight: "border-2 border-white text-white hover:bg-white hover:text-ink",
} as const;

const sizes = {
  md: "min-h-12 px-6",
  sm: "min-h-11 px-[18px] text-[15px]",
} as const;

type Style = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

const base =
  "inline-flex items-center justify-center rounded-md font-semibold transition duration-200 " +
  "hover:shadow-[0_8px_18px_rgba(10,16,28,.25)] active:shadow-none " +
  "focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-ink " +
  "motion-reduce:transition-none";

function cn({ variant = "brick", size = "md" }: Style, extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: Style & ComponentProps<typeof Link>) {
  return <Link {...props} className={cn({ variant, size }, className)} />;
}

export function Button({
  variant,
  size,
  className,
  ...props
}: Style & ComponentProps<"button">) {
  return <button {...props} className={cn({ variant, size }, className)} />;
}
