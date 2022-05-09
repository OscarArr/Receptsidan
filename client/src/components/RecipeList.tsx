import { useEffect, useState } from "react";

const RecipeList = () => {

  const [recipes, setRecipes] = useState<any>([])

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await fetch('http://localhost:4000/recipes')
        .then((res) => res.json())
        setRecipes(recipes)
    }
    fetchRecipes()
    
  }, [])
  
    

    return (
      <article className="recipe-list">
        <ul>
          {recipes.map((recipe: any) => <li key={recipe._id}>{recipe.title}</li>)}
        </ul>
      </article>
    )

}

export default RecipeList