import WhatsapIcon from "../img/whatsapp.svg"
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {auth} from "../firebase.js"




const LoginPage = () => {


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
  return (
    <div className="LoginContainer">
      <div className="Login">
        <img className="Login_Icon" src={WhatsapIcon} alt="whatsap-icon" />

        <h2 className="Login_Title">Sign in with Whatsapp</h2>

        <h2 className="Login_Title" >Sign in with Whatsapp</h2>

        <button className="Login_Button1" onClick={sighInWithGoogle}>Sign in with Google</button>
        <p>Or</p>
        <button className="Login_Button2">Sign in with a acccount</button>
      </div>
    </div>
  );
};
export default LoginPage;
