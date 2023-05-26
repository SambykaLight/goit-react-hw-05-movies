import styled from '@emotion/styled';

export const ReviewList = styled.ul`
  margin-top: 12px;
`;
export const ReviewItem = styled.li`
  font-size: 14px;
  padding: 6px;
  background-color: rgb(83, 11, 12);
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    color: red;
  }

`;

export const Nothing = styled.h3`
color: white;
`;

export const Author = styled.p`
  color: white;
`;
