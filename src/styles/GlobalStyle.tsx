import { css, Global } from "@emotion/react";
import { useMemo } from "react";
import { Theme } from "../types";

interface GlobalStyleProps {
  theme: Theme;
}

function buildTheme(theme: Theme) {
  return css`
    --primary-color: ${theme.colors.primary};
  `;
}

export function GlobalStyle(props: GlobalStyleProps) {
  const { theme } = props;
  const styles = useMemo(() => buildTheme(theme), [theme]);

  return <Global styles={styles} />;
}
