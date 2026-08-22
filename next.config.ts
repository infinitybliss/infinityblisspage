import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static-first app: no API routes or server actions.
  // Compatible with Cloudflare Pages via OpenNext or a static export later.
  images: {
    unoptimized: true,
  },
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
