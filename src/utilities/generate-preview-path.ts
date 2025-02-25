import type { CollectionSlug, PayloadRequest } from "payload";

import { getServerSideURL } from "~/utilities/get-url";

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: "/posts",
  pages: "",
};

interface Props {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
  req: PayloadRequest;
}

export function generatePreviewPath({ collection, slug }: Props) {
  const path = `${collectionPrefixMap[collection]}/${slug}`;

  const params = {
    slug,
    collection,
    path,
  };

  const encodedParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value);
  });

  const base = getServerSideURL();

  const url = `${base}/next/preview?${encodedParams.toString()}`;

  return url;
}
