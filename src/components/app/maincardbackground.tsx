import React from "react";
import "./stylesheets/maincardbackground.css";

const MainCardBackground: React.FC = () => {
  const background: any = require("../../assets/maincard_background.png");
  return (
    <div>
      <img className="maincard-background" src={background} alt="" />
    </div>
  );
};

export default MainCardBackground;
