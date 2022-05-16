import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'


const RecipeCard = (props: any) => {
  const [recipeData, setRecipeData] = useState<any[]>([]);
  
  const currentLocation = useLocation()

  useEffect(() => {
    const getRecipeData = async () => {
      const recipeData = await getFetch(currentLocation.pathname)  
      console.log("variabeln", recipeData)
      setRecipeData(recipeData)
    }
    getRecipeData()

  }, [])
  
  return (
    <section className="recipe-card">
      <h1>hej</h1>
    </section>
  )
}

export default RecipeCard