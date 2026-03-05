"use client";

import type { FallbackProps } from "react-error-boundary";
import { Wrapper, Title, Message, RetryButton } from "./styles";

const MainErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <Wrapper role="alert">
    <Title>Something went wrong</Title>
    <Message>{error instanceof Error ? error.message : "Unknown error"}</Message>
    <RetryButton onClick={resetErrorBoundary}>Try again</RetryButton>
  </Wrapper>
);

export default MainErrorFallback;
