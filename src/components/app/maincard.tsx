import React from "react";
import "./stylesheets/maincard.css";
import Typical from "react-typical";

const MainCard: React.FC = () => {
  const illustration: any = require("../../assets/maincard_illustration.png");
  return (
    <div className="ml-5 px-5 mt-5 d-flex flex-lg-row flex-column  w-100 justify-content-center">
      <div className="d-flex flex-column">
        <h1 className="font-weight-bold">
          Send free
          <Typical
            steps={["letters", 3000, "photos", 2500, "postcards", 2500]}
            loop={Infinity}
            wrapper="h1"
          />
          to your loved ones
        </h1>
        <div className="subtitle mt-1">
          You shouldn't have to decide between paying for basic <br></br> needs
          and staying connected to your loved ones.
        </div>
        <a className="signup" href="https://letters.ameelio.org/register">
          <button className="mt-5 letters-button">
            Send Free Letters Today
          </button>
        </a>
      </div>
      <div>
        <img className="illustration" src={illustration} alt="" />
      </div>
    </div>
  );
};

export default MainCard;
