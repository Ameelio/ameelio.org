import React from "react";
import "./stylesheets/testimonials.css";

const Testimonials: React.FC = () => {
  const quotes: any = require("../../assets/large_quote.png");
  const photo: any = require("../../assets/sarah_doe.png");
  return (
    <div className="testimonials-wrapper">
      <img className="quote-image" src={quotes} alt="" />
      <div className="quote-text">
        This is the most amazing blessing I could <br></br>
        have received. It costs so much money for <br></br>
        phone calls and I have to sacrifice one or <br></br>
        more basic needs to pay.
      </div>
      <div className="quote-footer">
        <div className="quote-author-text">- Sarah Doe</div>
        <img className="quote-author-image" src={photo} alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
