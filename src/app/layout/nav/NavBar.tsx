import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SignedOutButton from "./SignedOutButton";
import SignedInMenu from "./SignedInMenu";
// import { useState } from "react";
import { useAppSelector } from "../../store/store";

export default function NavBar() {
  // const [auth, setAuth  ] = useState(false)
  const {authenticated} = useAppSelector(state=>state.auth)

  return (
<Menu inverted={true} fixed='top'>
    <Container>

    <MenuItem header as ={NavLink} to ='/'>
        <img src="/logo.png" alt ="logo"/>
        Re-vents
    </MenuItem>
    <MenuItem name ='Events' as ={NavLink} to='/events'/>
    <MenuItem name ='Scratch' as ={NavLink} to='/scratch'/>
    <MenuItem>
        <Button 
        as = {NavLink}
        to='/createEvent'
        floated='right'
         positive={true} 
         inverted={true} 
         content='Create event'/>
    </MenuItem>
    {/* {auth ? <SignedInMenu setAuth={setAuth}/> : <SignedOutButton setAuth={setAuth}/>} */}
    {authenticated ? <SignedInMenu /> : <SignedOutButton/>}
    
    </Container>

</Menu>
  )
}