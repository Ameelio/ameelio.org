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
      "Growth Marketer (Contract, 6-months)",
      "We're looking for a seasoned growth marketer to help us 10x user acquisition through online and offline channels."
    ),
    new Job(
      "Senior UX Researcher (Contract, 6-months)",
      "We're looking for a senior UX researcher to help us lead generative and evaluative research."
    ),
    new Job(
      "Grant Writer (Contract, 5-months)",
      "We're looking for a seasoned grant writer to help write grants for foundations, government programs and accelerators."
    ),
  ];

  const volunteer = [
    new Job(
      "Fundraising Specialist",
      "We're looking for a fundraising specialist to assist us in new fundraising initiatives and execute existing ones."
    ),
    new Job(
      "Senior Developers",
      "We're looking for senior developers that can help us make better, faster, and smarter code."
    ),
    new Job(
      "Growth Hackers",
      "We're looking for a team of growth hackers to help us solve user acquisition and retention."
    ),
  ];

  return (
    <div className="careers-wrapper">
      <div className="d-flex justify-content-center">
        <div className="careers-container d-flex flex-column justify-content-center">
          <div className="careers-text-container">
            <div className="careers-main-title">Full-time positions</div>
            <div className="gray-underline"></div>
            {full_time.map(function (job, index) {
              return (
                <JobCard
                  key={index}
                  title={job.title}
                  description={job.description}
                />
              );
            })}
            <div className="careers-main-title">Volunteer positions</div>
            <div className="gray-underline"></div>
            {volunteer.map(function (job, index) {
              return (
                <JobCard
                  key={index}
                  title={job.title}
                  description={job.description}
                />
              );
            })}
            <div className="careers-main-title">Media inquiries</div>
            <div className="media-contact-container d-flex align-items-center">
              <div className="media-contact-description">
                Interested in getting in touch?
              </div>
              <button className="media-contact-button">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <img className="careers-background" src={background} alt="" />
    </div>
  );
};

export default Careers;
