import { useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/globalStyles";
import { queryConfig } from "@/lib/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: queryConfig }));

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
