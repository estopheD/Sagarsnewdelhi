import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: this site is hosted on Hostinger shared/Premium hosting,
  // which serves static files only (no Node.js runtime). `next build`
  // produces a static `out/` directory instead of requiring a server.
  output: "export",
  // Emits e.g. out/about/index.html instead of out/about.html, which Apache
  // (Hostinger's shared hosting stack) resolves natively without rewrite
  // rules for clean URLs like /about.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
