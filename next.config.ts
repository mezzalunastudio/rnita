/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/wedding-and-makeup",
        permanent: true, // Set to true for a 308 permanent redirect, or false for a 307 temporary redirect
      },
    ];
  },
};

module.exports = nextConfig;
