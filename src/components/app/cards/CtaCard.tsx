import React, { FunctionComponent } from "react";
import { Home, Send, Heart } from "react-feather";
import "./CtaCard.css";
import Button from "react-bootstrap/Button";

const CtaCard: FunctionComponent = () => {
  return (
    <div className="cta-card-wrapper">
      <span className="font-weight-bold p4">
        A nonprofit that helps you stay in touch with your loved one for free.
      </span>

      <div className="d-flex flex-row mt-3">
        <Send className="blue" size={48} />
        <p className="ml-3">
          We've helped <b>{process.env.REACT_APP_FAMILY_COUNT}</b> families send
          over <b>20,000</b> letters.
        </p>
      </div>
      <div className="d-flex flex-row mt-3">
        <Home className="blue" size={48} />
        <p className="ml-3">
          We serve all jails, facilities and detention centers.
        </p>
      </div>
      <div className="d-flex flex-row mt-3">
        <Heart className="blue" size={48} />
        <p className="ml-3">
          Our <b>award winning</b> nonprofit's help is 100% free.
        </p>
      </div>
      <Button className="bg-blue" size="lg" block>
        Get Started
      </Button>
    </div>
  );
};
export default CtaCard;
