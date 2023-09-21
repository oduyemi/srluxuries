/**
 * @type {import('next').NextConfig}
 */

 const webpack = require("webpack");


module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.plugins.push(
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        })
      );

      return config;
    },
    images: {
      domains: [process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME],
    },
    env: {
      CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    },
  };

  return {
    ...defaultConfig,
    ...nextConfig,
  };
};
