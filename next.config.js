/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },

  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.S3_BUCKET_NAME + ".s3.amazonaws.com",
        port: "",
        pathname: "/Portfolio/**",
      },
      {
        protocol: "https",
        hostname: process.env.S3_BUCKET_NAME + ".s3.amazonaws.com",
        port: "",
        pathname: "/homepage/**",
      },
    ],
    domains: [
      // ... other domains if any
      "images.ctfassets.net",
      "downloads.ctfassets.net",
      "d13ns7kbjmbjip.cloudfront.net",
    ],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
