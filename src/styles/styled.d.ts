import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      foreground: string;
    };
    fontFamily: string;
  }
};
