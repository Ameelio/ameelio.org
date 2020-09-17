import React from "react";
import "./AuthorCard.css";
import Facepile from "src/components/Facepile/Facepile";

interface Props {
  images: string[];
  name: string;
  lastUpdatedAt: string;
}

export default function AuthorCard({ images, name, lastUpdatedAt }: Props) {
  return (
    <div className="d-flex flex-row align-items-center">
      <Facepile images={images} />
      <div className="d-flex flex-column ml-4">
        <span className="bold p6">Written by {name}</span>
        <span className="grey p7">Updated {lastUpdatedAt}</span>
      </div>
    </div>
  );
}
