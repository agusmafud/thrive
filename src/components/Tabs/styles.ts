import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  height: 64px;
  display: flex;
  justify-content: center;
  padding: 0 32px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

export const TabButton = styled.button<{ $active: boolean }>`
  padding: 12px 24px;
  background: transparent;
  color: ${({ $active }) => ($active ? "#fff" : "#9e9e9e")};
  border: none;
  border-bottom: 3px solid
    ${({ $active }) => ($active ? "#55cc44" : "transparent")};
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }
`;
