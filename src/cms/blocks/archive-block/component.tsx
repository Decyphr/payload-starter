import { getPayload } from "payload";
import React from "react";

import type { ArchiveBlock as ArchiveBlockProps, Post } from "~/cms/payload-types";

import config from "~/cms/payload.config";
import { CollectionArchive } from "~/components/collection-archive";
import RichText from "~/components/rich-text";

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string;
  }
> = async (props) => {
  const {
    id,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
  } = props;

  const limit = limitFromProps || 3;

  let posts: Post[] = [];

  if (populateBy === "collection") {
    const payload = await getPayload({ config });

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === "object")
        return category.id;
      else return category;
    });

    const fetchedPosts = await payload.find({
      collection: "posts",
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    });

    posts = fetchedPosts.docs;
  }
  else {
    if (selectedDocs?.length) {
      // eslint-disable-next-line array-callback-return
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === "object")
          return post.value;
      }) as Post[];

      posts = filteredSelectedPosts;
    }
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText
            className="ml-0 max-w-[48rem]"
            data={introContent}
            enableGutter={false}
          />
        </div>
      )}
      <CollectionArchive posts={posts} />
    </div>
  );
};
