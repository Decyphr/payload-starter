import type { Metadata } from "next";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { draftMode } from "next/headers";
import React from "react";

import { AdminBar } from "~/cms/components/admin-bar";
import { Footer } from "~/cms/footer/component";
import { Header } from "~/cms/header/component";
import { Providers } from "~/providers";
import { InitTheme } from "~/providers/theme/init-theme";
import { getServerSideURL } from "~/utilities/get-url";
import { mergeOpenGraph } from "~/utilities/merge-open-graph";
import { cn } from "~/utilities/ui";

import "./globals.css";

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="dark">
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

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
