import React from "react";
import { Send, Heart, Coffee } from "react-feather";
import "./CtaCard.css";
import Button from "react-bootstrap/Button";

export default function CtaCard() {
  return (
    <div className="cta-card-wrapper">
      <span className="font-weight-bold p4">
        Human connection should be free.
      </span>

      <div className="d-flex flex-row mt-3">
        <Send className="blue flex-shrink-0" size={24} />
        <p className="ml-3">
          We've helped more than <b>10,000</b> families send over <b>40,000</b>{" "}
          letters.
        </p>
      </div>
      <div className="d-flex flex-row mt-3">
        <Heart className="blue flex-shrink-0" size={24} />
        <p className="ml-3">
          By giving us $3, we can fund a month worth of letters for an entire
          family.
        </p>
      </div>
      <div className="d-flex flex-row mt-3">
        <Coffee className="blue flex-shrink-0" size={24} />
        <p className="ml-3">The price of a coffee is all we need.</p>
      </div>
      <Button className="bg-blue" size="lg" block>
        Donate
      </Button>
    </div>
  );
}
