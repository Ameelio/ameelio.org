import React from "react";
import "./Careers.css";
import JobCard from "../cards/JobCard";

class Job {
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

const Careers: React.FC = () => {
  const background: any = require("../../../assets/positions_background.png");

  const full_time = [
    new Job(
      "Full-Stack Developers (Contract, 6-months)",
      "We're looking for senior developers that are motivated to help us create the nation's first free prison videoconferencing platform."
    ),
  ];

  const volunteer = [
    new Job(
      "Developers",
      "We're looking for developers that can help us make better, faster, and smarter code."
    ),
    new Job(
      "Growth Hackers",
      "We're looking for growth hackers to help us expand user acquisition and improve retention."
    ),
    new Job(
      "Product Designer",
      "We're looking for product designers to help us create beautiful products that people love to use."
    ),
    new Job(
      "Writers",
      "We're looking for writers to help us communicate our work to users, donors, and more. Any background in criminal justice and/or journalism is preferred."
    ),
  ];

  return (
    <div
      className="careers-wrapper d-flex flex-column align-items-center py-5"
      id="careers"
    >
      <span className="p1 font-weight-bold text-center py-3 text-center">
        Want to get involved?
      </span>
      <div className="d-flex justify-content-center">
        <div className="careers-container d-flex flex-column justify-content-center">
          <div className="careers-text-container">
            <div className="careers-main-title">Full-time Positions</div>
            <div className="gray-underline"></div>
            {full_time.map(function (job, index) {
              return (
                <JobCard
                  key={index}
                  title={job.title}
                  description={job.description}
                  type="full-time"
                />
              );
            })}
            <div className="careers-main-title">Volunteer positions</div>
            <div className="careers-subtitle">
              Right now, we're only looking for volunteers able to commit 20+
              hours per week.
            </div>
            <div className="gray-underline"></div>
            {volunteer.map(function (job, index) {
              return (
                <JobCard
                  key={index}
                  title={job.title}
                  description={job.description}
                  type="volunteer"
                />
              );
            })}
            <div className="careers-main-title">Media Inquiries</div>
            <div className="media-contact-container d-flex flex-column flex-md-row  align-items-md-center">
              <div className="media-contact-description">
                Interested in getting in touch?
              </div>
              <button
                className="media-contact-button mt-3 mt-md-0"
                onClick={() => window.open(`mailto:zo@ameelio.org`)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="careers-background" src={background} alt="" />
    </div>
  );
};

export default Careers;
