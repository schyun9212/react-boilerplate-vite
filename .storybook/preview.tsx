import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@emotion/react";

import { GlobalStyles } from "../src/styles/GlobalStyles";
import { themeCatalog } from "../src/styles/theme";

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <MemoryRouter initialEntries={["/"]}>
        <ThemeProvider theme={themeCatalog.light}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      </MemoryRouter>
    </RecoilRoot>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
