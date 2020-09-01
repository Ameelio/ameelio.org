import React from "react";
import "./WhyAmeelio.css";

const WhyAmeelio: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center mw-100 py-5 default-px">
      <span className="p2 font-weight-bold">Why we're here</span>
      <span className="mb-5 p4 text-break">
        We’re here to decouple incarceration and profit, and combat mass
        incarceration.
      </span>
      <div className="d-flex flex-column flex-lg-row">
        <div className="d-flex flex-column">
          <span>
            <span className="bg-darkblue white px-1 font-weight-bold">
              Nearly one in two Americans
            </span>{" "}
            has a family member who has experienced incarceration. When a loved
            one is imprisoned, staying in touch is vital. Yet prison
            communications options remain prohibitively expensive.
          </span>
          <br />
          <span>
            The $1.2 billion prison telecommunications industry is one of the
            most under-reported bad actors in the criminal justice space.{" "}
          </span>
          <br />
          <span>
            Private telecommunications companies exploit vulnerable families’
            desire to remain connected while separated by incarceration. These
            providers are profiting primarily from low-income families:{" "}
            <span className="bg-darkblue white px-1 font-weight-bold">
              one in three families with incarcerated loved ones are forced into
              debt
            </span>{" "}
            due to the costs of maintaining contact.
          </span>
        </div>
        <div className="d-flex flex-column ml-md-5 mt-3 mt-md-0">
          <span>
            <span className="bg-darkblue white px-1 font-weight-bold">
              We want to reconnect incarcerated people and their loved ones, for
              free.
            </span>{" "}
            Our vision is to disrupt the prison telecommunications industry by
            outcompeting incumbents with services that prioritize users over
            profits.
          </span>
          <br />
          <span>
            There is strong evidence that sustaining contact during
            incarceration improves post-release outcomes and reduces recidivism.
            We hope that in the long term, our services will significantly{" "}
            <span className="bg-darkblue white px-1 font-weight-bold">
              shrink prison populations.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyAmeelio;
