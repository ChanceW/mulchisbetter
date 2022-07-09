const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "elasticbeanstalk-us-east-2-114778925296.s3.us-east-2.amazonaws.com",
    ],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
