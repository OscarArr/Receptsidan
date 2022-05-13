import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import { useEffect, useState } from "react";
import getFetch from '../api/apiFetch'

const RecipeLink = (props: any) => {
// console.log("prop",props)
const [recipeLinks, setRecipeLinks] = useState<any[]>([]);

  useEffect(() => {
    const Links = async () => {
      const recipeLinks = await getFetch(`categories/${props.category}/recipes`)
      setRecipeLinks(recipeLinks)
    }
    Links()
  }, [])
    
  return (
    <Link to={`/recipes/${recipeLinks[0]._id}`}>{recipeLinks[0].title}</Link>
  )
  
}

export default RecipeLink