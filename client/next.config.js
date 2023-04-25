/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vn",
        port: "",
      },
    ],
  },
  env: {
    apiUrl: "http://localhost:8080"
  }
};

module.exports = nextConfig;
