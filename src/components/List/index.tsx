"use client";

import { ListWrapper } from "./styles";

const List = ({ children }: { children: React.ReactNode }) => (
  <ListWrapper>
    {children}
  </ListWrapper>
);

export default List;
