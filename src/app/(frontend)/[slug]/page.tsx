import type { Metadata } from "next";

import config from "@payload-config";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import React, { cache } from "react";

import type { Page as PageType } from "~/payload-types";

import { RenderBlocks } from "~/blocks/render-blocks";
import { LivePreviewListener } from "~/components/live-preview-listener";
import { PayloadRedirects } from "~/components/payload-redirects";
import { homeStatic } from "~/endpoints/seed/home-static";
import { RenderHero } from "~/heros/render-hero";
import { generateMeta } from "~/utilities/generate-meta";

import PageClient from "./page.client";

export const revalidate = 0;

// export async function generateStaticParams() {
//   const payload = await getPayload({ config });
//   const pages = await payload.find({
//     collection: "pages",
//     draft: false,
//     limit: 1000,
//     overrideAccess: false,
//     pagination: false,
//     select: {
//       slug: true,
//     },
//   });

//   const params = pages.docs
//     ?.filter((doc) => {
//       return doc.slug !== "home";
//     })
//     .map(({ slug }) => {
//       return { slug };
//     });

//   return params;
// }

interface Args {
  params: Promise<{
    slug?: string;
  }>;
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "pages",
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { slug = "home" } = await paramsPromise;
  const url = `/${slug}`;

  let page: PageType | null;

  page = await queryPageBySlug({
    slug,
  });

  // Remove this code once your website is seeded
  if (!page && slug === "home") {
    page = homeStatic;
  }

  if (!page) {
    return <PayloadRedirects url={url} />;
  }

  const { hero, layout } = page;

  return (
    <article className="pt-16 pb-24">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = "home" } = await paramsPromise;
  const page = await queryPageBySlug({
    slug,
  });

  return generateMeta({ doc: page });
}
