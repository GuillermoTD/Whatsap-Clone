import React, { useEffect, useState } from "react";
import {signOut,getAuth} from "firebase/auth";
import {auth, db} from "../firebase"
import { useNavigate } from "react-router-dom";
import {getDocs, collection, doc, deleteDoc} from "firebase/firestore"
import { async } from "@firebase/util";





const LeftSide = ({isAuth}) => {
 const navigate = useNavigate()
 const [userinfo, setUserInfo] = useState([])
 const usertCollectionRef = collection(db, "users")


useEffect(()=>{
  const getUser = async ()=>{
    const data = await getDocs(usertCollectionRef);
    setUserInfo(data.docs.map((user)=> ({...user.data(), id: user.id})));
  };
  getUser();
},[]);
console.log(userinfo)


////////// Logout function/////////
 function logOut(){
const auth = getAuth();
signOut(auth)
.then(() => {
  window.localStorage.clear();
  navigate("/login")
  console.log("Sign-out successful")
})
.catch((error) => {
  console.log(error)
});
}
console.log(auth)





  const [dropdown, setDropdown] = useState(false)

  const handleDropdown = ()=>{
    const Dropdown = document.querySelector(".LeftSide_Header_DropDown ")
    setDropdown(!dropdown)
    
    if(dropdown){
      Dropdown.classList.add("IsOpen_DropDown")
    }else{
      Dropdown.classList.remove("IsOpen_DropDown")
    }
  }

  return (
    <div className="LeftSide">
      <div className="LeftSide_Header">
        <div className="LeftSide_Header_UserIcon">
          <button>User</button>
        </div>

        <div className="LeftSide_Header_FunctionsIcons">
          <i className="fas fa-circle-notch"></i>

          <i className="fa-solid fa-ellipsis" onClick={()=>handleDropdown()}></i>
          <div  className="LeftSide_Header_DropDown">
            <button onClick={()=>logOut()}>Log Out</button>
          </div>

        </div>
      </div>

      <div className="LeftSide_SearchBar">
        <div className="LeftSide_SearchBar_Input">
          <i className="fa-solid fa-magnifying-glass"></i>
          {/* <i className="fa-solid fa-arrow-left"></i> */}
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>



{userinfo.map((userData)=>{
  return <div key={userData.name.id} className="LeftSide_ChatList">
        <div className="LeftSide_ChatList_ChatItem">
          <div className="LeftSide_ChatList_ChatItem_Box1">
            <img src={userData.name.photo} alt="us" />
          </div>
          <div className="LeftSide_ChatList_ChatItem_Box2">
            <div className="LeftSide_ChatList_ChatItem_Box2_ChatTitle">

              <span>{userData.name.name}</span>
              <span className="LeftSide_ChatList_ChatItem_Box2_ChatTitle_Date">12:05pm</span>

              <span>Fulanito</span>
              <span className="LeftSide_ChatList_ChatItem_Box2_ChatTitle_Date">
                12:05pm
              </span>

            </div>
            <div className="LeftSide_ChatList_ChatItem_Box2_ChatMessage">
              Hola
            </div>
          </div>
        </div>
      </div>
})
}
    </div>
)};


export default LeftSide;
