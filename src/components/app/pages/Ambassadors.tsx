import React from "react";
import MemberCard from "../cards/MemberCard";

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

const Ambassadors: React.FC = () => {
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
        <h1 className="text-center font-weight-bold">Ameelio Ambassadors</h1>
        <span>We are mothers, wives and sisters of the incarcerated.</span>
        <span>
          We fight to connect others to their loved ones for free because of the
          impact it has had on our lives.
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

export default Ambassadors;
