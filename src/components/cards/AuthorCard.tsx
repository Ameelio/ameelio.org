import React from "react";
import Image from "react-bootstrap/Image";
import "./AuthorCard.css";
import Facepile from "src/components/Facepile/Facepile";

interface Props {
  images: string[];
  name: string;
}

export default function AuthorCard({ images, name }: Props) {
  return (
    <div className="d-flex flex-row align-items-center">
      {/* {image.map( image => <Image
        roundedCircle
        src={image}
        className="author-img"
      />)} */}
      <Facepile images={images} />
      <div className="d-flex flex-column ml-4">
        <span className="bold p6">Written by {name}</span>
        <span className="grey p7">Updated July 9, 2020</span>
      </div>
    </div>
  );
}
