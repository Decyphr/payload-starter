import type { Metadata } from "next/types";

import { notFound } from "next/navigation";
import { getPayload } from "payload";
import React from "react";

import config from "~/cms/payload.config";
import { CollectionArchive } from "~/components/collection-archive";
import { PageRange } from "~/components/page-range";
import { Pagination } from "~/components/pagination";

import PageClient from "./page.client";

export const revalidate = 0;
// export const revalidate = 600;

// export async function generateStaticParams() {
//   const payload = await getPayload({ config });
//   const { totalDocs } = await payload.count({
//     collection: "posts",
//     overrideAccess: false,
//   });

//   const totalPages = Math.ceil(totalDocs / 10);

//   const pages: { pageNumber: string }[] = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pages.push({ pageNumber: String(i) });
//   }

//   return pages;
// }

interface Args {
  params: Promise<{
    number: string;
  }>;
}

export default async function Page({ params: paramsPromise }: Args) {
  const { number } = await paramsPromise;
  const payload = await getPayload({ config });

  const sanitizedPageNumber = Number(number);

  if (!Number.isInteger(sanitizedPageNumber))
    notFound();

  const posts = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
  });

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="container">
        {posts?.page && posts?.totalPages > 1 && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { number } = await paramsPromise;
  return {
    title: `Payload Website Template Posts Page ${number || ""}`,
  };
}
