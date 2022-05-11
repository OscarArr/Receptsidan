import NavButton from "./NavButton"
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
  useParams
} from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="nav-bar">
      {/* <NavButton>
        <Link to="/categories">Categories</Link>
      </NavButton> */}
      <Link to="/categories">Categories</Link>
    </nav>
  )
}

export default NavBar