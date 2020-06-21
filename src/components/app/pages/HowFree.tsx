import React, { FunctionComponent } from "react";
import Image from "react-bootstrap/Image";
import Supporters from "../Supporters/Supporters";

const HowFree: FunctionComponent = () => {
  return (
    <div className="d-flex flex-column text-align-center  justify-content-center mw-100 p-5 mx-5">
      <span className="p1 font-weight-bold">How is Ameelio Free?</span>
      <span className="test-break mb-3">
        We are the only nonprofit prison telecommunications provider in the U.S.
        We believe that it’s unjust for loved ones of the incarcerated to pay
        sky-high fees to stay in touch, and we are committed to providing free
        communications options to all families.{" "}
      </span>
      <span className="test-break">
        Luckily, we’re not alone: Our work is made possible by the generosity of
        like-minded charitable foundations, individual donors, corporate
        partners, and users who choose to “tip” us for our services.
      </span>

      <Supporters />
    </div>
  );
};

export default HowFree;
