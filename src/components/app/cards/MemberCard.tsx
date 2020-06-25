import React from "react";
import Image from "react-bootstrap/Image";
import "./MemberCard.css";

interface MemberProps {
  name: string;
  caption: string;
  image: string;
}

const MemberCard = (props: MemberProps) => {
  return (
    <div className="d-flex flex-column ml-md-5 mb-md-5 mb-3">
      {/* <Image
        src={props.image}
        alt="Team member"
        roundedCircle
        className="profile-picture"
      /> */}
      <span className="p3">{props.name}</span>
      <span className="p5">{props.caption}</span>
    </div>
  );
};

export default MemberCard;
