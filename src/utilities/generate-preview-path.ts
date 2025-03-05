import type { CollectionSlug } from "payload";

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: "/posts",
  pages: "",
};

interface Props {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
}

export function generatePreviewPath({ collection, slug }: Props) {
  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path: `${collectionPrefixMap[collection]}/${slug}`,
    previewSecret: process.env.PREVIEW_SECRET ?? "",
  });

  const url = `/next/preview?${encodedParams.toString()}`;

  return url;
}
