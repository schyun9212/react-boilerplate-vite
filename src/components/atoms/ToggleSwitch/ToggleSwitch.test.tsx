import React from "react";
import renderer from "react-test-renderer";
import { ToggleSwitch } from ".";

describe("ToggleSwitch", () => {
  test("renders component", () => {
    const component = renderer.create(<ToggleSwitch checked />);

    expect(React.isValidElement(component)).toBe(false);
  });
});
