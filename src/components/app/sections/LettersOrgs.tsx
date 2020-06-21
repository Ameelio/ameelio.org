import React from "react";
import "./LettersOrgs.css";

const LettersForOrgs: React.FC = () => {
  const preview: any = require("../../../assets/letters_for_organizations.png");
  return (
    <div className="lfo-wrapper py-5">
      <div className="lfo-container">
        <div className="p1 font-weight-bold white text-center">
          Letters for Organizations
        </div>
        <div className="p4 white lfo-subtitle">
          Your electronic courier is here. We'll handle your bulk mail, organize
          your contacts, and ease collaboration and visibility within your
          organization.
        </div>
        <button
          onClick={() =>
            window.open(
              "https://calendly.com/emma-gray-ameelio/letters-for-organizations-information-session"
            )
          }
          className="lfo-button"
        >
          Schedule a Demo
        </button>
        <img className="lfo-preview" src={preview} alt="" />
      </div>
    </div>
  );
};

export default LettersForOrgs;
