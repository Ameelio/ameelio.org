import React from "react";
import Image from "react-bootstrap/Image";
import "./MemberCard.css";

interface MemberProps {
  name: string;
  caption: string;
  displayImage: boolean;
  image: string;
}

const MemberCard = (props: MemberProps) => {
  return (
    <div className="d-flex flex-column ml-md-3 mb-md-5 mb-3">
      {props.displayImage ? (
        <Image
          src={props.image}
          alt="Team member"
          className="profile-picture"
        />
      ) : (
        <div />
      )}

      <span className="p4 font-weight-bold">{props.name}</span>
      <span className="p5">{props.caption}</span>
    </div>
  );
};

export default MemberCard;
