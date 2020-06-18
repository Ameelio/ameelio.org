import React from "react";
import Image from "react-bootstrap/Image";
import "./MemberCard.css";
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

interface MemberProps {
  member: Member;
}

const MemberCard = (props: MemberProps) => {
  return (
    <div className="d-flex flex-column ml-5">
      <Image
        src={props.member.img}
        alt="Team member"
        roundedCircle
        className="profile-picture"
      />
      <h3 className="text-center">{props.member.name}</h3>
      <span className="text-center">{props.member.title}</span>
    </div>
  );
};

export default MemberCard;
