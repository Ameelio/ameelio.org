import React, { FunctionComponent } from "react";
import "./Supporters.css";
import { LAW_FIRMS, FOUNDATIONS } from "src/utils/constants";
import SupporterCard from "src/components/cards/SupporterCard";

const Supporters: FunctionComponent = () => {
  return (
    <div className="py-5">
      <span className="p2 font-weight-bold mb-5">Who Supports Ameelio?</span>
      <div className="d-flex flex-column flex-md-row mt-5 flex-wrap">
        {[...FOUNDATIONS, ...LAW_FIRMS].map((foundation: Supporter) => (
          <SupporterCard {...foundation} />
        ))}
      </div>
    </div>
  );
};

export default Supporters;
