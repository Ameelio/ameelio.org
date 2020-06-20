import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import Context from "../context";
import Products from "../products";

const Mission: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center font-weight-bold bg-blue white rounded px-3 py-1">
        Our Mission
      </h1>
      <ResponsiveEmbed className="w-50 rounded my-5 " aspectRatio="16by9">
        <iframe
          title="video"
          className="embed-responsive-item"
          frameBorder="25"
          src="https://www.youtube.com/embed/dPQV6RZWcsY"
        ></iframe>
      </ResponsiveEmbed>
      <span className="py-5">Here is our mission</span>
      <Products />
      <Context />
    </div>
  );
};

export default Mission;
