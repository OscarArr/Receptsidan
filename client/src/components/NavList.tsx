import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'


const NavList = () => {
  // const [showNavLinks, setShowNavLinks] = useState(false);
  const [navLinks, setNavLinks] = useState<any[]>([]);
  
  // const currentLocation = useLocation()
  // console.log(currentLocation)
  
  useEffect(() => {
    const Links = async () => {
      const NavLinks = await getFetch("categories")  
      // console.log("direkt från fetch", getFetch("categories"))
      // console.log("variabeln", NavLinks)
      setNavLinks(NavLinks)
    }
    Links()


  }, [])

const ListItem = NavLinks.map((link: any) => {
  <li>
    <Link to={`/categories/${link}`}>{link}</Link>
  </li>
  }
)

  return (
    <ul className="nav-bar">
      {ListItem}
    </ul>
  )
}

export default NavList