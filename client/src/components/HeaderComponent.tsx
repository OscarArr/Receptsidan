import {
  Link
} from 'react-router-dom'

import styled from 'styled-components';


// const StyledHomeLink = styled.div`
// grid-area: HeaderComponent;
//   display: flex;
//   justify-content: space-around;
//   width: 100%;
//   flex-wrap: wrap;
// `

const StyledHeader = styled.div`
  grid-area: HeaderComponent;
  display: flex;
  width: 100vw;
  height: 80px;
  background-color: white;
  margin: 0;
  align-items: center;
  padding: 0;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);

    a {
      text-decoration: none;
      color: #016801;
      font-size: 4rem;
      font-family: 'Dancing Script', cursive;
      margin-left: 1rem;
    }
`


const HeaderComponent = () => {
  
  return (
    <StyledHeader className="header">
      <Link to="/">
        Yvonnes mål
      </Link>
    </StyledHeader>
  )
}

export default HeaderComponent