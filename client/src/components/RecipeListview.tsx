import { useState, useEffect } from "react";
import {
  useLocation,
  Link
} from 'react-router-dom'
import getFetch from '../api/apiFetch'
import PreviewRecipe from "./SmallRecipeCard";
import styled from "styled-components";

const StyledRecipeLink = styled(Link)`
  text-decoration: none;
`

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
        {recipes.map((recipe: any) => <StyledRecipeLink to={recipe._id} key={recipe._id} >
          <PreviewRecipe recipe={recipe} />
      </StyledRecipeLink> )}
      </div>
    </>
  )
}

export default RecipeList