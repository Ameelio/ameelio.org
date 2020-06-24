import React, { FunctionComponent } from "react";
import Supporters from "../sections/Supporters";

const HowFree: FunctionComponent = () => {
  return (
    <div className="d-flex flex-column text-align-center  justify-content-center mw-100 default-px">
      <span className="p2 font-weight-bold">How is Ameelio Free?</span>
      <span className="text-break mb-3">
        We are the only nonprofit prison telecommunications provider in the U.S.
        We believe that it’s unjust for loved ones of the incarcerated to pay
        sky-high fees to stay in touch, and we are committed to providing free
        communications options to all families.
      </span>
      <span className="text-break mb-3">
        Luckily, we’re not alone: Our work is made possible by the generosity of
        like-minded charitable foundations, individual donors, corporate
        partners, and users who choose to “tip” us for our services.
      </span>

      <span className="text-break mb-3">
        Among our early supporters are Robin Hood Foundation, the Mozilla
        Foundation, and Fast Forward Accelerator. Donors like Tarell McCraney
        (Oscar-winning writer of Moonlight) have contributed key funds that have
        allowed us to keep offering free letters to all our users.
      </span>
      <span>
        Sustainability is critical to our mission, so we believe that it's
        important to generate earned revenue. That’s why we are building paid
        products for mission-aligned partners, like criminal justice
        organizations and lawyers, who are willing and able to pay.
      </span>

      <div className="mt-5 d-flex flex-column">
        <span className="p2 font-weight-bold mb-3">Who owns Ameelio?</span>
        <span className="mb3">
          Ameelio is a nonprofit. Ending the exploitation of families impacted
          by incarceration is central to our mission, so we are committed to
          re-investing all of our profits into our products. All our funds are
          directed towards building better communications options and serving
          more families.
        </span>
      </div>
      {/* <Supporters /> */}
    </div>
  );
};

export default HowFree;
