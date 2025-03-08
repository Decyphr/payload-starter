"use client";

import { SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import type { Header as HeaderType } from "~/cms/payload-types";

import { CMSLink } from "~/components/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "~/components/ui/navigation-menu";

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || [];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map(({ link }, i) => {
          return <ListItem key={i} {...link} appearance="link" title={link.label} />;
        })}
        <Link href="/search">
          <span className="sr-only">Search</span>
          <SearchIcon className="w-5 text-primary" />
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

function ListItem({ title, className, children, ...props }: React.ComponentPropsWithoutRef<typeof CMSLink> & { title: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent">
        <CMSLink {...props} />
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
