import React from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="Main">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default MainPage;
