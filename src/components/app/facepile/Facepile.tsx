import React from "react";
import Image from "react-bootstrap/Image";
import "./Facepile.css";
import { Link } from "react-router-dom";

const Facepile = () => {
  const images = [
    require("../../../assets/ambassadors/Anna-Jones-California.png"),
    require("../../../assets/ambassadors/Carolyn-Vargas-New-York.png"),
    require("../../../assets/ambassadors/Connie-Mcbride-Virginia.png"),
    require("../../../assets/ambassadors/Jessica-Ruiz-Oklahoma.png"),
    require("../../../assets/ambassadors/Rachel-Wade-New-York.png"),
  ];

  return (
    <div className="d-flex flex-row align-items-center">
      {images.map((img) => (
        <Image src={img} roundedCircle className="facepile-img" />
      ))}
      <span className="ml-3 facepile-caption">
        <b>{process.env.REACT_APP_FAMILY_COUNT}</b> families have sent free
        letters to their loved ones using Ameelio.{" "}
        <Link className="blue facepile-caption" to="/">
          Learn More
        </Link>
      </span>
    </div>
  );
};

export default Facepile;
