import { withPayload } from "@payloadcms/next/withPayload";

import redirects from "./redirects.js";

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone", // Required for Docker hosting
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL].map((item) => {
        const url = new URL(item);

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(":", ""),
        };
      }),
    ],
  },
  reactStrictMode: true,
  redirects,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
