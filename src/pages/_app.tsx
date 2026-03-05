import { Suspense, useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "styled-components";

import Spinner from "@/components/Spinner";
import MainErrorFallback from "@/components/errors/MainErrorFallback";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/globalStyles";
import { queryConfig } from "@/lib/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: queryConfig }));

  return (
    <Suspense fallback={<Spinner />}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
