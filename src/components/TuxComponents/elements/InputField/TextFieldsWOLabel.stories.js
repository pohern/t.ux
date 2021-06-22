import React from "react";
import { Input, Wrapper } from "./TextFieldsWOLabel";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Text Fields Without Label",
  decorators: [withDesign],
};

export const TextFieldsWithoutLabel = (args) => (
  <Wrapper>
    <Input
      placeholder={
        args.focus === true
          ? "Input Text"
          : args.active === true
          ? "Input Text"
          : args.error === true
          ? "Wrong Input"
          : args.hover === true
          ? "Input Text" : "Placeholder Text"
      }
      type='text'
      {...args}
    />
  </Wrapper>
);

TextFieldsWithoutLabel.args = {
  disabled: false,
  focus: false,
  hover: false,
  active: false,
  error: false,
};
TextFieldsWithoutLabel.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/VV3mFbPYwfmOpuWfGND4Dv/Tux-Design-Library-FROZEN?node-id=228%3A85",
    },
  },
};
