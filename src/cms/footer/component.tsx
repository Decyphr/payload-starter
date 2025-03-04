import Link from "next/link";
import React from "react";

import type { Footer as FooterType } from "~/cms/payload-types";

import { CMSLink } from "~/components/link";
import { Logo } from "~/components/logo";
import { ThemeSelector } from "~/providers/theme/theme-selector";
import { getCachedGlobal } from "~/utilities/get-globals";

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal("footer", 1)();

  const navItems = footerData?.navItems || [];

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container mx-auto py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />;
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
