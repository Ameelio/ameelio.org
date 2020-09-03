import React, { ReactElement } from "react";
import Image from "react-bootstrap/Image";
import "./ImpactCard.css";

interface Props {
  image: string;
  metric: string;
  label: string;
}

export default function ImpactCard({
  image,
  metric,
  label,
}: Props): ReactElement {
  return (
    <div className="d-flex flex-column text-center justify-content-center impact-card mx-5 mt-4 mt-md-0">
      <Image src={image} />
      <span className="font-weight-bold dark p3">{metric}</span>
      <span className="blue-400">{label}</span>
    </div>
  );
}
