import { ComponentStory } from "@storybook/react";
import { ToggleSwitch } from ".";

export default {
  title: "ToggleSwitch",
  component: ToggleSwitch,
};

const Template: ComponentStory<typeof ToggleSwitch> = (args) => <ToggleSwitch {...args} />;

export const Checked = Template.bind({});
export const Unchecked = Template.bind({});

Checked.args = {
  checked: true,
};

Unchecked.args = {
  checked: false,
};
