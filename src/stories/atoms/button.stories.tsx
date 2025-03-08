import type { Meta, StoryObj } from "@storybook/react";

import { CheckCircle2Icon } from "lucide-react";

import { Button } from "~/components/ui/button";

import { StoryContainer } from "../story-container";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      control: "select",
      options: ["clear", "default", "icon", "lg", "sm"],
    },
    variant: {
      control: "select",
      options: ["default", "destructive", "ghost", "link", "outline", "secondary"],
    },
  },
  render: args => (
    <StoryContainer>
      <Button {...args} />
    </StoryContainer>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default button story
export const Default: Story = {
  args: {
    children: "Default Button",
    size: "default",
    variant: "default",
  },
};

// Secondary button story
export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    size: "default",
    variant: "secondary",
  },
};

// Ghost button story
export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    size: "default",
    variant: "ghost",
  },
};

// Outline button story
export const Outline: Story = {
  args: {
    children: "Outline Button",
    size: "default",
    variant: "outline",
  },
};

// Link button story
export const Link: Story = {
  args: {
    children: "Link Button",
    size: "default",
    variant: "link",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive Button",
    size: "default",
    variant: "destructive",
  },
};

// Disabled button story
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    size: "default",
    variant: "default",
    disabled: true,
  },
};

// Button with icon story
export const WithIcon: Story = {
  args: {
    children: "Icon Button",
    size: "default",
    variant: "default",
  },
  render: args => (
    <StoryContainer>
      <Button {...args}>
        <CheckCircle2Icon className="size-4 mr-2" />
        {args.children}
      </Button>
    </StoryContainer>
  ),
};
