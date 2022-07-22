import React from "react";

const LeftSide = () => {
  return (
    <div className="LeftSide">
      <div className="LeftSide_Header">
        <div className="LeftSide_Header_UserIcon">
          <button>User</button>
        </div>

        <div className="LeftSide_Header_FunctionsIcons">
          <i className="fas fa-circle-notch"></i>
          <i class="fa-solid fa-plus"></i>
          <i className="fas fa-ellipsis-v"></i>
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
              <p>Fulanito</p>
              <span>12:05pm</span>
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
