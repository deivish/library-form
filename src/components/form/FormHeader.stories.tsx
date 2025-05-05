import { Meta, StoryObj } from "@storybook/react";
import FormHeader from "./FormHeader"; 

const meta: Meta<typeof FormHeader> = {
  title: "Components/FormHeader",
  component: FormHeader,
  tags: ["autodocs"],
  args: {
    title: "Task Form",
    onAddSubtask: () => alert("Add subtask clicked!"),
    onSave: () => alert("Save clicked!"),
  },
};

export default meta;

type Story = StoryObj<typeof FormHeader>;

export const Default: Story = {
  args: {},
};

export const CustomTitle: Story = {
  args: {
    title: "Project Form",
  },
};
