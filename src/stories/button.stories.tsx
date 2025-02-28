import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "~/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      control: {
        type: "select",
        options: ["clear", "default", "icon", "lg", "sm"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "destructive", "ghost", "link", "outline", "secondary"],
      },
    },
  },
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

// Hover button story
export const Hover: Story = {
  args: {
    children: "Hover Button",
    size: "default",
    variant: "default",
  },
  parameters: {
    pseudo: { hover: true },
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
// export const WithIcon = Template.bind({});
// WithIcon.args = {
//   children: (
//     <>
//       <FaBeer style={{ marginRight: "8px" }} />
//       Button with Icon
//     </>
//   ),
//   size: "default",
//   variant: "default",
// };
