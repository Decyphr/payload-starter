import React from "react";

import type { Page } from "~/cms/payload-types";

import { CMSLink } from "~/components/link";
import { Media } from "~/components/media";
import RichText from "~/components/rich-text";

export const MediumImpactHero: React.FC<Page["hero"]> = ({
  links,
  media,
  richText,
}) => {
  return (
    <div className="container">
      <div className="mb-8">
        {richText && (
          <RichText className="mb-6" data={richText} enableGutter={false} />
        )}

        {Array.isArray(links) && links.length > 0 && (
          <div className="flex gap-4">
            {links.map(({ link }, i) => {
              return (
                <CMSLink key={i} {...link} />
              );
            })}
          </div>
        )}
      </div>
      <div>
        {media && typeof media === "object" && (
          <div>
            <Media
              imgClassName=""
              priority
              resource={media}
            />
            {media?.caption && (
              <div className="mt-3">
                <RichText data={media.caption} enableGutter={false} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
