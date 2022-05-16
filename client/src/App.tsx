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


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBarNav />
        <Routes>
          <Route path="/recipes/:id" >
            {/* <RecipeCard /> */}
          </Route>
          <Route path="categories/:category/recipes/:id" >
            {/* <RecipeCard /> */}
          </Route>
          {/* <Route path="/recipes" element={<SideBarNav />} />
          <Route path="/categories" element={<SideBarNav />} /> */}
          {/* <Route path="/categories/:category/recipes" element={<RecipeLink />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
