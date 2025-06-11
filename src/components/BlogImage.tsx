// src/components/BlogImage.tsx
import React from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Extra Tailwind classes to append to the default styling.
   */
  className?: string;
}

export default function BlogImage({ className = "", ...rest }: Props) {
  const merged = [
    "my-8",
    "rounded-xl",
    "shadow-lg",
    "object-cover",
    "w-full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <img loading="lazy" {...rest} className={merged} />;
}
