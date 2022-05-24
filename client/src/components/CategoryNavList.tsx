import {
  useLocation,
  Link
} from 'react-router-dom'
import { useEffect, useState } from "react";
import getFetch from '../api/apiFetch'
import styled from 'styled-components';


const StyledCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
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


const CategoryNavList = (props: any) => {
  const [navLinks, setNavLinks] = useState<any[]>([]);
  
  const currentLocation = useLocation()
  
  useEffect(() => {
    const Links = async () => {
      const navLinks = await getFetch(currentLocation.pathname)  
      setNavLinks(navLinks)
    }
    Links()

  }, [currentLocation.pathname])

  const getCategories = () => {
    if (currentLocation.pathname === "/categories" || currentLocation.pathname === "/categories/") {
      return (navLinks.map((link: any) => 
        <li key={link.name} >
          <Link to={`/categories/${link.name}/recipes`}>
            {link.name} ({link.count}) 
          </Link>
        </li>
      ))
    }
  }
    
  return (
    <>
      <StyledTitle>Categories:</StyledTitle>
      <StyledCategoryList className="category-link">
        {getCategories()}
      </StyledCategoryList>
    </>
  )
  
}

export default CategoryNavList