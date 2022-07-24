import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const MainPage = ({isAuth}) => {
const navigate = useNavigate()

  useEffect(()=>{
if(!isAuth){
navigate("/login")
}
},[])
  console.log(isAuth)
  
  return (
    <>
    {isAuth ?
    <div className="MainPage">
      <div className="Main">
        <LeftSide />
        <RightSide />
      </div>
    </div> : null
    } 
    </>
  );
};

export default MainPage;
