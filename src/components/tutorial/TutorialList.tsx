import React, { FunctionComponent } from "react";
import TutorialStep from "./TutorialStep";
import "./TutorialList.css";
interface TutorialListProps {
  steps: Array<{
    header: string;
    body: string;
  }>;
}
const TutorialList: FunctionComponent<TutorialListProps> = ({ steps }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-3">
      {steps.map((step, index) => (
        <TutorialStep header={step.header} body={step.body} step={index + 1} />
      ))}
    </div>
  );
};

export default TutorialList;
