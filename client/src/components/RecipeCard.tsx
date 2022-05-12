import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'


const RecipeCard = (props: any) => {
  const [navLinks, setNavLinks] = useState<any[]>([]);
  
  const currentLocation = useLocation()

  useEffect(() => {
    const Links = async () => {
      const navLinks = await getFetch(currentLocation.pathname)  
      // console.log("direkt från fetch", getFetch("categories"))
      // console.log("variabeln", navLinks)
      setNavLinks(navLinks)
    }
    Links()

  }, [])
  
  if (currentLocation.pathname.includes("/recipes")) {
      // console.log("recipes")
      return (navLinks.map((link: any) => <li key={link._id} >
      <Link to={`/${currentLocation.pathname} ${link._id}`}>{link.title}</Link> 
      </li> ))
    } 
}

export default RecipeCard