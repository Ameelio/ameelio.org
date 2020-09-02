import React, { ReactElement } from "react";
import Image from "react-bootstrap/Image";
import Stars from "src/assets/Hero/Stars.svg";
import "./StarBackground.css";

export default function StarBackground(): ReactElement {
  return (
    <div>
      <Image src={Stars} className="stars-bg" />
    </div>
  );
}
