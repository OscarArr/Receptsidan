import { useEffect, useState } from "react";

const SearchBar = () => {
    return (
      <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Recipes</span>
        </label>
        <input
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