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
  text-decoration: none;
  margin: 0;
`

const StyledTitle = styled.h4`
  margin: 16px 0 0 16px;
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