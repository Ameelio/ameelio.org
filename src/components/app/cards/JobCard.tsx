import React from "react";
import "./JobCard.css";

interface JobProps {
  title: string;
  description: string;
}

const JobCard = (props: JobProps) => {
  return (
    <div className="job-container d-flex flex-column flex-md-row justify-content-between">
      <div>
        <div className="blue">{props.title}</div>
        <div className="careers-job-description">{props.description}</div>
      </div>
      <button
        className="careers-apply-button secondary-btn mt-3 mt-md-0"
        onClick={() =>
          window.open(
            `mailto:team@ameelio.org?Subject=Interest%20in%20${encodeURI(
              props.title
            )}%20Position`
          )
        }
      >
        Apply
      </button>
    </div>
  );
};

export default JobCard;
