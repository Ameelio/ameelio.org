import React, { useState, useEffect, FunctionComponent } from "react";
import "./LettersFamilies.css";
import { PLACEMENT, LINKS, BUTTON_TYPES } from "../../../utils/constants";
import { trackButtonClick } from "../../../utils/analytics";

const LettersForFamilies: FunctionComponent = () => {
  const mobile: any = require("../../../assets/mockups/mobile.png");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      trackButtonClick(BUTTON_TYPES.SIGNUP, PLACEMENT.SECTION);
      window.open(LINKS.SIGNUP, "_self");
    }
  });
  return (
    <div className="">
      <div className="d-flex p-md-5 p-3 flex-column flex-md-row justify-content-center  align-items-center ">
        <div className="d-flex flex-column align-items-center align-items-md-start justify-content-evenly text-center text-md-left">
          <div className="p1 font-weight-bolder">Letters for Families</div>
          <div className="lff-subtitle mt-3 p4">
            Lift your loved one’s spirits by sharing a piece of your life with
            them. Your letters are keepsakes that they will hold onto.
          </div>
          <div className="lff-list p4">
            1. Locate your incarcerated loved one
          </div>
          <div className="lff-list p4">
            2. Write a message &amp; attach a photo
          </div>
          <div className="lff-list p4">
            3. We'll print &amp; mail it for you, for free
          </div>
          <button className="lff-button my-3" onClick={() => setClicked(true)}>
            Get Started
          </button>
        </div>
        <img src={mobile} className="lff-mockup my-5" alt="" />
      </div>
    </div>
  );
};

export default LettersForFamilies;
