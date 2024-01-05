import { Menu, Image, Dropdown, DropdownMenu } from "semantic-ui-react";
import {Link, useNavigate} from 'react-router-dom'


type Props ={
    setAuth: (value:boolean) => void;
}

export default function SignedInMenu({setAuth}: Props) {
    const navigate =useNavigate();

    function  handleSignOut(){
        setAuth(false);
        navigate('/');
    }
  return (
    <Menu.Item position='right'>
        <Image avatar spaced='right' src='/user.png'/>
        <Dropdown pointing='top left' text='Muhammad'>
            <DropdownMenu>

            <Dropdown.Item as = {Link} to = 'Create Event' text='Create Event' icon='plus'/>
            <Dropdown.Item text='My profile' icon='user'/>
            <Dropdown.Item onClick={handleSignOut} text='Sign Out' icon='power'/>
            </DropdownMenu>


        </Dropdown>
    </Menu.Item>
  )
}