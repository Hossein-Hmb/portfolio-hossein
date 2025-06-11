// src/components/MDXComponents.tsx
import React from "react";
import BlogImage from "./BlogImage";
import CodeBlock from "./CodeBlock";

/**
 * A central map of MDX → React components.
 * Import this in every MDXRemote call:
 *   import { mdxComponents } from "@/components/MDXComponents";
 *   <MDXRemote ... components={mdxComponents} />
 */
export const mdxComponents = {
  img: BlogImage,
  pre: CodeBlock,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      {...props}
      className="mt-12 mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="mt-10 mb-5 text-3xl font-semibold tracking-tight text-blue-700 dark:text-blue-300"
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className="mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-200"
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="my-5 leading-7 text-gray-700 dark:text-gray-300" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="list-disc pl-6 space-y-2" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="list-decimal pl-6 space-y-2" />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
    />
  ),
};
