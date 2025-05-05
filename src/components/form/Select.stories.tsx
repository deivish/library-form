import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select"; 

const meta: Meta<typeof Select> = {
  title: "Components/Select", 
  component: Select,
  tags: ["autodocs"],
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const CustomClassName: Story = {
  args: {
    className: "text-lg border-green-500",
  },
};
