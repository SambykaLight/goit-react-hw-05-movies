import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
background: black;
justify-content: center;
width: 100%;
height: 80px;
color: white;
padding:0;
margin: 0;
display: flex;
border: 2px solid red;
`;

export const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;

`;

export const Ul = styled.ul`
display: flex;
list-style-type: none;
gap: 30px;
padding-right: 60px;
`;

export const StyledActiveLink = styled(NavLink)`
  color: red;
  font-weight: bold;
  font-size: 25px;
  text-decoration: none;
`;


