import React, { ReactElement } from "react";
import { ORGS_USE_CASES } from "src/utils/constants";
import UseCaseCard from "src/components/cards/UseCaseCard";

export default function UseCases(): ReactElement {
  return (
    <section className="blue-200-bg w-100 d-flex flex-column align-items-center py-5">
      <h2 className="dark font-weight-bold">How It Works</h2>

      <div className="d-flex flex-column flex-md-row justify-content-md-around mt-3 align-items-center align-items-md-start">
        {ORGS_USE_CASES.map((useCase) => (
          <div className="mx-4 mt-3 mt-md-0">
            <UseCaseCard useCase={useCase} />
          </div>
        ))}
      </div>
    </section>
  );
}
