// src/components/CodeBlock.tsx
import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  /**
   * Extra Tailwind classes to append to the default styling.
   */
  className?: string;
}

export default function CodeBlock({ className = "", ...rest }: Props) {
  const merged = [
    "my-6",
    "overflow-x-auto",
    "rounded-lg",
    "bg-gray-800",
    "p-4",
    "text-sm",
    "text-gray-100",
    "font-mono",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <pre {...rest} className={merged} />;
}
