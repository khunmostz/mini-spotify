/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost",'images.unsplash.com'], // allow images to be loaded from localhost
  },
};

module.exports = nextConfig;
