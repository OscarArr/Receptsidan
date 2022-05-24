import { useEffect, useState } from "react";
import ReactStars from 'react-stars'
import styled from "styled-components";


const StyledRecipeCard = styled.section`
  min-width: 500px;
  max-width: 800px;
  min-height: 600px;
  /* max-height: 900px; */
  background-color: green;
  color: white;
  margin: 20px;
  padding: 20px;
  display: grid;
  grid-template-areas: 
    "StyledTitle StyledTitle StyledTitle"
    "StyledDescription StyledInfo StyledInfo"
    "StyledIngredients StyledPicture StyledPicture"
    "StyledInstructions StyledInstructions StyledInstructions"
  ;
`
const StyledTitle = styled.h1`
  grid-area: StyledTitle;
  font-size: 2rem;
  text-align: center;
  margin: 8px 0 24px 0;
`
  
const StyledPicture = styled.img`
  grid-area: StyledPicture;
  width: 300px;
  /* max-width: 250px; */
  margin: 0 0 10px 0;
  /* padding: 10px; */
`

// const StyledContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* justify-content: space-evenly; */
//   /* width: 100%; */
// `

  const StyledDescription = styled.h4`
    grid-area: StyledDescription;
    align-self: center;
    /* width: 100%; */
    margin: 0 18px 0 0;
    text-align: center;
    padding: 0 12px 12px 12px;
  `

  const StyledInfo = styled.div`
    grid-area: StyledInfo;
    width: 280px;
    border: 1px solid white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 10px 10px 0;
    padding: 10px;
    /* width: 100%; */
    /* max-height: 5rem; */
  `

    const StyledCategories = styled.ul`
      align-self: center;
      list-style: none;
      display: flex;
      /* flex-direction: row; */
      justify-content: space-evenly;
      font-size: 0.8rem;
      width: 100%;
      margin-top: auto;
      padding: 0;
      height: 1rem;
    `

    const StyledInfoChild = styled.p`
      margin: 0;
      padding: 0;
      font-size: 1rem;
      height: 1.2rem;
    `

    const StyledStarRating = styled(ReactStars)`
      /* width: 100%; */
      
    `

const StyledIngredients = styled.ul`
  grid-area: StyledIngredients;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  margin: 0 10px 10px 0;
  padding: 16px 24px 16px 32px;
  text-align: left;
  /* width: 70%; */
`

const StyledInstructions = styled.ol`
  grid-area: StyledInstructions;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 0;
  padding: 16px 18px 16px 32px;
  text-align: left;
  /* width: 100%; */
`


const RecipeCard = (props: any) => {

  const [rating, setRating] = useState(0);
  
  const handleRating = (rate: number) => {
    
    setRating(rate);
  }

  useEffect(() => {


  }, [])

  const recipeData = props.data

  const recipeCardInfo = () => {
    if (recipeData) {
      const data: any = recipeData
      
      return (
        <StyledRecipeCard className="recipe-card">
          <StyledTitle>{data.title}</StyledTitle>
          <StyledDescription>{data.description}</StyledDescription>
          <StyledInfo>
            <StyledInfoChild>{data.timeInMins} minuter</StyledInfoChild>
            <StyledInfoChild>{data.servings} portioner</StyledInfoChild>
            <StyledInfoChild>{data.ingredients.length} portioner</StyledInfoChild>
            <StyledStarRating
              count={5}
              value={Math.round(data.ratings.reduce((acc: any, curr: any) => acc + curr, 0) / data.ratings.length)}
              onChange={handleRating}
              size={32}
              half={false}
              color2={'#ffd700'} />
            {/* <StyledInfoChild>Snittbetyg: {Math.round(data.ratings.reduce((acc: any, curr: any) => acc + curr, 0) / data.ratings.length)}
            </StyledInfoChild> */}
            <StyledCategories>
              {data.category.map((cat: string) => 
                <li key={cat}>{cat}</li>
                )}
            </StyledCategories>
          </StyledInfo>
          <StyledPicture src={`${process.env.REACT_APP_API_BASE_URL}/images/${data.imageUrl}`} alt={data.title} />
          <StyledIngredients className="ingredients">
            {data.ingredients.map((ingredient: any) => 
              <li key={ingredient.ingredient}>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</li>
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