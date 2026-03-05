"use client";

import { Wrapper, Circle } from "./styles";

const Spinner = () => (
  <Wrapper role="status" aria-label="Loading">
    <Circle />
  </Wrapper>
);

export default Spinner;
