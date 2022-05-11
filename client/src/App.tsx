import './App.css';
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
      {/* <SideBarNav /> */}
      {/* <NavBar /> */}
      {/* <SearchBar /> */}
    </div>
  )
}

export default App;
