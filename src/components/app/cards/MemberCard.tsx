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
      <Image
        src={props.image}
        alt="Team member"
        roundedCircle
        className="profile-picture"
      />
      <h3 className="text-center">{props.name}</h3>
      <span className="text-center p5">{props.caption}</span>
    </div>
  );
};

export default MemberCard;
