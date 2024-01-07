import { Menu, Image, Dropdown, DropdownMenu } from "semantic-ui-react";
import {Link, useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../store/store";
import {  signOut } from "../../../features/auth/authSlice";


// type Props ={
//     setAuth: (value:boolean) => void;
// }

// export default function SignedInMenu({setAuth}: Props) {
export default function SignedInMenu() {
    const {currentUser} = useAppSelector(state=>state.auth)
    const dispatch = useAppDispatch();
    const navigate =useNavigate();

    function  handleSignOut(){
        // setAuth(false);
        // dispatch(signIn)
        dispatch(signOut())
        navigate('/');
    }
  return (
    <Menu.Item position='right'>
        <Image avatar spaced='right' src='/user.png'/>
        {/* <Dropdown pointing='top left' text='Muhammad'> */}
        <Dropdown pointing='top left' text={currentUser?.email}>
            <DropdownMenu>

            <Dropdown.Item as = {Link} to = 'Create Event' text='Create Event' icon='plus'/>
            <Dropdown.Item text='My profile' icon='user'/>
            <Dropdown.Item onClick={handleSignOut} text='Sign Out' icon='power'/>
            </DropdownMenu>


        </Dropdown>
    </Menu.Item>
  )
}