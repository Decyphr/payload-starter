import type { Meta, StoryObj } from "@storybook/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";

import { StoryContainer } from "../story-container";

const meta: Meta<typeof Accordion> = {
  title: "Molecules/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    collapsible: {
      control: "boolean",
      defaultValue: false,
    },
  },
  render: args => (
    <StoryContainer>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>
            Content for item 1
          </AccordionContent>
        </AccordionItem>
        {args.type === "multiple" && (
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>
              Content for item 2
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </StoryContainer>
  ),
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Default accordion story
export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
};

// Multiple items accordion story
export const MultipleItems: Story = {
  args: {
    type: "multiple",
  },
};
