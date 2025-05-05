import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio", options: ["primary", "secondary"] },
    },
    isLoading: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn = (args) => <Button {...args}>Click me</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  variant: "primary",
};
