import type { GlobalConfig } from "payload";

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

import { authenticated } from "../access/authenticated";
import { generalSettings } from "./general";
import { socials } from "./socials";

export const Settings: GlobalConfig = {
  slug: "settings",
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          fields: [generalSettings],
          label: "General",
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: false,
            }),
            MetaImageField({
              relationTo: "media",
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: false,

              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
        {
          label: "Social",
          fields: [socials],
        },
        {
          label: "Analytics",
          fields: [
            {
              name: "analytics",
              label: "Analytics",
              type: "group",
              fields: [
                {
                  name: "googleAnalyticsID",
                  label: "Google Analytics ID",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          label: "Hello Bar",
          fields: [
            {
              name: "helloBar",
              label: "Hello Bar",
              type: "group",
              fields: [
                {
                  name: "enabled",
                  label: "Enabled",
                  type: "checkbox",
                },
                {
                  name: "content",
                  label: "Content",
                  type: "richText",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
