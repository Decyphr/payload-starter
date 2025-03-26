import type { Metadata } from "next";

import { draftMode } from "next/headers";
import { getPayload } from "payload";
import React, { cache } from "react";

import { RelatedPosts } from "~/cms/blocks/related-posts/component";
import configPromise from "~/cms/payload.config";
import { PostHero } from "~/components/heros/post-hero";
import { LivePreviewListener } from "~/components/live-preview-listener";
import { PayloadRedirects } from "~/components/payload-redirects";
import RichText from "~/components/rich-text";
import { generateMeta } from "~/utilities/generate-meta";

import PageClient from "./page.client";

export const revalidate = 0;

// export async function generateStaticParams() {
//   const payload = await getPayload({ config: configPromise });
//   const posts = await payload.find({
//     collection: "posts",
//     draft: false,
//     limit: 1000,
//     overrideAccess: false,
//     pagination: false,
//     select: {
//       slug: true,
//     },
//   });

//   const params = posts.docs.map(({ slug }) => {
//     return { slug };
//   });

//   return params;
// }

interface Args {
  params: Promise<{
    slug?: string;
  }>;
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "posts",
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { slug = "" } = await paramsPromise;
  const url = `/posts/${slug}`;
  const post = await queryPostBySlug({ slug });

  if (!post)
    return <PayloadRedirects url={url} />;

  return (
    <article className="pt-16 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          <RichText
            className="max-w-[48rem] mx-auto"
            data={post.content}
            enableGutter={false}
          />
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <RelatedPosts
              className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
              docs={post.relatedPosts.filter(
                post => typeof post === "object",
              )}
            />
          )}
        </div>
      </div>
    </article>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = "" } = await paramsPromise;
  const post = await queryPostBySlug({ slug });

  return generateMeta({ doc: post });
}
