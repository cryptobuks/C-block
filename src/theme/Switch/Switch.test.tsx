import React from "react";

import { Switch } from "@material-ui/core";
import { render } from "@testing-library/react";

import { ThemeProvider } from "../testUtils";

describe("Switch", () => {
  it("should render", () => {
    const { container } = render(
      <ThemeProvider>
        <Switch checked />
        <Switch />
        <Switch checked disabled />
        <Switch disabled />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
