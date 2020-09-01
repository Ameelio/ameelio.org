import React, { useState, useEffect, FunctionComponent } from "react";
import "./LettersOrgs.css";
import { PLACEMENT, LINKS, BUTTON_TYPES } from "src/utils/constants";
import { trackButtonClick } from "src/utils/analytics";

const LettersForOrgs: FunctionComponent = () => {
  const preview: any = require("src/assets/letters_for_organizations.png");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      trackButtonClick(BUTTON_TYPES.ORGS_DEMO, PLACEMENT.SECTION);
      window.open(LINKS.ORGS_DEMO, "_self");
    }
  });

  return (
    <div className="lfo-wrapper py-5" id="orgs">
      <div className="lfo-container">
        <div className="p1 font-weight-bold white text-center">
          Letters for Organizations
        </div>
        <div className="p4 white lfo-subtitle">
          Your electronic courier is here. We'll handle your bulk mail, organize
          your contacts, and ease collaboration and visibility within your
          organization.
        </div>
        <button onClick={() => setClicked(true)} className="lfo-button">
          Schedule a Demo
        </button>
        <img className="lfo-preview" src={preview} alt="" />
      </div>
    </div>
  );
};

export default LettersForOrgs;
