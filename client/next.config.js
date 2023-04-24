/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiUrl: "http://localhost:8080"
  },
  reactStrictMode: true,
  images: {
    domains: ["localhost:8080"]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vn",
      },
    ],
  },
};

module.exports = nextConfig;
