import React from "react";
import Image from "react-bootstrap/Image";
import "./AuthorCard.css";

const AuthorCard = () => {
  return (
    <div className="d-flex flex-row align-items-center">
      <Image
        roundedCircle
        src={require("../../../assets/team/lara.jpeg")}
        className="author-img"
      />
      <div className="d-flex flex-column ml-3">
        <span className="bold p6">Written by Lara Schull</span>
        <span className="grey p7">Updated July 9, 2020</span>
      </div>
    </div>
  );
};
export default AuthorCard;
