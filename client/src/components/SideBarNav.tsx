import {
  // BrowserRouter as Router,
  useLocation
  // Route,
  // Link,
  // useParams
} from 'react-router-dom'
import SearchBar from './SearchComponent';
import NavList from './RecipesNavList'
import CategoryNavList from './CategoryNavList'
import NavButton from "./NavButton"
import styled from 'styled-components';


const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`

const SideBarNavStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
  max-width: 400px;
  min-width: 250px;
  background-color: #f5f5f5;
  height: 100vh;
`


const SideBarNav = () => {
  const currentLocation = useLocation()
  const chooseRender = () => {
    if (currentLocation.pathname === "/categories" || currentLocation.pathname === "/categories/") {
      return (<CategoryNavList />)
    } 
    else if (currentLocation.pathname.includes("/recipes")) {
      return (<NavList />)
    }
  }

  return (
    <SideBarNavStyled className="side-bar">
      <StyledButtonContainer className="nav-buttons">
        <NavButton children="recipes" />
        <NavButton children="categories" />
        <SearchBar location={currentLocation.pathname}/>
      </StyledButtonContainer>
      {chooseRender()}
    </SideBarNavStyled>
  )
}

export default SideBarNav