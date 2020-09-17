import React, { ReactElement } from "react";
import { Button, Image } from "react-bootstrap";
import OrgsHeroMockup from "src/assets/OrgsHero/Mockup.png";
import Background from "src/assets/OrgsHero/Background.svg";
import "./Hero.css";
import { trackButtonClick } from "src/utils/analytics";
import { BUTTON_TYPES, LINKS, PLACEMENT } from "src/utils/constants";

export default function Hero(): ReactElement {
  const handleClick = () => {
    trackButtonClick(BUTTON_TYPES.ORGS_DEMO, PLACEMENT.HERO);
    window.open(LINKS.ORGS_DEMO, "_blank");
  };
  return (
    <div className="d-flex flex-column blue-200-bg  w-100 justify-content-center align-items-center">
      <div className="d-flex flex-column flex-md-row align-items-center mw-100  mt-5 mt-md-0">
        <div className="d-flex flex-column hero-value-prop mx-3">
          <h1 className="font-weight-bold dark hero-title">
            Save time and amplify your impact
          </h1>
          <span className="mt-1 dark hero-subtitle">
            Focus on what matters. We'll help you manage your mailing,
            volunteers & incarcerated contacts.
          </span>
          <div>
            <Button size="lg" className="mt-4" onClick={handleClick}>
              Request Demo
            </Button>
          </div>
        </div>
        <div data-aos="zoom-out-down">
          <Image
            src={OrgsHeroMockup}
            className="hero-illustration zoom-out-down"
          />
        </div>
      </div>
      <Image src={Background} className="w-100 hero-bg" />
    </div>
  );
}
