"use client";

import React from "react";

import type { ContentBlock as ContentBlockProps } from "~/cms/payload-types";

import { CMSLink } from "~/components/link";
import RichText from "~/components/rich-text";
import { cn } from "~/utilities/ui";

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props;

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns
        && columns.length > 0
        && columns.map((col, index) => {
          const { enableLink, link, richText, size } = col;

          return (
            <div
              key={index}
              className={cn("col-span-4", size === "full"
                ? "lg:col-span-12 flex-1"
                : size === "twoThirds"
                  ? "lg:col-span-8"
                  : size === "half"
                    ? "lg:col-span-6"
                    : "")}
            >
              {richText && <RichText data={richText} enableGutter={false} />}
              {enableLink && (
                <div className="mt-6">
                  <CMSLink {...link} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
