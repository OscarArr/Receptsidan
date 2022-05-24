import {
  // BrowserRouter as Router,
  // useLocation
  // Route,
  Link
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
  background-color: green;
  height: 100vh;
`


const HeaderComponent = () => {
  
  return (
    <div className="header">
      <Link to="/">
        
      </Link>
    </div>
  )
}

export default HeaderComponent