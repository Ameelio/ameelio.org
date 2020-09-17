import React from "react";
import "./WhyAmeelio.css";
import Impact from "src/components/sections/Impact";

const WhyAmeelio: React.FC = () => {
  return (
    <div className="d-flex flex-column align-items-center mw-100 py-5 default-px">
      <span className="p2 font-weight-bold">Why We're Here</span>
      <span className="mt-3">
        We want to reconnect incarcerated people and their loved ones,{" "}
        <span className="bg-darkblue white px-1 font-weight-bold">
          for free
        </span>
        . Our vision is to disrupt the prison telecommunications industry,
        outcompeting incumbents by providing services that prioritize users over
        profits.
      </span>
      <Impact />
      <span>
        The{" "}
        <span className="bg-darkblue white px-1 font-weight-bold">
          $1.2 billion
        </span>{" "}
        prison telecommunications industry is one of the most under-reported bad
        actors in the criminal justice space.{" "}
      </span>
      <br />
      <span>
        Private telecommunications companies exploit vulnerable families’ desire
        to remain connected while separated by incarceration. These providers
        are profiting primarily from low-income families:{" "}
        <span className="bg-darkblue white px-1 font-weight-bold">
          one in three families
        </span>{" "}
        with incarcerated loved ones are forced into debt due to the costs of
        maintaining contact.
      </span>
      <br />
      <span>
        There is strong evidence that sustained contact during incarceration
        improves post-release outcomes and reduces recidivism. We hope that in
        the long term, our services will significantly{" "}
        <span className="bg-darkblue white px-1 font-weight-bold">
          shrink prison populations.
        </span>
      </span>
    </div>
  );
};

export default WhyAmeelio;
