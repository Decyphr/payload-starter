import type { Metadata } from "next/types";

import { getPayload } from "payload";
import React from "react";

import config from "~/cms/payload.config";
import { CollectionArchive } from "~/components/collection-archive";
import { PageRange } from "~/components/page-range";
import { Pagination } from "~/components/pagination";

import PageClient from "./page.client";

export const revalidate = 0;

export default async function Page() {
  const payload = await getPayload({ config });

  const posts = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  });

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mx-auto mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
        </div>
      </div>

      <div className="container mx-auto mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="container mx-auto">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  };
}
