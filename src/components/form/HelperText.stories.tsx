import { Meta, StoryObj } from "@storybook/react";
import { HelperText } from "./HelperText"; 

const meta: Meta<typeof HelperText> = {
  title: "Components/HelperText", 
  component: HelperText,
  tags: ["autodocs"],
  args: {
    children: "This is some helper text.",
  },
};

export default meta;

type Story = StoryObj<typeof HelperText>;

export const Default: Story = {
  args: {
    state: "default",
  },
};

export const ErrorState: Story = {
  args: {
    state: "error",
    children: "This is an error message.",
  },
};

export const CustomId: Story = {
  args: {
    id: "helper-text-custom-id",
    state: "default",
    children: "Helper text with a custom ID.",
  },
};
