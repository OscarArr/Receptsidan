import { useState, useEffect } from "react";
import {
  // BrowserRouter as Router,
  useLocation,
  Link
  // useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'
import styled from "styled-components";


const StyledRecipeList = styled.ul`
  margin: 0;

  a{
    text-decoration: none;
    color: white;

      &:hover{
        font-weight: 650;
      }
   }
`

const StyledTitle = styled.h4`
  margin: 16px 0 0 16px;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  text-decoration: underline;
`

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
    } else if (currentLocation.pathname === "/") {
      links.join("/")
      return "/recipes"
    } else {
      return links.join("/")
    }
  }

  const Links = async () => {
    if(currentLocation.search !== "") {
      const navLinks = await getFetch(fetchUrl() + currentLocation.search) 
      setNavLinks(navLinks)
    } else {
      const navLinks = await getFetch(fetchUrl())  
      setNavLinks(navLinks)
    }
  }

  useEffect(() => {
    Links()

  }, [currentLocation.pathname])


  const location = () => {
    if (currentLocation.pathname.split("/")[1] === "categories" && currentLocation.pathname.split("/")[2]) {
      return (`Recipes in category ${currentLocation.pathname.split("/")[2]}:`)
    }
    else if(currentLocation.pathname.includes("/recipes") || currentLocation.pathname === "/"){
      return "recipes:"
    } 
  }

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
    <>
      <StyledTitle>{location()}</StyledTitle>
      <StyledRecipeList>
        {ListItem}
      </StyledRecipeList>
    </>
  )
}

export default NavList