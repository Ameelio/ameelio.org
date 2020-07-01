import React, { useState, useEffect } from "react";
import "./JobCard.css";

interface JobProps {
  title: string;
  description: string;
  type: string;
}

const JobCard = ({ title, description, type }) => {
  const applyLink =
    type === "volunteer"
      ? "https://team202897.typeform.com/to/YhfOAH6g"
      : `mailto:team@ameelio.org?Subject=Interest%20in%20${encodeURI(
          title
        )}%20Position`;

  const [job_clicked, setJobClicked] = useState(false);

  useEffect(() => {
    if (job_clicked) {
      window.open(applyLink);
    }
  });
  return (
    <div className="job-container d-flex flex-column flex-md-row justify-content-between">
      <div>
        <div className="blue">{title}</div>
        <div className="careers-job-description">{description}</div>
      </div>
      <button
        className="careers-apply-button secondary-btn mt-3 mt-md-0"
        onClick={() => setJobClicked(true)}
      >
        Apply
      </button>
    </div>
  );
};

export default JobCard;
