/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'peworld-hire.herokuapp.com', 'drive.google.com'],
  },
};

module.exports = nextConfig;
