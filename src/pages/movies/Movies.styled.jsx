import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 30px;
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
