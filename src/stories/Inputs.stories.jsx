import React from "react";

import { Input } from "components";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "franklin-audiopen/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
