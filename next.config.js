/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/my-custom-route",
        destination: "/some-page",
      },
    ];
  },
};

module.exports = nextConfig;
