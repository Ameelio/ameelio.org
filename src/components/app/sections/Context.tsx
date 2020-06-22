import React from "react";
import "./Context.css";

const Context: React.FC = () => {
  // const country_map: any = require("../../assets/united_states.png");
  const quote_left: any = require("../../../assets/quote-left.png");
  const quote_right: any = require("../../../assets/quote-right.png");
  return (
    <div className="context-wrapper">
      <div className="context-container">
        <div className="context-title">Why this matters</div>
        <div className="context-body-1">
          <div>
            <div className="rectangle-large"></div>
            <div className="context-category-title">Who</div>
            <div className="context-category-body-1">1 in 2 Americans</div>
            <div className="context-category-body-2">
              impacted by incarceration
            </div>
            <div className="context-category-footer">FFW</div>
          </div>
        </div>
        <div className="context-body-2 flex-md-row">
          <div className="context-body-2-col">
            <div className="rectangle-small"></div>
            <div className="context-category-title">Distance</div>
            <br></br>
            <div className="context-category-body-1">63%</div>
            <div className="context-category-body-2">
              locked up over 100 miles from their families
            </div>
            <br></br>
            <div className="context-category-footer mb-3 mb-md-0">PPI</div>
          </div>
          <div className="context-body-2-col">
            <div className="rectangle-small"></div>
            <div className="context-category-title">Cost</div>
            <br></br>
            <div className="context-category-body-1">up to $25</div>
            <div className="context-category-body-2">
              for a 15 minute phone call to a loved one outside
            </div>
            <br></br>
            <div className="context-category-footer mb-3 mb-md-0">PPI</div>
          </div>
          <div className="context-body-2-col">
            <div className="rectangle-small"></div>
            <div className="context-category-title">Tradeoff</div>
            <br></br>
            <div className="context-category-body-1">2 in 3</div>
            <div className="context-category-body-2">
              families with incarcerated loved ones unable to meet basic needs
            </div>
            <br></br>
            <div className="context-category-footer mb-3 mb-md-0">
              Ella Baker
            </div>
          </div>
        </div>
        <div className="context-footer">
          <img className="context-footer-left-quote" src={quote_left} alt="" />
          <div className="context-footer-text p3">
            Research shows that close and positive family relationships during
            incarceration reduce recidivism ... and ease the harm to family
            members separated from their loved ones. – US Dept. of Justice
          </div>
          <img
            className="context-footer-right-quote"
            src={quote_right}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Context;
