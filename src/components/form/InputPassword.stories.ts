import { Meta, StoryObj } from "@storybook/react";
import { InputPassword } from "./InputPassword";

const meta: Meta<typeof InputPassword> = {
  title: "Components/InputPassword",
  component: InputPassword,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter your password",
  },
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {};
