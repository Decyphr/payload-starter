import clsx from "clsx";
import React from "react";

import type { Post } from "~/cms/payload-types";
import type { CardPostData } from "~/components/card";

import { Card } from "~/components/card";
import RichText from "~/components/rich-text";

export interface RelatedPostsProps {
  className?: string;
  docs?: Post[];
  introContent?: any;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props;

  return (
    <div className={clsx("lg:container", className)}>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
        {docs?.map((doc) => {
          if (typeof doc === "string")
            return null;

          return (
            <Card
              key={doc.id}
              doc={doc as CardPostData}
              relationTo="posts"
              showCategories
            />
          );
        })}
      </div>
    </div>
  );
};
