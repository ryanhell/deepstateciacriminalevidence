import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.mux.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "files.ryanhellfacts.com",
        port: "",
      },
    ],
  },

  // Fix Server Action issues
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
      allowedOrigins: ["ryanhellfacts.com", "localhost:3000"],
    },
  },

  // Force unique build IDs to prevent caching issues
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },

  // Performance Optimizations
  compress: true,
  poweredByHeader: true,
  generateEtags: true,

  // SEO-friendly redirects
  async redirects() {
    return [
      // Example: redirect old URLs to new ones
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true, // 301 redirect
      // }
      // Add more redirects as needed
    ];
  },

  // Security and SEO headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
