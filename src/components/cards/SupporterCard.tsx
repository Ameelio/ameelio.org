import React, { ReactElement } from "react";
import Image from "react-bootstrap/Image";
import "./SupporterCard.css";

interface Props {
  image?: string;
  name: string;
}

export default function SupporterCard({ image, name }: Props): ReactElement {
  const layout = image ? "mt-auto border-top py-2" : "m-auto";
  return (
    <div className="d-flex flex-column border supporter-card align-items-center mb-3 mr-md-4  mw-100">
      {image && <Image src={image} className="supporter-logo p-3 m-auto" />}

      <div className={`w-100 text-center ${layout}`}>
        <span className="-1">{name}</span>
      </div>
    </div>
  );
}
