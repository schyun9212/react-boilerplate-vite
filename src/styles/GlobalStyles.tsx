import { Global, css } from "@emotion/core";
import { resetStyles } from "./reset";

const styles = css`
  ${resetStyles}

  body {
  }

  * {
    font-family: "Manrope", sans-serif;
    box-sizing: border-box;
  }
`;

export function GlobalStyles() {
  return <Global styles={styles} />;
}
