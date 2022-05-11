import './App.css';
import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import SideBarNav from './components/SideBarNav';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchComponent';
import NavList from './components/NavList'

const App = () => {
  return (
    <div className="App">
      <RecipeList />
      <NavList />
      {/* <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes> */}
    </div>
  )
}

export default App;
