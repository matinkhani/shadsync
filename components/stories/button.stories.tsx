import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../ui/button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "default",
    label: "Button",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "outline",
        "link",
        "destructive",
        "secondary",
        "ghost",
      ],
      description: "value for varient",
      type: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Defualt: Story = {
  args: {
    variant: "default",
    label: "DEFAULT",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    label: "OUTLINE",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    label: "LINK",
  },
};
