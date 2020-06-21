import React, { FunctionComponent } from "react";
import "./TutorialStep.css";

interface TutorialStepProps {
  step: number;
  header: string;
  body: string;
}
const TutorialStep: FunctionComponent<TutorialStepProps> = ({
  step,
  header,
  body,
}) => {
  return (
    <div className="d-flex flex-row mt-4">
      <span className="blue d-flex align-items-center justify-content-center tutorial-item flex-shrink-0">
        {step}
      </span>
      <div className="d-flex ml-3 flex-column">
        <span className="font-weight-bold">{header}</span>
        <span>{body}</span>
      </div>
    </div>
  );
};

export default TutorialStep;
