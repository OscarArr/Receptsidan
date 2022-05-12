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
      const navLinks = await getFetch("categories")  
      // console.log("direkt från fetch", getFetch("categories"))
      // console.log("variabeln", NavLinks)
      setNavLinks(navLinks)
    }
    Links()
    console.log(Links())
    console.log("NavLinks",navLinks)

  }, [])

// const ListItem = NavLinks.map((link: any) => {
//   <li>
//     <Link to={`/categories/${link}`}>{link}</Link>
//   </li>
//   }
// )

  return (
    <ul className="nav-bar">
      {/* {ListItem} */}
      {navLinks.map((link: any) => <li key={link} >
          {/* <Link to={link}>{link}</Link>  */}
          {link}
        </li> )}
    </ul>
  )
}

export default NavList