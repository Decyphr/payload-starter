import type { Metadata } from "next";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import React from "react";

import config from "~/cms/payload.config";
import { Footer } from "~/components/globals/footer";

import "./globals.css";

import { Header } from "~/components/globals/header";
import { HelloBar } from "~/components/globals/hello-bar";
import { Providers } from "~/providers";
import { getServerSideURL } from "~/utilities/get-url";
import { mergeOpenGraph } from "~/utilities/merge-open-graph";
import { cn } from "~/utilities/ui";

export const revalidate = 0;

const querySiteSettings = React.cache(async () => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config });

  const result = await payload.findGlobal({
    slug: "settings", // required
    depth: 2,
    locale: "all",
    fallbackLocale: false,
    overrideAccess: draft,
    showHiddenFields: true,
  });

  return result ?? null;
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isEnabled } = await draftMode();
  const siteSettings = await querySiteSettings();

  return (
    <html
      id="website"
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        {/* <InitTheme /> */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="bg-background text-foreground">
        <Providers>
          {/* <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          /> */}

          {/* Hello Bar will conditionally render itself */}
          <HelloBar data={siteSettings.helloBar} />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
};
