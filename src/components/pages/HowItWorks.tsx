import React, { FunctionComponent } from "react";
import TutorialList from "../tutorial/TutorialList";
import AuthorCard from "../cards/AuthorCard";
import Lara from "src/assets/Team/Lara.png";
import { STEPS } from "src/utils/constants";
import SummaryCard from "../cards/SummaryCard";
import CtaCard from "../cards/CtaCard";
import { BUTTON_TYPES } from "src/utils/constants";

const HowItWorks: FunctionComponent = () => {
  return (
    <div className="default-px d-flex flex-column flex-md-row py-5">
      <div className="d-flex flex-column mr-md-5">
        <div className="d-flex flex-column align-items-center mb-5">
          <span className="p1 font-weight-bold text-center">
            How Ameelio Works
          </span>

          <span className="font-weight-bold text-center text-break p4">
            You’re steps away from sending your first letter
          </span>
        </div>
        <SummaryCard desc="In less than 5 minutes, you can send your first letter, photo or postcard to your loved one. All free of charge." />
        <AuthorCard
          images={[Lara]}
          name="Lara Schull"
          lastUpdatedAt="July 23, 2020"
        />
        <hr />
        <TutorialList steps={STEPS} />
      </div>
      <CtaCard type={BUTTON_TYPES.DOWNLOAD} />
    </div>
  );
};

export default HowItWorks;
