import type { MetadataRoute } from "next";

// Keep search engines able to index pages, but ask crawlers not to fetch the
// Next.js image optimizer endpoint, which counts against the Vercel image quota.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/_next/image",
      },
      {
        userAgent: ["GPTBot", "CCBot", "ClaudeBot", "Bytespider", "Google-Extended", "PerplexityBot"],
        disallow: "/",
      },
    ],
  };
}
