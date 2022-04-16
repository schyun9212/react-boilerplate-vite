import { ThemeProvider } from "@emotion/react";
import { SamplePage } from "./components/pages/SamplePage";
import { GlobalStyles } from "./styles/GlobalStyles";
import { themeCatalog } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={themeCatalog.dark}>
      <GlobalStyles />
      <SamplePage />
    </ThemeProvider>
  );
}
