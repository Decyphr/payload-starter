import type { Meta, StoryObj } from "@storybook/react";

import { HeaderClient } from "~/components/globals/header/component.client";

import { headerData } from "../_mocks/nav";

const meta: Meta<typeof HeaderClient> = {
  title: "Organisms/Header",
  component: HeaderClient,
  argTypes: {
    data: {
      control: "object",
      defaultValue: headerData,
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderClient>;

// Default navigation menu
export const Default: Story = {
  args: {
    data: headerData,
  },
};
