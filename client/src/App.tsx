import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import SideBarNav from './components/SideBarNav';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchComponent';
import NavList from './components/RecipesNavList'
import CategoryNavList from './components/CategoryNavList'



const App = () => {
  return (
    <div className="App">
      {/* <RecipeList /> */}
      {/* <NavList /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/recipes" element={<NavList />} />
          <Route path="/categories" element={<CategoryNavList />} />
          <Route path="/categories/:category/recipes" element={<CategoryNavList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
