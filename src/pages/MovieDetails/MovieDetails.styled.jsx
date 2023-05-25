import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieBox = styled.div`
  width: 100%;
  height: 400px;
  margin: 10px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
`;

export const MovieDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.h2`
  color: white;
  padding-left: 30px;
`;

export const Details = styled.h3`
  color: white;
  padding-left: 30px;
`;

export const Owervies = styled.p`
  color: white;
  padding-left: 20px;
`;

export const GenerList = styled.ul`
  color: white;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const GenerItems = styled.li`
  padding: 10px;
`;

export const UnderList = styled.ul`
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const StyledActiveLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 25px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid red;
  background-color: #1c1c1c;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #1c1c1c;
    color: #fff;
  }
`;
