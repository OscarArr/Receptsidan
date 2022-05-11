// import { useEffect, useState } from "react";

// const RecipeList = () => {

//   const [recipes, setRecipes] = useState<any>([])

//   useEffect(() => {
//     const fetchRecipes = async () => {
      
//       const recipes = await fetch('http://localhost:4000/recipes')
//         .then((res) => res.json())
//         setRecipes(recipes)
//     }
//     fetchRecipes()
    
//   }, [])
  
    

//     return (
//       <article className="recipe-list">
//         <ul>
//           {recipes.map((recipe: any) => <li key={recipe._id}>{recipe.title}</li>)}
//         </ul>
//       </article>
//     )

// }

// export default RecipeList

import { useState, useEffect } from "react";

const RecipeList = () => {    
    const [query, setQuery] = useState("");
    const searchRecipes = async (query: string) => {
        // console.log("hej", query)
        const recipes = await fetch(`http://localhost:4000/recipes?search=${query}`)
        .then(res => res.json())
        setRecipes(recipes);
    }

    const [recipes, setRecipes] = useState<any>([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            const recipes = await fetch('http://localhost:4000/recipes')
            .then(res => res.json())
        setRecipes(recipes);
    }
    // console.log(query)
    if(query){
        searchRecipes(query)
    }else{
        fetchRecipes();
    }
    }, [query])

    return (
        <div className="recipe-list">
            <form>
                <input type="text" placeholder="Sök efter recept"  onChange={(e) => setQuery((e.target as any).value)}/>
                <button type="submit">Sök</button>
            </form>
            {recipes.map((recipe: any) => <li key={recipe._id} >{recipe.title}</li> )}

        </div>
    )
    }
export default RecipeList;