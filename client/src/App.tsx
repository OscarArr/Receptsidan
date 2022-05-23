import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SideBarNav from './components/SideBarNav';
import styled from 'styled-components';
import RecipeView from './components/RecipeView';


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
        <Route path="/recipes/:id" element={<RecipeView />} >
          {/* <RecipeCard /> */}
        </Route>
        <Route path="categories/:category/recipes/:id" element={<RecipeView />}>
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
