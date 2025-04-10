import type { CollectionConfig } from "payload";

import { anyone } from "~/cms/access/anyone";
import { authenticated } from "~/cms/access/authenticated";
import { slugField } from "~/cms/fields/slug";

export const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    ...slugField(),
  ],
};
