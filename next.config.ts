import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shadcnstudio.com",
      },
      {
        protocol: "https",
        hostname: "miqbomreeysmmlbiyqek.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/demo-images/**",
      },
    ],
  },
};

export default nextConfig;
