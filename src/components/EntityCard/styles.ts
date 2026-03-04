import styled from "styled-components";

export const Wrapper = styled.article`
  width: 250px;
  background: #3c3e44;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: 250px;
  position: relative;

  img {
    object-fit: cover;
  }
`;
export const ContentWrapper = styled.div`
  padding: 12px;
  color: #fff;

  h2 {
    margin-bottom: 8px;
    font-size: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
  }
`;
