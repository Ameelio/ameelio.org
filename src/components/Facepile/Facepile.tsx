import React, { ReactElement } from "react";
import Image from "react-bootstrap/Image";
import "./Facepile.css";
import { Link } from "react-router-dom";

interface Props {
  images: string[];
}

export default function Facepile({ images }: Props): ReactElement {
  return (
    <div className="d-flex flex-row">
      {images.map((img) => (
        <Image src={img} roundedCircle className="author-img facepile-img" />
      ))}
    </div>
  );
}
