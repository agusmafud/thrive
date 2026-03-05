import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 64px 24px;
  color: #fff;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const Message = styled.p`
  color: #9e9e9e;
  font-size: 14px;
`;

export const RetryButton = styled.button`
  padding: 10px 24px;
  background: #55cc44;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;
