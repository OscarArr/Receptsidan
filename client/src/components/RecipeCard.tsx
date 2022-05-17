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
import image from "../../assets/images/ädelgrytakonjak.jpg";


const RecipeCard = (props: any) => {

  // const [recipeData, setRecipeData] = useState<any[]>([]);
  
  const currentLocation = useLocation()
  const params = useParams()
  // console.log("useParams", useParams())

  useEffect(() => {
    // const fetchUrl = () => {
    //   const links = currentLocation.pathname.split("/")
    //   if (currentLocation.pathname.includes("/categories")) {
    //     links.splice(1, 2)
    //     return links.join("/")
    //   } 
    //   else {
    //     return links.join("/")
    //   }
    // }
    

    // const getRecipeData = async () => {
    //   const recipeData = await getFetch(`/recipes/${params.id}`)  
    //   setRecipeData(recipeData)
    // }
    // getRecipeData()
    // console.log("recipeCard props data", props.data)
    // const recipeData = () => {
    //   if (props.data) {
    //     return props.data
    //   }
    //   else {
    //     return []
    //   }
    // } 
    // console.log("recipeCard data", recipeData)
    // setRecipeData(recipeData)

  }, [])

  // console.log("recipeCard props data", props.data)
  // const newRecipeData = () => {
  //   if (props.data) {
  //     return props.data
  //   }
  //   else {
  //     return []
  //   }
  // } 
  // console.log("recipeCard data", newRecipeData)
  const recipeData = props.data
  // console.log("recipeCard data", recipeData)

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
const StyledTitle = styled.h1`
  grid-area: StyledTitle;

`
  
const StyledPicture = styled.img`
  grid-area: StyledPicture;
  width: 90%;
  margin: 0 auto;
`
const StyledDescription = styled.p`
  grid-area: StyledDescription;
  width: 60%;
  margin: 0 auto;
  text-align: center;
`

const StyledInfo = styled.div`
  grid-area: StyledInfo;
  border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 0;
  padding: 10px 20%;
  /* height: 50%; */
`
  const StyledCategories = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 0.8rem;
    width: 65%;
    margin: 0;
    padding: 0;
    height: 1rem;
  `
  const StyledInfoChild = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    height: 1.2rem;
  `

const StyledIngredients = styled.ul`
  grid-area: StyledIngredients;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 16px 24px 16px 32px;
  text-align: left;
  width: 70%;
`

const StyledInstructions = styled.ol`
  grid-area: StyledInstructions;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 16px 24px 16px 32px;
  text-align: left;
  /* width: 100%; */
`


const recipeCardInfo = () => {
  if (recipeData) {
    const data: any = recipeData
    // console.log(data)
    return (
      <StyledRecipeCard className="recipe-card">
        <StyledTitle>{data.title}</StyledTitle>
        <StyledPicture src={`../assets/images/${data.imageUrl}`} alt={data.title} />
        <StyledDescription>{data.description}</StyledDescription>
        <StyledInfo>
          <StyledInfoChild>{data.timeInMins} minuter</StyledInfoChild>
          <StyledInfoChild>portioner: {data.servings}</StyledInfoChild>
          <StyledInfoChild>Snittbetyg: {Math.round(data.ratings.reduce((acc: any, curr: any) => acc + curr, 0) / data.ratings.length)}
          </StyledInfoChild>
          <StyledCategories>
            {data.category.map((cat: string) => 
              <li>{cat}</li>
            )}
          </StyledCategories>
        </StyledInfo>
        <StyledIngredients className="ingredients">
          {data.ingredients.map((ingredient: any) => 
            <li>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</li>
          )}
        </StyledIngredients>
        <StyledInstructions className="instructions">
          {data.instructions.map((instruction: any) => 
            <li key={instruction.prio}>{instruction.instruction}</li>
          )}
        </StyledInstructions>
      </StyledRecipeCard>
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

export default RecipeCard