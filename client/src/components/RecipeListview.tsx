import { useState, useEffect } from "react";
import {
  useLocation
} from 'react-router-dom'
import getFetch from '../api/apiFetch'
import PreviewRecipe from "./SmallRecipeCard";


const RecipeList = (props: any) => {
  const [recipes, setRecipes] = useState<any[]>([]);
  
  const currentLocation = useLocation()

  const Links = async () => {
    if(currentLocation.search !== "") {
      const recipes = await getFetch("/recipes" + currentLocation.search) 
      setRecipes(recipes)
    } else {
    const recipes = await getFetch("/recipes")  
    setRecipes(recipes)
    }
  }

  useEffect(() => {
    Links()

  }, [currentLocation.pathname])

  
  return (
    <>
      <div className="recipe-preview">
        {recipes.map((recipe: any) => <div key={recipe._id} >
          <PreviewRecipe recipe={recipe} />
      </div> )}
      </div>
    </>
  )
}

export default RecipeList