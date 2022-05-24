import { useEffect} from "react";
import ReactStars from 'react-stars'
import styled from "styled-components";


const StyledRecipeCard = styled.article`
  min-width: 725px;
  max-width: 850px;
  /* min-height: 600px;
  max-height: 800px; */
  background-color: white;
  color: #016801;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-areas: 
    "StyledTitle StyledTitle StyledPicture"
    "StyledDescription StyledDescription StyledPicture"
    "StyledInfo StyledInfo StyledPicture"
  ;
`
const StyledTitle = styled.h2`
  grid-area: StyledTitle;
  text-align: center;
  /* font-size: 2rem; */
`
  
const StyledPicture = styled.img`
  grid-area: StyledPicture;
  height: 300px;
  margin: 0 0 10px 0;
`

const StyledDescription = styled.h4`
  grid-area: StyledDescription;
  align-self: center;
  /* width: 100%; */
  margin: 0 18px 0 0;
  text-align: center;
`

const StyledInfo = styled.div`
  grid-area: StyledInfo;
  /* align-self: flex-end; */
  border: 1px solid #016801;
  display: flex;
  justify-content: space-evenly;
  margin: auto 10px 10px 0;
  padding: 10px 0;
  /* width: 100%; */
  max-height: 5rem;
`

  const StyledInfoChild = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    height: 1.2rem;
  `

  const StyledStarRating = styled(ReactStars)`
    

  `


const PreviewRecipe = (props: any) => {

  useEffect(() => {


  }, [])


  const recipeData = props.recipe

  const recipeCardInfo = () => {
    if (recipeData) {
      const data: any = recipeData
      // console.log(data)
      return (
        <StyledRecipeCard className="recipe-card">
          <StyledTitle>{data.title}</StyledTitle>
            <StyledDescription>{data.description}</StyledDescription>
            <StyledInfo>
              <StyledInfoChild>{data.timeInMins} minuter</StyledInfoChild>
              <StyledInfoChild>portioner: {data.servings}</StyledInfoChild>
              <StyledStarRating
                count={5}
                value={Math.round(data.ratings.reduce((acc: any, curr: any) => acc + curr, 0) / data.ratings.length)}
                size={12}
                half={false}
                color2={'#ffd700'} />
              <StyledInfoChild>Antal ingredienser: {data.ingredients.length}</StyledInfoChild>
            </StyledInfo>
          <StyledPicture src={`${process.env.REACT_APP_API_BASE_URL}/images/${data.imageUrl}`} alt={data.title} />
        </StyledRecipeCard>
      )
    }
    else {
      return (
        <h1>Loading...</h1>
      )
    }
  }

  
  return (
    <>
      {recipeCardInfo()}
    </>
  )
}

export default PreviewRecipe