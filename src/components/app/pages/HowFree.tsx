import React, { FunctionComponent } from "react";
import Supporters from "../Supporters/Supporters";

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
        These include leading foundations like the Robin Hood Foundation, the
        Mozilla Foundation, and Fast Forward Accelerator. They also include
        individual donors like Tarell McCraney (Oscar-winning writer of
        Moonlight).
      </span>
      <span>
        To be a more effective, sustainable, and impactful nonprofit, we believe
        it's important to generate earned revenue. That’s why we seek
        alternative sources of revenue for our services through criminal justice
        organizations and, in the future, lawyers.
      </span>

      <div className="mt-5 d-flex flex-column">
        <span className="p2 font-weight-bold mb-3">Who owns Ameelio?</span>
        <span className="mb3">
          Ameelio is a non-profit. This means that the American people own
          Ameelio. You own Ameelio just as much as any one of us does.
        </span>

        <span className="mb-3">Best,</span>
        <span className="mb-3">Ameelio Team</span>
      </div>
      <Supporters />
    </div>
  );
};

export default HowFree;
