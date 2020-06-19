import React from "react";
import MemberCard from "../member/MemberCard";

class Member {
  name: string;
  img: string;
  title: string;

  constructor(name: string, url: string, title: string) {
    this.name = name;
    this.img = url;
    this.title = title;
  }
}

const Team: React.FC = () => {
  const members = [
    new Member(
      "Zo Orchingwa",
      require("../../../assets/team/zo.jpeg"),
      "Co-Founder"
    ),
    new Member(
      "Gabe Saruhashi",
      require("../../../assets/team/gabe.jpeg"),
      "Co-Founder"
    ),
    new Member(
      "Jesse Horne",
      require("../../../assets/team/gabe.jpeg"),
      "Lead Developer"
    ),
    new Member(
      "Emma Gray",
      require("../../../assets/team/emma.png"),
      "Head of Partnerships and Outreach"
    ),
    new Member(
      "Lara Schull",
      require("../../../assets/team/lara.jpeg"),
      "Software Engineer & Communications"
    ),
    new Member(
      "Mark Pekala",
      require("../../../assets/team/markito.jpeg"),
      "Software Engineer"
    ),
    new Member(
      "Xiu Chen",
      require("../../../assets/team/xiu.png"),
      "Software Engineer"
    ),
  ];

  return (
    <div>
      <div className="d-flex flex-column align-items-center py-5">
        <h1 className="text-center font-weight-bold">Team</h1>
        <span>We are lawyers, engineers, students and designers.</span>
        <span>
          But most importanty we are people that believe that everyone impacted
          by incarceration should be able stay in touch with their loved ones.
        </span>

        <div className="d-flex flex-wrap align-items-center w-100 pt-5">
          {members.map(function (member, index) {
            return <MemberCard key={index} member={member} />;
          })}
        </div>
      </div>

      <div className="d-flex flex-column align-items-center py-5">
        <h1 className="text-center font-weight-bold">Ambassadors</h1>
        <span>
          We are a group of families whose lives were impacted by incarceration.
        </span>
        <span>
          And we believe that everyone should have the right stay in touch with
          their loved ones.
        </span>

        <div className="d-flex flex-wrap align-items-center w-100 pt-5">
          {members.map(function (member, index) {
            return <MemberCard key={index} member={member} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
