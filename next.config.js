const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

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

module.exports = withBundleAnalyzer(nextConfig);
