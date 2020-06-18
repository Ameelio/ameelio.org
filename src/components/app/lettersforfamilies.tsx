import React from "react";
import "./stylesheets/lettersforfamilies.css";

const LettersForFamilies: React.FC = () => {
  const circle: any = require("../../assets/circle_background.png");
  const screenshot_left: any = require("../../assets/screenshot_left.png");
  const screenshot_right: any = require("../../assets/screenshot_right.png");
  return (
    <div className="lff-wrapper">
      <div className="lff-container flex-md-row">
        <div className="lff-left-container">
          <div className="lff-title">Letters for families</div>
          <div className="lff-subtitle">
            Share physical memories and new experiences <br></br>
            with your loved ones inside. Your letters are <br></br>
            personal keepsakes that they will cherish.
          </div>
          <br></br>
          <br></br>
          <div className="lff-list">1. Choose your contact</div>
          <div className="lff-list">
            2. Write a message &amp; attach a photo
          </div>
          <div className="lff-list">
            3. We'll print &amp; mail if for you, for free!
          </div>
          <button className="lff-button">Get Started</button>
        </div>
        <div className="lff-right-container">
          <img className="left-screenshot" src={screenshot_left} alt="" />
          <img className="right-screenshot" src={screenshot_right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LettersForFamilies;
