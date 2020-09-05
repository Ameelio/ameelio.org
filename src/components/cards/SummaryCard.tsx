import React, { ReactElement } from "react";
import "./SummaryCard.css";

interface Props {
  desc: string;
}

export default function SummaryCard({ desc }: Props): ReactElement {
  return (
    <div className="summary">
      <b>In a Nutshell</b>
      <p>{desc}</p>
    </div>
  );
}
