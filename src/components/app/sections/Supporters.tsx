import React, { FunctionComponent } from "react";
import Image from "react-bootstrap/Image";
import "./Supporters.css";

const Supporters: FunctionComponent = () => {
  return (
    <div className="py-5">
      <span className="p2 font-weight-bold mb-5">Who Supports Ameelio?</span>
      <div className="d-flex flex-column flex-md-row mt-5">
        <Image
          className="supporter-logo"
          src={require("../../../assets/supporters/mozilla.png")}
        />
        <Image
          className="supporter-logo ml-md-5 mt-5 mt-md-0"
          src={require("../../../assets/supporters/robinhood.png")}
        />
        <Image
          className="supporter-logo ml-md-5 mt-5 mt-md-0"
          src={require("../../../assets/supporters/ffw.png")}
        />
      </div>
    </div>
  );
};

export default Supporters;
