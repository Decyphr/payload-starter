import type { Meta, StoryObj } from "@storybook/react";

import { FooterClient } from "~/components/globals/footer/component.client";

import { footerData } from "../_mocks/nav";

const meta: Meta<typeof FooterClient> = {
  title: "Organisms/Footer",
  component: FooterClient,
  argTypes: {
    data: {
      control: "object",
      defaultValue: footerData,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FooterClient>;

// Default navigation menu
export const Default: Story = {
  args: {
    data: footerData,
  },
};
