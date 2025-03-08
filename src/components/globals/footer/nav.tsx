import type { Footer as FooterType } from "~/cms/payload-types";

import { CMSLink } from "~/components/link";

interface Props {
  links: FooterType["navItems"];
}

export function FooterNav({ links }: Props) {
  if (!links)
    return null;

  return (
    <nav className="flex flex-col md:flex-row gap-4">
      {links.map(({ link }, i) => {
        return <CMSLink key={i} {...link} />;
      })}
    </nav>
  );
}
