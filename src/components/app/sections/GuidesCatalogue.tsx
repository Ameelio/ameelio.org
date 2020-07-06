import React, { Component, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./GuidesCatalogue.css";

interface GuideItem {
  abbreviation: string;
  name: string;
}

interface GuidesCatalogueProps {
  items: Array<GuideItem>;
}

const GuidesCatalogue: FunctionComponent<GuidesCatalogueProps> = ({
  items,
}) => {
  const links = items.map((item) => (
    <Link className="blue" to={`/${item.abbreviation}`}>
      {item.name}
    </Link>
  ));

  const catalogue = _.chunk(links, 11).map(function (group) {
    return <div className="d-flex flex-column ml-lg-5">{group}</div>;
  });

  return (
    <div className="d-flex flex-row default-px">
      <span className="font-weight-bold p3">
        Mailing
        <br /> Guides by State
      </span>
      <div className="d-flex flex-column flex-lg-row">{catalogue}</div>
    </div>
  );
};

export default GuidesCatalogue;
