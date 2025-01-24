import type { Metadata } from "next";
import type { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

import { getServerSideURL } from "~/utilities/get-url";

const defaultOpenGraph: OpenGraph = {
  type: "website",
  description: "An open-source website built with Payload and Next.js.",
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: "Payload Website Template",
  title: "Payload Website Template",
};

export function mergeOpenGraph(
  og?: Metadata["openGraph"],
): OpenGraph {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
}
