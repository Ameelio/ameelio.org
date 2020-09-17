import React, { ReactElement } from "react";
import Image from "react-bootstrap/Image";
import "./GlassCaseCard.css";

export interface GlassCaseCardProps {
  name: string;
  image: string;
}

export default function GlassCaseCard({
  name,
  image,
}: GlassCaseCardProps): ReactElement {
  return (
    <div className="d-flex flex-column align-items-center m-3 flex-grow-0 flex-shrink-0">
      <Image src={image} className="mb-3 glass-case-image" />
      <span className="dark">{name}</span>
    </div>
  );
}
