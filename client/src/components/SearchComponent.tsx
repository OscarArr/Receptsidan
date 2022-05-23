// import { useEffect, useState } from "react";
import {
  useLocation
  // useParams
} from 'react-router-dom'
import styled from 'styled-components'


const StyledSearch = styled.form`
display: flex;
width: 90%;
margin: auto;
margin-top: 10px;
`

const SearchBar = (props: any) => {

  const location = () => {
    if (props.location.split("/")[1] === "categories"){
      return (`category ${props.location.split("/")[2]}`)
    }
    else if(props.location.includes("/recipes") || props.location === "/"){
      return "recipes"
    } 
    if (props.location.split("/")[1] === "categories"){
      return (`category ${props.location.split("/")[2]}`)
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