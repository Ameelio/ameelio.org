import React from "react";
import "./stylesheets/maincard.css";

const MainCard: React.FC = () => {
  const illustration: any = require("../../assets/maincard_illustration.png");
  return (
    <div className="container">
      <div className="left-container">
        <div className="title">
          Send free letters &amp; <br></br> photos to your loved one.
        </div>
        <div className="subtitle">
          You shouldn't have to decide between paying for basic <br></br> needs
          and staying connected to your loved ones.
        </div>
        <a className="signup" href="https://letters.ameelio.org/register">
          <button className="letters-button">Send Free Letters Today</button>
        </a>
      </div>
      <div className="right-container">
        <img className="illustration" src={illustration} alt="" />
      </div>
    </div>
  );
};

export default MainCard;
