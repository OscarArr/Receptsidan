// import React from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import { useEffect, useState } from "react";

// function useQuery() {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

const SideBarNav = () => {
  const currentLocation = useLocation()
  // const query1 = useQuery()

  console.log(currentLocation)
  // console.log(query1)
  console.log(window.location)
  console.log(window.location.href)
  
  const [query, setQuery] = useState("");
  
  const handleSubmit = (event: any) => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log('form submitted ✅');
  };

    return (
      <div className="side-bar">
        <form  action="/" method="get">
          {/* <label htmlFor="header-search">
              <span className="visually-hidden">Search Recipes</span>
          </label> */}
          <input onChange={(e) => setQuery((e.target as any).value)}
              type="text"
              id="header-search"
              placeholder="Search Recipes"
              name="search" 
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
}

export default SideBarNav