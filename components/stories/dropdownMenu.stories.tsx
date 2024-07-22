import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenuDemo } from "../ui/dropdown-menu-demo";

const meta: Meta<typeof DropdownMenuDemo> = {
  title: "Dropdown Menu",
  component: DropdownMenuDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenuDemo>;

export const Default: Story = {
  args: {},
};
