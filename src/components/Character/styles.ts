import styled from "styled-components";

const STATUS_COLORS: Record<string, string> = {
  Alive: "#55cc44",
  Dead: "#d63d2e",
  unknown: "#9E9E9E",
};

export const Status = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const StatusDot = styled.span<{ $status: string }>`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${({ $status }) => STATUS_COLORS[$status] ?? "#9E9E9E"};
`;
