"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import type { Header as HeaderType } from "~/cms/payload-types";

import { CMSLink } from "~/components/link";
import { Logo } from "~/components/logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "~/components/ui/sheet";

interface HeaderClientProps {
  data: HeaderType;
}

export function HeaderClient({ data }: HeaderClientProps) {
  /* Storing the value in a useState to avoid hydration errors */
  // const [theme, setTheme] = React.useState<string | null>(null);
  // const { headerTheme, setHeaderTheme } = useHeaderTheme();
  // const pathname = usePathname();

  // React.useEffect(() => {
  //   setHeaderTheme(null);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pathname]);

  // React.useEffect(() => {
  //   if (headerTheme && headerTheme !== theme)
  //     setTheme(headerTheme);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [headerTheme]);

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigation = data.navItems ?? [];

  return (
    <header className="relative inset-x-0 top-0 z-50 bg-background">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/">
            <Logo
              variant="dark"
              loading="eager"
              priority="high"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map(({ link }, index) => (
            <CMSLink
              key={index}
              className="text-sm/6 font-semibold text-gray-900"
              {...link}
              appearance="link"
            />
          ))}
        </div>
      </nav>
      <div className="lg:hidden">
        <Sheet open={mobileMenuOpen} onOpenChange={open => setMobileMenuOpen(open)}>
          <SheetHeader className="sr-only">
            <SheetTitle>Payload &amp; Next Starter</SheetTitle>
          </SheetHeader>
          <SheetContent aria-describedby="header-navigation" side="right" className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-foreground">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Logo
                  variant="dark"
                  loading="eager"
                  priority="high"
                />
              </Link>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-muted">
                <div className="space-y-2 py-6">
                  {navigation.map(({ link }, index) => (
                    <CMSLink
                      key={index}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-background"
                      appearance="link"
                      {...link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
