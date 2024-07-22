import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../ui/input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "",
  },
  argTypes: {
    placeholder: {
      description: "Placeholder",
      type: "string",
    },
    type: {
      control: "select",
      options: ["text", "password"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Defualt: Story = {
  args: {
    placeholder: "Defualt Input",
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: "Password Input",
    type: "password",
  },
};
