/**
 * @type {import('next').NextConfig}
 */
const path = require("path");

module.exports = {
  webpack: (config, { webpack, isServer }) => {
    // Provide jQuery globally
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    // Prevent cloudinary-core (browser SDK) from being included in server build
    if (isServer) {
      config.resolve.alias["cloudinary-core"] = false;
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  env: {
    CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
};
