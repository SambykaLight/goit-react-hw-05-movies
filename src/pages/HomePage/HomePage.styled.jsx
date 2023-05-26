import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

export const MovieUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieLi = styled.li`
  color: red;
  font-size: 35px;
  text-decoration: none;
  background-color: rgb(83, 11, 12);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const StyledActiveLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
`;

export const ImgPic = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
