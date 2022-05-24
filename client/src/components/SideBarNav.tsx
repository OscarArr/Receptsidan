import {
  useLocation
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
  margin-top: 10px;
`

const SideBarNavStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
  max-width: 400px;
  min-width: 250px;
  background-color: white;
  height: 100vh;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
`


const SideBarNav = () => {
  const currentLocation = useLocation()
  const chooseRender = () => {
    if (currentLocation.pathname === "/categories" || currentLocation.pathname === "/categories/") {
      return (<CategoryNavList />)
    } 
    else if (currentLocation.pathname.includes("/recipes") || currentLocation.pathname === "/") {
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