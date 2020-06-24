import React from "react";
import MemberCard from "../cards/MemberCard";

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
      require("../../../assets/team/jesse.jpeg"),
      "Lead Developer"
    ),
    new Member(
      "Emma Gray",
      require("../../../assets/team/emma.png"),
      "Head of Partnerships and Outreach"
    ),
    new Member(
      "Jenny Lee",
      require("../../../assets/team/jenny.png"),
      "Social Media Manager"
    ),
    new Member(
      "Lara Schull",
      require("../../../assets/team/lara.jpeg"),
      "Fundraising & Software Engineer"
    ),
    new Member(
      "Anthony Perez",
      require("../../../assets/team/tony.jpeg"),
      "Software Engineer"
    ),
    new Member(
      "Nikhil Dharmaraj",
      require("../../../assets/team/nikhil.jpg"),
      "Software Engineer"
    ),
    new Member(
      "Kiran Chokshi",
      require("../../../assets/team/tony.jpeg"),
      "Financial Manager"
    ),
    new Member(
      "Jacob Kovacs",
      require("../../../assets/team/jacob.jpg"),
      "Legal Researcher"
    ),
    new Member(
      "Meher Hans",
      require("../../../assets/team/meher.jpg"),
      "Graphic Designer"
    ),
    new Member(
      "Kevin Zhang",
      require("../../../assets/team/kev.jpg"),
      "Produdct Designer"
    ),
    new Member(
      "Alara Değirmenci",
      require("../../../assets/team/alara.png"),
      "Designer"
    ),
    new Member(
      "Isis Decrem",
      require("../../../assets/team/isis.jpeg"),
      "Social Media Strategist"
    ),
    new Member(
      "Bohan Lou",
      require("../../../assets/team/bohan.jpg"),
      "Fundraising"
    ),
    new Member(
      "Alex Waibel",
      require("../../../assets/team/alex.png"),
      "Technical Team Lead"
    ),
    new Member(
      "Mark Pekala",
      require("../../../assets/team/markito.jpeg"),
      "Software Engineer"
    ),
    new Member(
      "Ivy Hjornevik",
      require("../../../assets/team/ivy.jpeg"),
      "Data Scientist"
    ),
    new Member(
      "Olivia Kramer",
      require("../../../assets/team/olivia.png"),
      "Software Engineer"
    ),
    new Member(
      "Alisa Chokshi",
      require("../../../assets/team/alisa.jpeg"),
      "Growth & Customer Success"
    ),
    new Member(
      "Elizabeth Levin",
      require("../../../assets/team/liz.jpg"),
      "Legal Research & Policy"
    ),
    new Member(
      "Owen Niles",
      require("../../../assets/team/owen.jpg"),
      "Software Engineer"
    ),
    // new Member(
    //   "Sarah Yoon",
    //   require("../../../assets/team/sarah.jpg"),
    //   "Software Engineer"
    // ),
    new Member(
      "Joyce Wu",
      require("../../../assets/team/joyce.jpg"),
      "Software Engineer"
    ),
    new Member(
      "Xiu Chen",
      require("../../../assets/team/xiu.png"),
      "Software Engineer"
    ),
    new Member(
      "Jordan Ashby",
      require("../../../assets/team/jordan.jpg"),
      "Outreach"
    ),
    new Member(
      "David Lilienfield",
      require("../../../assets/team/david.jpg"),
      "Corporate Development "
    ),
    new Member(
      "Adam Sarsony",
      require("../../../assets/team/adam.jpg"),
      "Software Engineer"
    ),
    new Member(
      "Rachel Troy",
      require("../../../assets/team/rachel.png"),
      "Fundraising"
    ),
    new Member(
      "Sophia Dai",
      require("../../../assets/team/sophia.jpg"),
      "Software Engineer"
    ),
    new Member(
      "Christopher Raiford",
      require("../../../assets/team/chris.png"),
      "Fundraising"
    ),
  ];

  return (
    <div>
      <div className="d-flex flex-column align-items-center py-5 px-5 text-center">
        <h1 className=" font-weight-bold">Team</h1>
        <span>We are lawyers, engineers, students and designers.</span>
        <span>
          But most importanty we are people that believe that everyone impacted
          by incarceration should be able stay in touch with their loved ones.
        </span>

        <div className="d-flex flex-wrap align-items-center w-100 pt-5 justify-content-center">
          {members.map(function (member, index) {
            return (
              <MemberCard
                key={index}
                name={member.name}
                caption={member.title}
                image={member.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
