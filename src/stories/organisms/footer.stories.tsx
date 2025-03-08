import type { Meta, StoryObj } from "@storybook/react";

import { FooterNav } from "~/components/globals/footer/nav";

import { footerData } from "../_mocks/links";
import { StoryContainer } from "../story-container";

const meta: Meta<typeof FooterNav> = {
  title: "Organisms/Footer",
  component: FooterNav,
  argTypes: {
    links: {
      control: "object",
      defaultValue: footerData,
    },
  },
  render: args => (
    <StoryContainer>
      <FooterNav {...args} />
    </StoryContainer>
  ),
};

export default meta;
type Story = StoryObj<typeof FooterNav>;

// Default navigation menu
export const Default: Story = {
  args: {
    links: footerData,
  },
};
