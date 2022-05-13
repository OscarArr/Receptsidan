import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  // Route,
  Link,
  // useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'


const NavList = (props: any) => {
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

  // const handleClick = () => {
  //   setShowNavLinks(!showNavLinks);
  //   const recipeLinks = () => {
  //     return (navLinks.map((link: any) => <li key={link._id} >
  //         <Link to={`/${currentLocation.pathname} ${link._id}`}>{link.title}</Link> 
  //       </li> ))
  //   }
  //   console.log(recipeLinks())
  // }

  const getPrintType = () => {
    // if (
    //   // currentLocation.pathname === "/categories" || currentLocation.pathname === "/categories/"
    //   props.category
    //   ) {
    //   return (navLinks.map((link: any) => 
    //     <li key={link} onClick={() => setShowNavLinks(!showNavLinks)}>
    //       <Link to={`/categories/${link}/recipes`}>{link}</Link>
    //     </li>
    //   ))
    // } else if (currentLocation.pathname === "/recipes" || currentLocation.pathname === "/recipes/") 
    // {
        return (navLinks.map((link: any) => <li key={link._id} >
          <Link to={`/${currentLocation.pathname} ${link._id}`}>{link.title}</Link> 
        </li> ))
    // } 
  }
  const ListItem: any = getPrintType()
  // console.log("ListItem", ListItem)

  
  return (
    < >
      {ListItem}
      {/* {navLinks.map((link: any) => <li key={link._id} >
          <Link to={`/${currentLocation.pathname} ${link._id}`}>{link.title}</Link> 
        </li> )} */}
      {/* {navLinks.map((link: any) => <li key={link} >
          <Link to={`/${link}`}>{link}</Link> 
        </li> )} */}
    </>
  )
}

export default NavList