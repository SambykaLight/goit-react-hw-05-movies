import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-left: 30px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  border: 2px solid grey;
`;

export const Input = styled.input`
  padding-left: 10px;
  padding-right: 4px;
  font-size: 30px;
  border: none;
  outline: none;
  width: 100%;
  height: 50px;
  border-radius: 4px;

  &::placeholder {
    font: inherit;
    font-size: 25px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  height: 50px;
  width: 100px;
  background: darkred;
  color: white;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const ListFilms = styled.ul`
  margin-top: 12px;
  width: 600px;
`;
export const StyledActiveLink = styled(Link)`
  font-weight: 400;
  font-size: 25px;

  background-color: rgb(83, 11, 12);
  border-radius: 14px;
  color: white;

  text-decoration: none;
  :not(:last-child) {
    margin-bottom: 6px;
  }

  &:hover,
  &:focus {
    background-color: white;
    color: #111111;
  }

  & {
    display: block;
    padding: 16px 16px;
  }
`;
