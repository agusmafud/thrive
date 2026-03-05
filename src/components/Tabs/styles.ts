import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 32px;
  background: rgb(40, 43, 50);
`;

export const TabButton = styled.button<{ $active: boolean }>`
  padding: 12px 24px;
  background: transparent;
  color: ${({ $active }) => ($active ? "#fff" : "#9e9e9e")};
  border: none;
  border-bottom: 3px solid
    ${({ $active }) => ($active ? "#55cc44" : "transparent")};
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }
`;
