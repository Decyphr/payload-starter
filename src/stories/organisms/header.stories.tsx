import type { Meta, StoryObj } from "@storybook/react";

import { HeaderNav } from "~/components/globals/header/nav";

import { headerData } from "../_mocks/links";
import { StoryContainer } from "../story-container";

const meta: Meta<typeof HeaderNav> = {
  title: "Organisms/Header",
  component: HeaderNav,
  argTypes: {
    data: {
      control: "object",
      defaultValue: headerData,
    },
  },
  render: args => (
    <StoryContainer>
      <HeaderNav {...args} />
    </StoryContainer>
  ),
};

export default meta;
type Story = StoryObj<typeof HeaderNav>;

// Default navigation menu
export const Default: Story = {
  args: {
    data: headerData,
  },
};
