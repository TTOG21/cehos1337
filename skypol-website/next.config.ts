import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cehos1337",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
