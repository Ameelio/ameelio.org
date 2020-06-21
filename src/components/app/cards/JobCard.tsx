import React from "react";
import "./JobCard.css";

interface JobProps {
  title: string;
  description: string;
}

const JobCard = (props: JobProps) => {
  return (
    <div className="job-container d-flex align-items-center justify-content-between">
      <div>
        <div className="careers-job-title">{props.title}</div>
        <div className="careers-job-description">{props.description}</div>
      </div>
      <button className="careers-apply-button">Apply</button>
    </div>
  );
};

export default JobCard;
