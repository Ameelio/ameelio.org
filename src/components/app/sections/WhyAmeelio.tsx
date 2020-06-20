import React from "react";
import "./WhyAmeelio.css";

const WhyAmeelio: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center py-5">
      <span className="p2">WHY WE'RE HERE</span>
      <span className="font-weight-bold mb-5 p5">
        We’re here to decouple incarceration and profit, and combat mass
        incarceration.
      </span>
      <div className="d-flex flex-column flex-lg-row copy">
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
            <b>
              one in three families with incarcerated loved ones are forced into
              debt
            </b>{" "}
            by the costs of maintaining contact.
          </span>
        </div>
        <div className="d-flex flex-column ml-md-5">
          <span>
            We want to reconnect incarcerated people and their loved ones, for
            free. Our vision is to disrupt the prison telecommunications
            industry, and outcompete incumbents with services that center users
            over profits.
          </span>
          <br />
          <span>
            We have strong evidence that sustaining contact during incarceration
            improves post-release outcomes and reduces recidivism. Long-term, we
            hp shrink prison populations.
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyAmeelio;
