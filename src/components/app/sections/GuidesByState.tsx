import React, { Component, FunctionComponent } from "react";
import { US_STATES } from "../../../utils/us_states";
import { Link } from "react-router-dom";
import _ from "lodash";

const GuidesByState: FunctionComponent = () => {
  let states = US_STATES.map((item) => (
    <Link className="blue" to={`/${item.abbreviation}`}>
      {item.name}
    </Link>
  ));
  let lists = _.chunk(states, 11).map(function (group) {
    return <div className="d-flex flex-column ml-lg-5">{group}</div>;
  });
  console.log(states);
  console.log(lists);
  return (
    <div className="d-flex flex-row default-px">
      <span className="font-weight-bold p3">
        Mailing
        <br /> Guides by State
      </span>
      <div className="d-flex flex-column flex-lg-row">{lists}</div>
    </div>
  );
};

export default GuidesByState;
