import React from "react";
import "./stylesheets/lettersfororgs.css";

const LettersForOrgs: React.FC = () => {
  const preview: any = require("../../assets/letters_for_organizations.png");
  return (
    <div className="lfo-wrapper">
      <div className="lfo-container">
        <div className="lfo-title">Letters for Organizations</div>
        <div className="lfo-subtitle">
          Your electronic courier is here. We'll handle your bulk mail, organize
          your contacts, and ease collaboration and visibility within your
          organization.
        </div>
        <button className="lfo-button">Try the Demo</button>
        <img className="lfo-preview" src={preview} alt="" />
      </div>
    </div>
  );
};

export default LettersForOrgs;
