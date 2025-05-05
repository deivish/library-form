import { Meta, StoryObj } from "@storybook/react";
import MultiSelect from "./MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect", 
  component: MultiSelect,
  tags: ["autodocs"],
  args: {
    label: "Select Options",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    value: [],
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {
    value: [],
  },
};

export const WithPreselectedValues: Story = {
  args: {
    value: [{ value: "option1", label: "Option 1" }],
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};
