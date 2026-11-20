import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Keep the Vercel Image Optimization usage low (Hobby: 5,000 transformations/month).
    // Each unique src x width x quality x format is a separate transformation, and
    // crawlers often request every width in a srcset.
    // Defaults are 8 device sizes + 7 image sizes, which gives ~10 widths per image.
    deviceSizes: [640, 1080, 1920],
    imageSizes: [256],
    qualities: [75],
    formats: ["image/webp"],
    // Keep optimized images cached for 31 days instead of the 4-hour default,
    // so the same image is not re-transformed (and re-billed) several times a day.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
