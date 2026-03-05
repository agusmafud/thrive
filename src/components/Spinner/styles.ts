import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.15);
  border-top-color: #55cc44;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 0;
`;
