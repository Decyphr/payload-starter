/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from "next";

import { generatePageMetadata, RootPage } from "@payloadcms/next/views";

import { importMap } from "~/app/(payload)/admin/importMap";
import config from "~/cms/payload.config";

interface Args {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[];
  }>;
}

export function generateMetadata({
  params,
  searchParams,
}: Args): Promise<Metadata> {
  return generatePageMetadata({ config, params, searchParams });
}

function Page({ params, searchParams }: Args) {
  return RootPage({ config, params, searchParams, importMap });
}

export default Page;
