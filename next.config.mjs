/** @type {import('next').NextConfig} */
// const nextConfig = {}

const nextConfig = {
  reactStrictMode: true, // Good practice to keep this
  webpack(config) {
    // Grab the existing rule that handles image optimization
    // and exclude SVG from it so svgr can handle it
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/, // Apply this rule to JSX/TSX files
        use: ['@svgr/webpack'], // Use @svgr/webpack to convert SVGs to React components
      },
    );

    // If you found the file loader rule, exclude SVG from it
    // This is important to prevent conflicts where Next.js's default image loader
    // tries to process SVGs that @svgr/webpack is handling.
    if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig


