import React from "react";
import "./GetStarted.css";

const GetStarted: React.FC = () => {
  const map: any = require("../../../assets/united_states.png");
  return (
    <div className="">
      <div className="d-flex p-md-5 p-3 flex-column flex-md-row justify-content-around align-items-center">
        <img src={map} className="country-map" alt="" />
        <div className="get-started-right-container d-flex flex-column align-items-center align-items-md-start justify-content-evenly text-center text-md-left">
          <div className="p2 font-weight-bolder">
            Bring free videoconferencing to your facility
          </div>
          <div className="get-started-subtitle mt-3 p5">
            Ameelio is working to launch the first video conferencing pilot
            sites in the US. If you're are a warden or sheriff interested in
            being one of the pioneers, email us at team@ameelio.org.
          </div>
          <button
            className="get-started-button"
            onClick={() => window.open("https://calendly.com/ameelio")}
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
