import type { Field } from "payload";

export const generalSettings: Field = {
  name: "generalSettings",
  type: "group",
  label: false,
  fields: [
    {
      name: "siteTitle",
      label: "Site Title",
      type: "text",
    },
    {
      name: "tagline",
      label: "Tagline",
      type: "text",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "favicon",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "adminEmail",
      label: "Email",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "text",
    },
  ],
};
