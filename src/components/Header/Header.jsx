import { Nav, Div, Ul,StyledActiveLink } from './Header.styled.jsx';


export function Header() {
  return (
    <Nav>
      <Div>
        <Ul>
          <li>
            <StyledActiveLink  to="/">Home </StyledActiveLink>
          </li>
          <li>
            <StyledActiveLink to="/movies"> Movies</StyledActiveLink>
          </li>
        </Ul>
      </Div>
    </Nav>
  );
}
