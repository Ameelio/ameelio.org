import React from "react";
import "./LettersFamilies.css";

const LettersForFamilies: React.FC = () => {
  const mobile: any = require("../../assets/mockups/mobile.png");
  return (
    <div className="">
      <div className="d-flex p-md-5 p-3 flex-column flex-md-row justify-content-center  align-items-center ">
        <div className="d-flex flex-column align-items-center align-items-md-start justify-content-evenly text-center text-md-left">
          <div className="p1 font-weight-bolder">Letters for families</div>
          <div className="lff-subtitle mt-3 p4">
            Share physical memories and new experiences with your loved ones
            inside. Your letters are personal keepsakes that they will cherish.
          </div>
          <br></br>
          <br></br>
          <div className="lff-list p4">1. Choose your contact</div>
          <div className="lff-list p4">
            2. Write a message &amp; attach a photo
          </div>
          <div className="lff-list p4">
            3. We'll print &amp; mail if for you, for free!
          </div>
          <button className="lff-button">Get Started</button>
        </div>
        <img src={mobile} className="lff-mockup" alt="" />
      </div>
    </div>
  );
};

export default LettersForFamilies;
