import React from "react";
import UserImage from "../img/perro.jpg";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="RightSide_Header">
        <div className="RightSide_Header_UserDescription">
          <div className="RightSide_Header_UserDescription_Image">
            <img src={UserImage} alt="user" />
          </div>
          <div className="RightSide_Header_UserDescription_UserBox">
            <h3>Guillermo Tapia</h3>
            <span>En linea</span>
          </div>
        </div>
      </div>

      <div className="RightSide_ChatBox"></div>

      <div className="RightSide_Footer">
        <div className="RightSide_Footer_ChatFunctions">
            <i class="fa-regular fa-face-laugh"></i>
            <i class="fa-solid fa-paperclip"></i>
        </div>
        <div className="RightSide_Footer_Input">
          <input type="text" placeholder="Type a Message" />
        </div>
        <i class="fa-solid fa-microphone RightSide_Footer_Microphone"></i>
      </div>
    </div>
  );
};

export default RightSide;
