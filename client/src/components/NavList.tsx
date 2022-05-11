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
  
  // const currentLocation = useLocation()
  // console.log(currentLocation)
  
  useEffect(() => {
    const [navLinks, setNavLinks] = useState<any[]>([]);
    const Links = () => {
      const NavLinks: any = getFetch("categories")  
      console.log(getFetch("categories"))
      
      setNavLinks(NavLinks)
    }
    Links()
  }, [])

  return (
    <ul className="nav-bar">
      
      NavLinks.map((Link: any) => {
          <li key={Link.id}>{Link.title}</li>
      }
      )
    </ul>
  )
}

export default NavList