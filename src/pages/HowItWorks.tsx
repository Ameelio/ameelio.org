import React, { FunctionComponent } from "react";
import TutorialList from "src/components/tutorial/TutorialList";
import AuthorCard from "src/components/cards/AuthorCard";
import Lara from "src/assets/Team/Lara.png";
import { STEPS } from "src/utils/constants";
import SummaryCard from "src/components/cards/SummaryCard";
import CtaCard from "src/components/cards/CtaCard";
import { BUTTON_TYPES } from "src/utils/constants";

const HowItWorks: FunctionComponent = () => {
  return (
    <div className="default-px py-5">
      <h1 className="font-weight-bold">How Ameelio Works</h1>

      <div className=" d-flex flex-column flex-md-row">
        <div className="d-flex flex-column mr-md-5">
          <div className="d-flex flex-column  mb-5">
            <span className="font-weight-bold text-break p4">
              You’re steps away from sending your first letter.
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
    </div>
  );
};

export default HowItWorks;
