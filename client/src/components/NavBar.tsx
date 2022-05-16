import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import NavButton from "./NavButton"


const NavBar = () => {
  console.log("NavBar")
  return (
    <nav className="nav-bar">
      <NavButton>
        <Link to="/categories">Categories</Link>
      </NavButton>
      <NavButton>
        <Link to="/recipes">Recipes</Link>
      </NavButton>
    </nav>
  )
}

export default NavBar