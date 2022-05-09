import logo from './logo.svg';
import './App.css';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchComponent';

const App = () => {
  return (
    <div className="App">
      {/* <SearchBar /> */}
      <RecipeList />
    </div>
  )
}

export default App;
