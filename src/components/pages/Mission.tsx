import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import Context from "../sections/Context";
import Products from "../sections/Products";
import WhyAmeelio from "src/components/sections/WhyAmeelio";
import { isMobile } from "react-device-detect";

import AuthorCard from "src/components/cards/AuthorCard";
import Gabe from "src/assets/Team/Gabe.png";
import Zo from "src/assets/Team/Zo.png";

const Mission: React.FC = () => {
  const aspectRatio = isMobile ? "4by3" : "16by9";

  return (
    <div className="d-flex flex-column justify-content-center align-items-center sub-page">
      <h1 className="text-center font-weight-bold">Our Mission</h1>
      <AuthorCard
        images={[Zo, Gabe]}
        name="Zo Orchingwa & Gabe Saruhashi"
        lastUpdatedAt="August 16, 2020"
      />
      <hr className="mb-3" />
      <div className="d-flex flex-column text-center default-px mt-3">
        <span className="mb-5 p4 text-break">
          We’re here to decouple incarceration and profit, and combat mass
          incarceration.
        </span>

        <span>
          Nearly{" "}
          <span className="bg-darkblue white px-1 font-weight-bold">
            one in two Americans
          </span>{" "}
          has a family member who has experienced incarceration. When a loved
          one is imprisoned, staying in touch is vital. Yet prison
          communications options remain prohibitively expensive. Our free
          communications alternatives will decouple prisons from profit and
          build community.
        </span>
      </div>

      <ResponsiveEmbed
        className="rounded mb-3 mt-5 video"
        aspectRatio={aspectRatio}
      >
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
