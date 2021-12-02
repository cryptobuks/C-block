import React from "react";

import { render } from "@testing-library/react";

import { ThemeProvider } from "../../theme/testUtils";

import { Cookie64 } from "./components/Cookie";

describe("Icons", () => {
  it("should render", () => {
    const { container } = render(
      <ThemeProvider>
        <Cookie64 />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
