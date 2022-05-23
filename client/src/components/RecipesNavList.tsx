import { useState, useEffect } from "react";
import {
  // BrowserRouter as Router,
  useLocation,
  Link,
  // useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'


const NavList = (props: any) => {

  const [navLinks, setNavLinks] = useState<any[]>([]);
  
  const currentLocation = useLocation()


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
      if(currentLocation.search !== "") {
        const navLinks = await getFetch(fetchUrl() + currentLocation.search) 
        setNavLinks(navLinks)
      } else {
      const navLinks = await getFetch(fetchUrl())  
      setNavLinks(navLinks)
      }
    }
    Links()

  }, [currentLocation.search])



  const getPrintType = () => {
    const location = currentLocation.pathname.split("/")
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


  
  return (
    < >
      {ListItem}
    </>
  )
}

export default NavList