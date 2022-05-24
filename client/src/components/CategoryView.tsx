import { useState, useEffect } from "react";
import {
  useLocation,
  Link,
  useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'
import PreviewRecipe from "./SmallRecipeCard";
import styled from "styled-components";

const StyledRecipeLink = styled(Link)`
  text-decoration: none;
`

const CategoryView = (props: any) => {
  const [recipes, setRecipes] = useState<any[]>([]);
  
  const currentLocation = useLocation()
  const params = useParams()

  const Links = async () => {
    if(currentLocation.search !== "") {
      const recipes = await getFetch(`categories/${params.category}/recipes${currentLocation.search}`) 
      setRecipes(recipes)
    } else {
    const recipes = await getFetch(`categories/${params.category}/recipes`)  
    setRecipes(recipes)
    }
  }

  useEffect(() => {
    Links()

  }, [])

  
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

export default CategoryView