import { Button, MenuItem } from "semantic-ui-react";
import { useAppDispatch } from "../../store/store";
import { openModal } from "../../common /modals/modalSlice";
import RegisterForm from "../../../features/auth/RegisterForm";

// type Props ={
//   setAuth: (value:boolean) => void;
// } 
// export default function SignedOutButton({setAuth}: Props) {
export default function SignedOutButton() {
  const dispatch = useAppDispatch();
  return (
    <MenuItem position='right'>
        <Button 
        basic 
        inverted 
        content='login'
        onClick={()=>dispatch(openModal({type: 'LoginForm'}))}
        />
         {/*  in order to openthe above modal need to go to the modal manager */}

        <Button 
        basic 
        inverted 
        content='Register'
        style={{marginLeft: '0.5em'}}
        // onClick={() => dispatch(openModal({type: RegisterForm}))} without 
        // qoute for Registerform this give a modal error
        onClick={() => dispatch(openModal({type: 'RegisterForm'}))}
        />
    </MenuItem>
  )
} 