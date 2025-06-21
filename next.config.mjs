import createNextIntlPlugin from "next-intl/plugin";

const config = {};

const plugins = [
  createNextIntlPlugin({}),
  // other plugins like withBundleAnalyzer, etc.
];

const nextConfig = plugins.reduce((acc, plugin) => plugin(acc), config);

export default nextConfig;
