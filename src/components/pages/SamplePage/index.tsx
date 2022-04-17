import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import logo from "../../../assets/logo.svg";
import { breakpoints } from "../../../styles/responsive";
import { ThemeToggleSwitch } from "../../organisms/ThemeToggleSwitch";

const Section = styled.section`
  textAlign: "center",
  button: {
    font-size: calc(10px + 2vmin);
  }
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.secondary};
`;

const LogoImage = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const P = styled.p({
  fontWeight: "bold",
});

const Link = styled.a(({ theme }) => ({
  color: theme.colors.primary,
  [breakpoints.down("md")]: {
    color: "green",
  },
}));

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
}
`;

export function SamplePage() {
  const [count, setCount] = useState(0);

  return (
    <Section>
      <Header>
        <LogoImage css={{ animation: `${spin} infinite 20s linear` }} src={logo} alt="logo" />
        <P>Hello Vite + React!</P>
        <P>
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            count is: {count}
          </button>
        </P>
        <P>
          <ThemeToggleSwitch />
        </P>
        <P>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </P>
        <P>
          <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </Link>
          {" | "}
          <Link href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </Link>
        </P>
      </Header>
    </Section>
  );
}
