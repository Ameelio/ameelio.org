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
            The $1.2 billion prison telecommunications industry is one of the
            most under-reported bad actors in the criminal justice space.{" "}
          </span>
          <br />
          <span>
            It exploits vulnerable families’ desire to remain connected while
            separated by incarceration. And current providers are primarily
            profiting from low-income families:{" "}
            <span className="bg-darkblue white px-1 font-weight-bold">
              one in three families with incarcerated loved ones are forced into
              debt
            </span>{" "}
            by the costs of maintaining contact.
          </span>
        </div>
        <div className="d-flex flex-column ml-md-5 mt-3 mt-md-0">
          <span>
            We want to reconnect incarcerated people and their loved ones, for
            free. Our vision is to disrupt the prison telecommunications
            industry, and outcompete incumbents with services that center users
            over profits.
          </span>
          <br />
          <span>
            There is strong evidence that sustaining contact during
            incarceration improves post-release outcomes and reduces recidivism.
            We hope that in the long term, our services help shrink prison
            populations.
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyAmeelio;
