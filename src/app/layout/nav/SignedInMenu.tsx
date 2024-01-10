import { Menu, Image, Dropdown, DropdownMenu } from "semantic-ui-react";
import {Link, useNavigate} from 'react-router-dom'
import { useAppSelector } from "../../store/store";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
// import {  signOut } from "../../../features/auth/authSlice"; dont need it becasue logout managed from App.tsx file


// type Props ={
//     setAuth: (value:boolean) => void;
// }

// export default function SignedInMenu({setAuth}: Props) {
export default function SignedInMenu() {
    const {currentUser} = useAppSelector(state=>state.auth)
    // const dispatch = useAppDispatch();
    const navigate =useNavigate();

    // function  handleSignOut(){
  async function  handleSignOut(){
      await signOut(auth)
        // setAuth(false);
        // dispatch(signIn)
        // dispatch(signOut())   dont need it becasue logout managed from App.tsx file

        navigate('/');
    }
  return (
    <Menu.Item position='right'>
        <Image avatar spaced='right' src={currentUser?.photoURL || '/user.png'}/>
        {/* <Image avatar spaced='right' src='/user.png'/> */}
        {/* <Dropdown pointing='top left' text='Muhammad'> */}
        {/* <Dropdown pointing='top left' text={currentUser?.email}> */}
        <Dropdown pointing='top left' text={currentUser?.email as string}>
            <DropdownMenu>

            <Dropdown.Item as = {Link} to = 'Create Event' text='Create Event' icon='plus'/>
            <Dropdown.Item text='My profile' icon='user'/>
            <Dropdown.Item onClick={handleSignOut} text='Sign Out' icon='power'/>
            </DropdownMenu>


        </Dropdown>
    </Menu.Item>
  )
}