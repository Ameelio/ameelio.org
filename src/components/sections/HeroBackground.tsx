import React from "react";
import "./HeroBackground.css";

const MainCardBackground: React.FC = () => {
  const background: any = require("src/assets/maincard_background.png");
  return (
    <div>
      <img className="maincard-background" src={background} alt="" />
    </div>
  );
};

export default MainCardBackground;
