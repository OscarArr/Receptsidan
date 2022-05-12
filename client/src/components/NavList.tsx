import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'


// If currentLocation === "/recipes" {
//   sätt så att det skriver ut från objekt }
// else if (currentLocation === "/categories") {
//   sätt så att det skriver ut från sträng}
// }


const NavList = () => {
  // const [showNavLinks, setShowNavLinks] = useState(false);
  const [navLinks, setNavLinks] = useState<any[]>([]);
  
  const currentLocation = useLocation()
  // console.log("currentLocation", currentLocation.pathname)
  
  useEffect(() => {
    const Links = async () => {
      const navLinks = await getFetch(currentLocation.pathname)  
      // console.log("direkt från fetch", getFetch("categories"))
      // console.log("variabeln", navLinks)
      setNavLinks(navLinks)
    }
    Links()

  }, [])

  // const ListItem = navLinks.map((link: any) => {
  //   <li>
  //     <Link to={`/categories/${link}`}>{link}</Link>
  //   </li>
  //   }
  // )
  // console.log("listItem", ListItem)
  const getPrintType = () => {
    if (currentLocation.pathname === "/categories" || currentLocation.pathname === "/categories/") {
      // console.log("categories")
      return (navLinks.map((link: any) => 
        <li key={link}>
          <Link to={`/categories/${link}/recipes`}>{link}</Link>
        </li>
      ))
    } else if (currentLocation.pathname.includes("/recipes")) {
      // console.log("recipes")
      return (navLinks.map((link: any) => <li key={link._id} >
      <Link to={`/${currentLocation.pathname} ${link._id}`}>{link.title}</Link> 
      </li> ))
    } 
  }
  const ListItem: any = getPrintType()
  // console.log("ListItem", ListItem)

  
  return (
    <ul className="nav-bar">
      {ListItem}
      {/* {navLinks.map((link: any) => <li key={link._id} >
          <Link to={`/${currentLocation.pathname} ${link._id}`}>{link.title}</Link> 
        </li> )} */}
      {/* {navLinks.map((link: any) => <li key={link} >
          <Link to={`/${link}`}>{link}</Link> 
        </li> )} */}
    </ul>
  )
}

export default NavList