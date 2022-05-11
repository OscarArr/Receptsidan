import { useEffect, useState } from "react";

const SearchBar = () => {

  const [query, setQuery] = useState("");
  
  const handleSubmit = (event: any) => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log('form submitted ✅');
  };

  

    return (
      <form  action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Recipes</span>
        </label>
        <input onChange={(e) => setQuery((e.target as any).value)}
            type="text"
            id="header-search"
            placeholder="Search Recipes"
            name="search" 
        />
        <button type="submit">Search</button>
      </form>
    )
}

export default SearchBar