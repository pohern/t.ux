import React from "react";
import {
  ToggleWrapper,
  ToggleBackground,
  ToggleCheckBoxInput,
  ToggleBall,
  ToggleLabel,
} from "./Toggles";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Toggles",
  decorators: [withDesign],
};

export const Toggles = (args) => (
  <ToggleWrapper className="Toggle" {...args}>
    <ToggleBackground {...args}>
      <ToggleCheckBoxInput type="checkbox" />
      <ToggleBall {...args}></ToggleBall>
      <ToggleLabel {...args}>Label</ToggleLabel>
    </ToggleBackground>
  </ToggleWrapper>
);

Toggles.args = {
  hover: false,
  focus: false,
  checked: false,
  disabled: false,
};

Toggles.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/WKazrI05IMxIcso2Cn5obC/Tux-Design-Library?node-id=247%3A6",
    },
  },
};
