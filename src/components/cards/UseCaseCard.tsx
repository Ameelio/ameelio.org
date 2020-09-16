import React, { ReactElement } from "react";
import { Image } from "react-bootstrap";
import "./UseCaseCard.css";

interface Props {
  useCase: UseCase;
}

export default function UseCaseCard({ useCase }: Props): ReactElement {
  return (
    <div className="d-flex flex-column align-items-center px-4 py-3 use-case-card">
      <Image src={useCase.image} />
      <div className="d-flex flex-column align-self-end align-items-center">
        <span className="p4 font-weight-bold mt-3">{useCase.title}</span>
        <span className="text-center mt-1">{useCase.description}</span>
      </div>
    </div>
  );
}
