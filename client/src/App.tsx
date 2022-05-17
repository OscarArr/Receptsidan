import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import SideBarNav from './components/SideBarNav';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchComponent';
import NavList from './components/RecipesNavList'
import CategoryNavList from './components/CategoryNavList'
import RecipeLink from './components/RecipeLink';
import RecipeCard from './components/RecipeCard';
import styled from 'styled-components';


const StyledApp = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "SideBarNavStyled StyledRecipeCard StyledRecipeCard"
    "SideBarNavStyled StyledRecipeCard StyledRecipeCard"
    "SideBarNavStyled StyledRecipeCard StyledRecipeCard";
`

const App = () => {
  return (
    <StyledApp className="App">
      <BrowserRouter>
      <SideBarNav />
      <Routes>
        <Route path="/recipes/:id" element={<RecipeCard />} >
          {/* <RecipeCard /> */}
        </Route>
        <Route path="categories/:category/recipes/:id" element={<RecipeCard />}>
          {/* <RecipeCard /> */}
        </Route>
        {/* <Route path="/recipes" element={<SideBarNav />} />
        <Route path="/categories" element={<SideBarNav />} /> */}
        {/* <Route path="/categories/:category/recipes" element={<RecipeLink />} /> */}
      </Routes>
      </BrowserRouter>
    </StyledApp>
  )
}

export default App;
