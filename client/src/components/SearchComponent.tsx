import { useEffect, useState } from "react";
import {
  useLocation
} from 'react-router-dom'
import styled from 'styled-components'

const SearchBar = (props: any) => {

  // const [query, setQuery] = useState("");
  
  // const handleSubmit = (event: any) => {
  //   // 👇️ prevent page refresh
  //   event.preventDefault();

  //   console.log('form submitted ✅');
  // };

  // onChange={(e) => setQuery((e.target as any).value)}

  const StyledSearch = styled.form`
    display: flex;
    width: 90%;
    margin: auto;
    margin-top: 10px;

  `

  const location = () => {
    if(props.location.includes("/recipes") || props.location === "/"){
      return "recipes"
    } 
    else if (props.location.split("/")[1] === "categories"){
      return "categories"
    }
  }
  

    return (
      <StyledSearch  action={useLocation().pathname} method="get">
        <label htmlFor="header-search">
          search in {location()}
        </label>
        <input 
            type="text"
            id="header-search"
            placeholder="Search Recipes"
            name="search" 
        />
        <button type="submit">Search</button>
      </StyledSearch>
    )
}

export default SearchBar