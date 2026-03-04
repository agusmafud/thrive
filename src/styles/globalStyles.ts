import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: ${({ theme }) => theme.colors.foreground};
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
