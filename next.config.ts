import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/cool-mountain-logistics" : "",
  assetPrefix: isProd ? "/cool-mountain-logistics/" : "",
};

export default nextConfig;
