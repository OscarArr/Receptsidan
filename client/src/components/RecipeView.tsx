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
      const recipeData = await getFetch(`/recipes/${params.id}`)  
      setRecipeData(recipeData)
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
const StyledSingleComment = styled.div`
  margin: 0 10px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const StyledComments = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const StyledH4 = styled.h4`
  padding: 0 4px;
`
  
const StyledP = styled.p`
  padding: 0 4px;
`

  
const commentRender = () => {
  if (recipeData.length > 0) {
    const data: any = recipeData[0]
    console.log("commentData", data.comments)
    return (
      <StyledComments className="recipe-comment">
        <h2>Comments</h2>
        {data.comments.map((comment: any) => 
          <StyledSingleComment>
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