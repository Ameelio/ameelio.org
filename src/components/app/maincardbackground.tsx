import React from "react";
import "./stylesheets/maincardbackground.css";

const MainCardBackground: React.FC = () => {
  const background: any = require("../../assets/maincard_background.png");
  return (
    <div className="py-3 bg-lightblue">
      <img className="maincard-background" src={background} alt="" />
    </div>
  );
};

export default MainCardBackground;
