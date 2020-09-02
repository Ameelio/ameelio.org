import React from "react";
import "./HeroBackground.css";
import Hills from "src/assets/Hero/Hills.svg";

const MainCardBackground: React.FC = () => {
  return (
    <div>
      <img
        className="maincard-background"
        src={Hills}
        alt="Hero Illustration (Hills)"
      />
    </div>
  );
};

export default MainCardBackground;
