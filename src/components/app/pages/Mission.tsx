import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import Context from "../sections/Context";
import Products from "../sections/Products";
import WhyAmeelio from "../sections/WhyAmeelio";
import { isMobile } from "react-device-detect";

const Mission: React.FC = () => {
  const aspectRatio = isMobile ? "4by3" : "16by9";

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center font-weight-bold bg-blue white rounded px-3 py-1">
        Our Mission
      </h1>
      <ResponsiveEmbed className="rounded my-3 video" aspectRatio={aspectRatio}>
        <iframe
          title="video"
          className="embed-responsive-item"
          frameBorder="50"
          src="https://www.youtube.com/embed/dPQV6RZWcsY"
        ></iframe>
      </ResponsiveEmbed>
      <WhyAmeelio />
      <Context />
      <Products />
    </div>
  );
};

export default Mission;
