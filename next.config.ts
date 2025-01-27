import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_URL,
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: `/${process.env.NEXT_PUBLIC_BASE_URL}/login`,
  //       permanent: true,
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
