import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'
import styled from "styled-components";
import RecipeCard from './RecipeCard'


const RecipeView = (props: any) => {

  const [recipeData, setRecipeData] = useState<any[]>([]);
  
  const currentLocation = useLocation()
  const params = useParams()

  useEffect(() => {

    const getRecipeData = async () => {
      const recipe = await getFetch(`/recipes/${params.id}`)  
      setRecipeData(recipe)
    }
    getRecipeData()
  }, [])

const StyledRecipeCard = styled.section`
  min-width: 400px;
  min-height: 600px;
  max-height: 800px;
  background-color: green;
  color: white;
  margin: 20px;
  padding: 20px;
  display: grid;
  grid-template-areas: 
    "StyledTitle StyledTitle StyledTitle"
    "StyledPicture StyledPicture StyledPicture"
    "StyledDescription StyledDescription StyledDescription"
    "StyledInfo StyledInfo StyledInfo"
    "StyledIngredients StyledInstructions StyledInstructions"
    "StyledIngredients StyledInstructions StyledInstructions"
  ;
`
const StyledComments = styled.div`
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

const StyledSingleComment = styled.div`
  margin: 0;
  display: flex;
  max-width: 80%;
  /* justify-content: flex-start;
  align-items: flex-start; */
`

const StyledH4 = styled.h4`
  margin: 4px;
  padding: 0 4px;
  text-align: left;
`
  
const StyledP = styled.p`
  margin: 4px;
  padding: 0 4px;
  text-align: left;
`

  
const commentRender = () => {
  if (recipeData.length > 0) {
    const data: any = recipeData[0]
    console.log("commentData", data.comments)
    return (
      <StyledComments className="recipe-comment">
        <h2>Comments</h2>
        {data.comments.map((comment: any) => 
          <StyledSingleComment key={comment.id}>
            <StyledH4>{comment.name}:</StyledH4>
            <StyledP>{comment.comment}</StyledP>
          </StyledSingleComment>
        )}
      </StyledComments>
    )
  }
  else {
    return (
      <h1>Loading...</h1>
    )
  }
}

const recipeCardInfo = () => {
  if (recipeData.length > 0) {
    const data: any = recipeData[0]
    return (
      <section className="main-content">
        <RecipeCard data={data} />
        {commentRender()}
        </section>
    )
  }
  else {
    return (
      <h1>Loading...</h1>
    )
  }
}

// const recipe = recipeData[0]
// console.log("recipe", recipeData[0])
  
  return (
    <>
      {recipeCardInfo()}
    </>
  )
}

export default RecipeView