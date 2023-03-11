import React from 'react'
import './Login.css'
import  pic from './google.png';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { logIn } from './features/userSlice';

function Login() {
    const dispatch=useDispatch();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(logIn({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL

            }))

        }).catch(error=>alert(error.message))
    }
  return (
    <div className="login">
    <div className="login_container">
        <img src={pic}/>
        <h5>Sign in</h5> 
        <p>to continue to google</p>
        <Button onClick={signIn}  variant="contained" color="primary">Login</Button>
        </div></div>
  )
}

export default Login