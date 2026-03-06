import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "uxwing.com",
      },
      {
        protocol: "https",
        hostname: "media.craiyon.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com", // ✅ fixed typo
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // ✅ Google profile images
      },
      {
        protocol: "https",
        hostname: "scontent.fccj2-3.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
