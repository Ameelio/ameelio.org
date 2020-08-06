import React from "react";
import MemberCard from "../cards/MemberCard";
import BoardCard from "../cards/BoardCard";
import Ambassadors from "../pages/Ambassadors";
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

class Board {
  name: string;
  title: string;
  company: string;

  constructor(name: string, title: string, company: string) {
    this.name = name;
    this.title = title;
    this.company = company;
  }
}

class Ambassador {
  name: string;
  img: string;
  city: string;

  constructor(name: string, url: string, city: string) {
    this.name = name;
    this.img = url;
    this.city = city;
  }
}

const Team: React.FC = () => {
  const board_members = [
    new Board("Adryann Glenn", "Founder", "Align Community"),
    new Board("Angel Steger", "Director of Product Design", "Facebook"),
    new Board(
      "Jan Jedrzejowicz",
      "Senior Product Manager",
      "Google Communication"
    ),
    new Board("Shane Rogers", "Attorney", "Covington"),
  ];

  const members = [
    new Member(
      "Zo Orchingwa",
      require("../../../assets/team/zo.png"),
      "Co-Founder"
    ),
    new Member(
      "Gabe Saruhashi",
      require("../../../assets/team/gabe.jpeg"),
      "Co-Founder"
    ),
    new Member(
      "Emma Gray",
      require("../../../assets/team/emma.jpg"),
      "Partnerships & Outreach"
    ),
    // new Member(
    //   "Jesse Horne",
    //   require("../../../assets/team/jesse.png"),
    //   "Engineering"
    // ),
    new Member(
      "Jenny Lee",
      require("../../../assets/team/jenny.JPG"),
      "Social Media"
    ),
    new Member(
      "Lara Schull",
      require("../../../assets/team/lara.jpg"),
      "Communications & Engineering"
    ),
  ];

  return (
    <div>
      <div className="d-flex flex-column align-items-center py-5 px-5 text-center">
        <section className="d-flex flex-column align-items-center">
          <h1 className="font-weight-bold darkblue">Our Founding Team</h1>
          <span>
            We are engineers, data scientists, lawyers, designers, and
            researchers.
          </span>
          <span>
            But most importantly, we are people who believe that everyone
            impacted by incarceration should be able to stay in touch with their
            loved ones.
          </span>

          <div className="d-flex flex-wrap align-items-center w-75 pt-5 justify-content-center">
            {members.map(function (member, index) {
              return (
                <MemberCard
                  key={index}
                  name={member.name}
                  caption={member.title}
                  displayImage={true}
                  image={member.img}
                />
              );
            })}
          </div>
        </section>
        <Ambassadors />
        <section>
          {/* <h1 className="font-weight-bold darkblue">Our Board</h1> */}
          {/* <div className="d-flex flex-wrap align-items-center w-100 pt-5 justify-content-center">
            {board_members.map(function (member, index) {
              return (
                <BoardCard
                  key={index}
                  name={member.name}
                  title={member.title}
                  company={member.company}
                />
              );
            })}
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Team;
