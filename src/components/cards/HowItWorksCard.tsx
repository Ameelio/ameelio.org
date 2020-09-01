import React, { ReactElement } from "react";
import Image from "react-bootstrap/Image";
import "./HowItWorksCard.css";

interface Props {
  step: number;
  asset: string;
  reverse?: boolean;
  title: string;
  desc: string;
}

export default function HowItWorksCard({
  step,
  asset,
  title,
  desc,
  reverse,
}: Props): ReactElement {
  const reverseLayout = reverse
    ? "flex-md-row-reverse flex-column-reverse"
    : "flex-md-row flex-column-reverse";
  const marginImage2Content = reverse ? "ml-lg-5" : "mr-lg-5";

  return (
    <div
      className={`d-flex ${reverseLayout} justify-content-center mb-5 align-items-center`}
    >
      <div
        className={`d-flex flex-row step-value-prop-container align-items-center ${marginImage2Content}`}
      >
        <div className="d-flex flex-column ml-3 align-items-center align-items-md-start">
          <span className="bg-lightblue step px-3 p3 font-weight-bold dark mb-1">
            {step}
          </span>
          <span className="dark p3 overflow-auto font-weight-bold text-center text-md-left mb-2">
            {title}
          </span>
          <span className="text-center text-md-left">{desc}</span>
        </div>
      </div>
      <Image src={asset} />
    </div>
  );
}
