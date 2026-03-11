import type { NextConfig } from "next";

// basePath is only needed for GitHub Pages (production).
// In development, serve from / so localhost:3000/ works normally.
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/personal_website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
