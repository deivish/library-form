import { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "./MultiSelect"; 

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  args: {
    options, 
    selected: [], 
    onChange: (selected: { value: string; label: string }[]) => {
      console.log(selected); 
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {
    selected: [],
  },
};

export const WithPreselectedValues: Story = {
  args: {
    selected: [{ value: "option1", label: "Option 1" }],
  },
};

export const Required: Story = {
  args: {
    selected: [],
    onChange: (selected: { value: string; label: string }[]) => {
      console.log(selected); 
    },
  },
};
