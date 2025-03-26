import type { Field } from "payload";

export const socials: Field = {
  name: "social",
  label: "Social Media",
  type: "group",
  fields: [
    {
      name: "facebook",
      type: "text",
    },
    {
      name: "twitter",
      label: "X (Twitter)",
      type: "text",
    },
    {
      name: "instagram",
      type: "text",
    },
    {
      name: "linkedin",
      type: "text",
    },
    {
      name: "youtube",
      type: "text",
    },
  ],
};
