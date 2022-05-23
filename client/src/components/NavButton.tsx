import {
  // BrowserRouter as Router,
  // useLocation,
  // Route,
  Link
  // useParams
} from 'react-router-dom'
import styled from 'styled-components'

const StyledNavButton = styled.button`
  background-color: green;
  padding: 4px;
  border: 1px solid black;
  width: 45%;
  height: 50px;
  text-decoration: none;
  margin-top: 10px;
`

const NavButton = (props: any) => {
  return (
    <StyledNavButton className="nav-btn">
      <Link to={props.children}>{props.children}</Link>
    </StyledNavButton>
  )
}

export default NavButton