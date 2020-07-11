import React, { FunctionComponent } from "react";
import "./SummaryCard.css";

interface SummaryCardProps {
  locality: string;
}

const SummaryCard: FunctionComponent<SummaryCardProps> = ({ locality }) => {
  return (
    <div className="summary">
      <b>Summary</b>
      <p>
        Is your loved one in a facility in {locality}? With our mobile app, you
        can write letters and send photos for free.
      </p>
    </div>
  );
};

export default SummaryCard;
