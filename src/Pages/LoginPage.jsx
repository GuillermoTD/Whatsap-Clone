import WhatsapIcon from "../img/whatsapp.svg"
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
<<<<<<< HEAD
import {auth} from "../FirebaseConfig"
=======
import {auth} from "../firebase.js"


>>>>>>> 8fb53473a78c132176af311aac0c23902edf9b35

const LoginPage = () => {

<<<<<<< HEAD
  const navigate = useNavigate()
  const sighInWithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result)=>{
      navigate("/")
      console.log(result.photoURL)

    })
    .catch((err)=>{
      console.log(err)
    })
  }
=======
const Login = () => {

  const navigate = useNavigate()
const sighInWithGoogle = ()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((resoult)=>{
    navigate("/")
    console.log(resoult);
  })
  .catch((err)=>{
    console.log(err)
  })
}




>>>>>>> 8fb53473a78c132176af311aac0c23902edf9b35
  return (
    <div className="LoginContainer">
      <div className="Login">
        <img className="Login_Icon" src={WhatsapIcon} alt="whatsap-icon" />
<<<<<<< HEAD
        <h2 className="Login_Title">Sign in with Whatsapp</h2>
=======
        <h2 className="Login_Title" >Sign in with Whatsapp</h2>
>>>>>>> 8fb53473a78c132176af311aac0c23902edf9b35
        <button className="Login_Button1" onClick={sighInWithGoogle}>Sign in with Google</button>
        <p>Or</p>
        <button className="Login_Button2">Sign in with a acccount</button>
      </div>
    </div>
  );
};
export default LoginPage;
