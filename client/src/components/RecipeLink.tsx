import {
  BrowserRouter as Router,
  useLocation,
  Link
} from 'react-router-dom'
import { useEffect, useState } from "react";
import getFetch from '../api/apiFetch'

const RecipeLink = () => {
const [recipeLinks, setRecipeLinks] = useState<any[]>([]);
const currentLocation = useLocation()

console.log("recipeLink")

  useEffect(() => {
    const Links = async () => {
      const recipeLinks = await getFetch(currentLocation.pathname)
      setRecipeLinks(recipeLinks)
      console.log(currentLocation)
    }
    Links()
  }, [])

  const getRecipesByCategory = () => {
    return (
      recipeLinks.map((link: any) => 
        <li key={link._id} >
          <Link to={`/recipes/${link._id}`}>{link.title}</Link>
        </li>
      )
    )
  }

  const category = currentLocation.pathname.split("/")[2]

  return (
    <div>
      <h3>{category}</h3>
      <ul>
        {getRecipesByCategory()}
      </ul>   
    </div>
  )
  
}

export default RecipeLink