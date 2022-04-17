import { ThemeProvider } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { SamplePage } from "./components/pages/SamplePage";
import { themeAtom } from "./recoil/atom";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  const theme = useRecoilValue(themeAtom);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SamplePage />
    </ThemeProvider>
  );
}
