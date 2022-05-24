import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SideBarNav from './components/SideBarNav';
import styled from 'styled-components';
import RecipeView from './components/RecipeView';
import RecipeList from './components/RecipeListview';
import CategoryView from './components/CategoryView';


const StyledApp = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "SideBarNavStyled StyledRecipeCard StyledRecipeCard StyledRecipeCard"
    "SideBarNavStyled StyledRecipeCard StyledRecipeCard StyledRecipeCard"
    "SideBarNavStyled StyledRecipeCard StyledRecipeCard StyledRecipeCard";
`

const App = () => {
  return (
    <StyledApp className="App">
      <BrowserRouter>
      <SideBarNav />
      <Routes>
        <Route path="/" element={<RecipeList />} >
        </Route>
        <Route path="/recipes" element={<RecipeList />} >
        </Route>
        <Route path="/recipes/:id" element={<RecipeView />} >
        </Route>
        <Route path="categories/:category/recipes" element={<CategoryView />} >
        </Route>
        <Route path="categories/:category/recipes/:id" element={<RecipeView />}>
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
