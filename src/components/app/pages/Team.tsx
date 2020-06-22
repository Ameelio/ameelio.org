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
      "Fundraising"
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

  const ambassadors: Array<Ambassador> = [
    new Ambassador(
      "Anna Jones",
      require("../../../assets/ambassadors/Anna-Jones-California.png"),
      "California"
    ),
    new Ambassador(
      "Carolyn Vargas",
      require("../../../assets/ambassadors/Carolyn-Vargas-New-York.png"),
      "New York"
    ),
    new Ambassador(
      "Cathy Capalot",
      require("../../../assets/ambassadors/Cathy-Capalot-Kansas.png"),
      "Kansas"
    ),
    new Ambassador(
      "Connie Mcbride",
      require("../../../assets/ambassadors/Connie-Mcbride-Virginia.png"),
      "Virginia"
    ),
    new Ambassador(
      "Dee Westbrook",
      require("../../../assets/ambassadors/Dee-Westbrook-Florida.png"),
      "Florida"
    ),
    new Ambassador(
      "Ellie Simpson",
      require("../../../assets/ambassadors/Ellie-Simpson-Missouri.png"),
      "Missouri"
    ),
    new Ambassador(
      "Jasmine Woods",
      require("../../../assets/ambassadors/Jasmine-Woods-New-York.png"),
      "New York"
    ),
    new Ambassador(
      "Jessica Ruiz",
      require("../../../assets/ambassadors/Jessica-Ruiz-Oklahoma.png"),
      "Oklahoma"
    ),
    new Ambassador(
      "Naomi Keiser",
      require("../../../assets/ambassadors/Naomi-Keiser-Australia.png"),
      "Australia"
    ),
    new Ambassador(
      "Nurul Ithnin",
      require("../../../assets/ambassadors/Nurul-Ithnin-Malaysia.png"),
      "Malaysia"
    ),
    new Ambassador(
      "Rachel Wade",
      require("../../../assets/ambassadors/Rachel-Wade-New-York.png"),
      "New York"
    ),
    new Ambassador(
      "Shelby Love",
      require("../../../assets/ambassadors/Shelby-Love-Florida.png"),
      "Florida"
    ),
    new Ambassador(
      "Telle Guitreau",
      require("../../../assets/ambassadors/Telle-Guitreau-South-Carolina.png"),
      "South Carolina"
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

      <div className="d-flex flex-column align-items-center py-5">
        <h1 className="text-center font-weight-bold">Ambassadors</h1>
        <span>
          We are mothers, wives, fathers, brothers of the incarcerated
        </span>
        <span>
          We fight to connect others to their loved ones for free because of the
          impact it has had on our lives
        </span>

        <div className="d-flex flex-wrap align-items-center w-100 pt-5 justify-content-center">
          {ambassadors.map(function (member, index) {
            return (
              <MemberCard
                key={index}
                name={member.name}
                caption={member.city}
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
