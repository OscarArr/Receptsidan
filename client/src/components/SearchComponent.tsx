// import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate
  // useParams
} from 'react-router-dom'
import styled from 'styled-components'


const StyledSearch = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  margin-top: 10px;
`

const StyledLabel = styled.label`
  width: 100%;
  font-weight: 600;
  color: #016801;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`


const SearchBar = (props: any) => {

  const location = () => {
    if (props.location.split("/")[1] === "categories" && props.location.split("/")[2]) {
      return (`category ${props.location.split("/")[2]}`)
    }
    else if (props.location.split("/")[1] === "categories"){
      return (`your heart for love and gold`)
    }
    else if(props.location.includes("/recipes") || props.location === "/"){
      return "recipes"
    } 
  }

  const addSearchQuery= (targetValue: string) => {
    if (targetValue !== "") {
      console.log(targetValue)
    }
  }
  

    return (
      <StyledSearch method="get">
        <StyledLabel htmlFor="header-search">
          search in {location()}
        </StyledLabel>
        <input 
            onChange={(e) => addSearchQuery(e.target.value)}
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