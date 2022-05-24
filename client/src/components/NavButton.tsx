import {
  // BrowserRouter as Router,
  // useLocation,
  // Route,
  Link
  // useParams
} from 'react-router-dom'
import styled from 'styled-components'

const StyledNavButton = styled.button`
  background-color: #016801;
  padding: 4px;
  border: 1px solid black;
  width: 45%;
  height: 50px;
  text-decoration: none;
  margin-top: 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);

    &:hover {
      transform: scale(1.05, 1.05);
    }

    a{
      text-decoration: none;
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
    }
`

const NavButton = (props: any) => {
  return (
    <StyledNavButton className="nav-btn">
      <Link to={props.children}>{props.children}</Link>
    </StyledNavButton>
  )
}

export default NavButton