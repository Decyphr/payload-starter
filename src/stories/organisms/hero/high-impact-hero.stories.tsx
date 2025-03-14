import type { Meta, StoryObj } from "@storybook/react";

import { HighImpactHero } from "~/components/heros/high-impact";
import { mockImage, mockLink, mockRichText } from "~/stories/_mocks/blocks";

const meta: Meta<typeof HighImpactHero> = {
  title: "Organisms/Hero/HighImpactHero",
  component: HighImpactHero,
  argTypes: {
    links: [
      mockLink("default"),
      mockLink("outline"),
    ],
    media: mockImage(),
    richText: mockRichText("This is a high impact hero section."),
  },
};

export default meta;
type Story = StoryObj<typeof HighImpactHero>;

export const Default: Story = {
  args: {
    links: [
      mockLink("default"),
      mockLink("outline"),
    ],
    // @ts-expect-error - mock data
    media: mockImage(),
    richText: mockRichText("This is a high impact hero section."),
  },
};
