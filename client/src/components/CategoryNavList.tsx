import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import { useEffect, useState } from "react";
import getFetch from '../api/apiFetch'
import NavList from './RecipesNavList'
import RecipeLink from './RecipeLink'

const CategoryNavList = (props: any) => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [navLinks, setNavLinks] = useState<any[]>([]);
  
  const currentLocation = useLocation()
  
  useEffect(() => {
    const Links = async () => {
      const navLinks = await getFetch(currentLocation.pathname)  
      setNavLinks(navLinks)
    }
    Links()

  }, [])

  // const getRecipesByCategory = async () => {
  //   const recipeLinks = await getFetch(currentLocation.pathname + "/recipes")
  //   setShowNavLinks(!showNavLinks);

  // } 

  // onClick={() => getRecipesByCategory()}
  // showNavLinks && 

  const getCategories = () => {
    if (currentLocation.pathname === "/categories" || currentLocation.pathname === "/categories/") {
      return (navLinks.map((link: any) => 
        <li key={link} >
          <Link to={`/categories/${link}/recipes`}>
            {link} ▼
          </Link>
          {showNavLinks && <RecipeLink category={link} />} 
        </li>
      ))
    }


  }

  // const getPrintType = () => {
  //   if (currentLocation.pathname === "/categories" || currentLocation.pathname === "/categories/") {
  //     return (navLinks.map((link: any) => 
  //       <li key={link} onClick={() => setShowNavLinks(!showNavLinks)}>
  //         <Link to={`/categories/${link}/recipes`}>{link}</Link>
  //       </li>
  //     ))
  //   } else if (currentLocation.pathname.includes("/recipes")) {
  //       return (navLinks.map((link: any) => <li key={link._id} >
  //         <Link to={`/${currentLocation.pathname} ${link._id}`}>{link.title}</Link> 
  //       </li> ))
  //   } 
  // }
  // const categoryNavLink: any = getPrintType()
    
  return (
    <ul className="category-link">
      {getCategories()}
    </ul>
  )
  
}

export default CategoryNavList