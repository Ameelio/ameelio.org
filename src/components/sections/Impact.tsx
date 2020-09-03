import React, { ReactElement } from "react";
import ImpactCard from "src/components/cards/ImpactCard";
import { IMPACT_METRICS } from "src/utils/constants";

export default function Impact(): ReactElement {
  return (
    <div className="blue-200-bg d-flex flex-column flex-md-row py-3 justify-content-md-center align-items-center my-5">
      {IMPACT_METRICS.map((metric) => (
        <ImpactCard {...metric} />
      ))}
    </div>
  );
}
