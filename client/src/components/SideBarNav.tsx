import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import { useEffect, useState } from "react";
import SearchBar from './SearchComponent';
import NavList from './RecipesNavList'
import CategoryNavList from './CategoryNavList'
import RecipeLink from './RecipeLink';
import NavButton from "./NavButton"
import styled from 'styled-components';


const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`

const SideBarNavStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
  max-width: 400px;
  min-width: 300px;
  background-color: #f5f5f5;
  height: 100vh;
`


const SideBarNav = () => {
  const currentLocation = useLocation()
  console.log("SideBarNav")
  // const [showCategories, setShowCategories] = useState(false);
  // const [showRecipes, setShowRecipes] = useState(false);
  
  const [query, setQuery] = useState("");
  
  const chooseRender = () => {
    if (currentLocation.pathname === "/categories" || currentLocation.pathname === "/categories/") {
      return (<CategoryNavList />)
    } else if (currentLocation.pathname.includes("/cagegories") && currentLocation.pathname.includes("/recipes")) {
      return (<RecipeLink />)
    } else if (currentLocation.pathname.includes("/recipes")) {
      return (<NavList />)
    }
  }

  return (
    <SideBarNavStyled className="side-bar">
      <StyledButtonContainer className="nav-buttons">
        <NavButton children="recipes" />
        <NavButton children="categories" />
        <SearchBar location={currentLocation.pathname}/>
      </StyledButtonContainer>
      {chooseRender()}
    </SideBarNavStyled>
  )
}

export default SideBarNav