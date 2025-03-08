import type { Field } from "payload";

export const analytics: Field = {
  name: "analytics",
  type: "group",
  label: false,
  fields: [
    {
      name: "googleAnalyticsID",
      label: "Google Analytics ID",
      type: "text",
    },
  ],
};
