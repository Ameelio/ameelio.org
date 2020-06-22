import React from "react";
import "./HeroBackground.css";

const MainCardBackground: React.FC = () => {
  const background: any = require("../../../assets/maincard_background.png");
  return (
    <div className="py-3 p-md-0 bg-lightblue">
      <img className="maincard-background" src={background} alt="" />
    </div>
  );
};

export default MainCardBackground;