import React, { useState } from "react";
import {signOut,getAuth} from "firebase/auth";
import {auth} from "../FirebaseConfig"
import { useNavigate } from "react-router-dom";

const LeftSide = ({isAuth}) => {
 const navigate = useNavigate()


 function logOut(){
const auth = getAuth();
signOut(auth).then(() => {
  window.localStorage.clear();
  navigate("/login")
  console.log("Sign-out successful")
}).catch((error) => {
  console.log(error)
});
}

  return (
    <div className="LeftSide">
      <div className="LeftSide_Header">
        <div className="LeftSide_Header_UserIcon">
          <button>User</button>
        </div>

        <div className="LeftSide_Header_FunctionsIcons">
          <i className="fas fa-circle-notch"></i>
          <i className="fa-solid fa-plus"></i>
          <i className="fas fa-ellipsis-v"></i>
          <button onClick={()=>logOut()}>Log Out</button>
        </div>
      </div>

      <div className="LeftSide_SearchBar">
        <div className="LeftSide_SearchBar_Input">
          <i className="fa-solid fa-magnifying-glass"></i>
          {/* <i className="fa-solid fa-arrow-left"></i> */}
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="LeftSide_ChatList">
        <div className="LeftSide_ChatList_ChatItem">
          <div className="LeftSide_ChatList_ChatItem_Box1">
            <img src="" alt="us" />
          </div>
          <div className="LeftSide_ChatList_ChatItem_Box2">
            <div className="LeftSide_ChatList_ChatItem_Box2_ChatTitle">
              <span>Fulanito</span>
              <span className="LeftSide_ChatList_ChatItem_Box2_ChatTitle_Date">12:05pm</span>
            </div>
            <div className="LeftSide_ChatList_ChatItem_Box2_ChatMessage">
              Hola
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
