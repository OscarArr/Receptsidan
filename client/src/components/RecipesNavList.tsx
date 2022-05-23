import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  // Route,
  Link,
  useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'


const NavList = (props: any) => {
  // const [showNavLinks, setShowNavLinks] = useState(false);
  const [navLinks, setNavLinks] = useState<any[]>([]);
  
  const currentLocation = useLocation()
  
  // console.log("navList location recipeID", currentLocation.pathname)
  // console.log("navList location split", currentLocation.pathname.split("/"))

  const fetchUrl = () => {
    const links = currentLocation.pathname.split("/")
    if (currentLocation.pathname.includes("/categories")) {
      links.splice(4, 1)
      return links.join("/")
    } else if (links.length === 3 && links[1] === "recipes") {
      links.splice(2, 1)
      return links.join("/")
    } else {
      return links.join("/")
    }
  }
  

  useEffect(() => {
    const Links = async () => {
      if(currentLocation.search != "") {
        const navLinks = await getFetch(fetchUrl() + currentLocation.search) 
        setNavLinks(navLinks)
      } else {
      const navLinks = await getFetch(fetchUrl())  
      setNavLinks(navLinks)
      }
      // setNavLinks(navLinks)
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
    const location = currentLocation.pathname.split("/")
    // console.log("location", location)
    if (location[1] === "categories" ) {
      return (navLinks.map((link: any) => <li key={link._id} >
      <Link to={`categories/${location[2]}/recipes/${link._id}`}>{link.title}</Link> 
      </li> ))
    } else if (location[1] === "recipes") 
    {
      return (navLinks.map((link: any) => <li key={link._id} >
        <Link to={`recipes/${link._id}`}>{link.title}</Link> 
      </li> ))
    } 
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