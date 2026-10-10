/** Package photos are served from ASE admin, which redirects to storage. */
function adminMediaPattern() {
  const raw = process.env.NEXT_PUBLIC_ASE_ADMIN_URL;
  if (!raw) return null;
  try {
    const url = new URL(raw);
    return {
      protocol: url.protocol.replace(":", ""),
      hostname: url.hostname,
      port: url.port,
      pathname: "/api/public/**",
    };
  } catch {
    return null;
  }
}

const adminMedia = adminMediaPattern();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },

  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/at-home-experiences",
        destination: "/intimate-celebrations",
        permanent: true,
      },
      {
        source: "/at-home-experiences/:path*",
        destination: "/intimate-celebrations/:path*",
        permanent: true,
      },
      {
        source: "/schedule/at-home-experience",
        destination: "/schedule/intimate-celebration",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.S3_BUCKET_NAME}.s3.amazonaws.com`,
        pathname: "/Portfolio/**",
      },
      {
        protocol: "https",
        hostname: `${process.env.S3_BUCKET_NAME}.s3.amazonaws.com`,
        pathname: "/homepage/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "downloads.ctfassets.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "videos.ctfassets.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d13ns7kbjmbjip.cloudfront.net",
        pathname: "/**",
      },
      ...(adminMedia ? [adminMedia] : []),
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
