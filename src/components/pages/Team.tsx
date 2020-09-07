import React, { ReactElement } from "react";
import MemberCard from "src/components/cards/MemberCard";
import { MEMBERS, TECH_BOARD, JUSTICE_BOARD } from "src/utils/constants";

export default function Team(): ReactElement {
  return (
    <div className="py-5">
      <div className="d-flex flex-column align-items-center px-5 text-center sub-page">
        <section className="d-flex flex-column align-items-center pb-5">
          <h2 className="font-weight-bold mb-4">Our Team</h2>
          <span>
            We are engineers, data scientists, lawyers, designers, and
            researchers.
          </span>
          <br />
          <span>
            But most importantly, we are people who believe that everyone
            impacted by incarceration should be able to stay in touch with their
            loved ones.
          </span>

          <div className="d-flex flex-column flex-md-row flex-wrap w-75 pt-5 justify-content-center">
            {MEMBERS.map(function (member, index) {
              return <MemberCard key={index} member={member} />;
            })}
          </div>
        </section>
        <section className="d-flex flex-column align-items-center">
          <h2 className="font-weight-bold pb-5">Our Board of Advisors</h2>
          <span className="font-semibold p3">Criminal Justice</span>
          <div className="d-flex flex-column flex-md-row  flex-wrap w-75 mt-3 justify-content-center">
            {JUSTICE_BOARD.map(function (member, index) {
              return <MemberCard key={index} member={member} boardMember />;
            })}
          </div>

          <span className="p3 font-semibold mt-5">Tech</span>
          <div className="d-flex flex-column flex-md-row flex-wrap  w-75 mt-3 justify-content-center">
            {TECH_BOARD.map(function (member, index) {
              return <MemberCard key={index} member={member} boardMember />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
