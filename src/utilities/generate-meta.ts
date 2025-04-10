import type { Metadata } from "next";

import type { Config, Media, Page, Post } from "~/cms/payload-types";

import { getServerSideURL } from "~/utilities/get-url";
import { mergeOpenGraph } from "~/utilities/merge-open-graph";

function getImageURL(image?: Media | Config["db"]["defaultIDType"] | null) {
  const serverUrl = getServerSideURL();

  let url = `${serverUrl}/website-template-OG.webp`;

  if (image && typeof image === "object" && "url" in image) {
    const ogUrl = image.sizes?.og?.url;

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url;
  }

  return url;
}

export async function generateMeta(args: {
  doc: Partial<Page> | Partial<Post> | null;
}): Promise<Metadata> {
  const { doc } = args;

  const ogImage = getImageURL(doc?.meta?.image);
  const hiddenPage = doc?.meta?.hidden;

  const title = doc?.meta?.title
    ? `${doc?.meta?.title} | Payload Website Template`
    : "Payload Website Template";

  return {
    robots: hiddenPage ? "noindex" : undefined,
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || "",
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join("/") : "/",
    }),
    title,
  };
}
