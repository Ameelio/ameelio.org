import React, { FunctionComponent, useState, useEffect } from "react";
// import "./FacilityGuide.css";

interface FacilityInformationProps {
  state: string;
  facility: string;
  description: string;
  address: string;
  telephone: string;
  mailing: string;
}

const FacilityGuide: FunctionComponent<FacilityInformationProps> = ({
  facility,
  description,
  address,
  telephone,
  mailing,
}) => {
  //   const [job_clicked, setJobClicked] = useState(false);

  //   useEffect(() => {
  //     if (job_clicked) {
  //       window.open(applyLink);
  //     }
  //   });
  // https://stackoverflow.com/questions/46832912/is-dangerouslysetinnerhtml-the-only-way-to-render-html-from-an-api-in-react
  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: facility }}
      />
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: address }}
      />
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: telephone }}
      />
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: mailing }}
      />
    </div>
  );
};

export default FacilityGuide;
