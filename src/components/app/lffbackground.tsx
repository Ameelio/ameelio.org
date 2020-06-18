import React from "react";
import "./stylesheets/lffbackground.css";

const LFFBackground: React.FC = () => {
  const circle: any = require("../../assets/circle_background.png");
  return (
    <div className="lff-background-container">
      <img className="circle" src={circle} alt="" />
    </div>
  );
};

export default LFFBackground;
