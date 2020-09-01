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
    : "flex-row flex-column-reverse";
  const marginImage2Content = reverse ? "ml-3" : "mr-3";

  return (
    <div
      className={`d-flex ${reverseLayout} justify-content-center mb-5 align-items-center align-items-lg-start`}
    >
      <div
        className={`d-flex flex-row step-value-prop-container align-items-center ${marginImage2Content}`}
      >
        <div className="d-flex flex-column ml-3 align-items-center">
          <span className="bg-lightblue step px-3 p3 font-weight-bold dark text-center ">
            {step}
          </span>
          <span className="dark p3 overflow-auto font-weight-bold text-center text-md-left">
            {title}
          </span>
          <span className="text-center text-md-left">{desc}</span>
        </div>
      </div>
      <Image src={asset} />
    </div>
  );
}
