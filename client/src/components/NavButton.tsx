import styled from 'styled-components'

const StyledNavButton = styled.button`
  background-color: green;
  padding: 4px;
  border: 1px solid black;
  width: 100px;
  height: 50px;
`

const NavButton = (props: any) => {
  return (
    <li className="nav-btn"></li>
  )
}

export default NavButton