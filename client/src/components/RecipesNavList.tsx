import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  // Route,
  Link,
  // useParams
} from 'react-router-dom'
import getFetch from '../api/apiFetch'


const NavList = (props: any) => {
  // const [showNavLinks, setShowNavLinks] = useState(false);
  const [navLinks, setNavLinks] = useState<any[]>([]);
  
  const currentLocation = useLocation()
  
  useEffect(() => {
    const Links = async () => {
      if(currentLocation.search != "") {
        const navLinks = await getFetch(currentLocation.pathname + currentLocation.search) 
        setNavLinks(navLinks)
      } else {
      const navLinks = await getFetch(currentLocation.pathname)  
      setNavLinks(navLinks)
      }
      // setNavLinks(navLinks)
    }
    Links()

  }, [])

  // const handleClick = () => {
  //   setShowNavLinks(!showNavLinks);
  //   const recipeLinks = () => {
  //     return (navLinks.map((link: any) => <li key={link._id} >
  //         <Link to={`/${currentLocation.pathname} ${link._id}`}>{link.title}</Link> 
  //       </li> ))
  //   }
  //   console.log(recipeLinks())
  // }

  const getPrintType = () => {

    // if (
    //   // currentLocation.pathname === "/categories" || currentLocation.pathname === "/categories/"
    //   props.category
    //   ) {
    //   return (navLinks.map((link: any) => 
    //     <li key={link} onClick={() => setShowNavLinks(!showNavLinks)}>
    //       <Link to={`/categories/${link}/recipes`}>{link}</Link>
    //     </li>
    //   ))
    // } else if (currentLocation.pathname === "/recipes" || currentLocation.pathname === "/recipes/") 
    // {
        return (navLinks.map((link: any) => <li key={link._id} >
          <Link to={`${currentLocation.pathname}/${link._id}`}>{link.title}</Link> 
        </li> ))
    // } 
  }
  const ListItem: any = getPrintType()
  // console.log("ListItem", ListItem)

  
  return (
    < >
      {ListItem}
      {/* {navLinks.map((link: any) => <li key={link._id} >
          <Link to={`/${currentLocation.pathname} ${link._id}`}>{link.title}</Link> 
        </li> )} */}
      {/* {navLinks.map((link: any) => <li key={link} >
          <Link to={`/${link}`}>{link}</Link> 
        </li> )} */}
    </>
  )
}

export default NavList