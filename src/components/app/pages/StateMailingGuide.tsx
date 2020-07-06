import React, { Component } from "react";
import FacilityGuide, { FacilityItem } from "./FacilityGuide";
import { RouteComponentProps } from "react-router-dom";
import { getGuideData, getStateName } from "../../../utils/utils";
import { Link, withRouter, useRouteMatch } from "react-router-dom";
import GuideCatalogue from "../sections/GuidesCatalogue";
import _ from "lodash";

interface FacilityItems extends Array<FacilityItem> {}

type StateMailingGuideState = {
  // region: string,
  facilities: FacilityItems;
  region: string;
};

type TParams = {
  region: string;
};

class StateMailingGuide extends Component<
  RouteComponentProps<TParams>,
  StateMailingGuideState
> {
  constructor(props) {
    super(props);
    this.state = {
      facilities: [],
      region: this.props.location.pathname.replace("/", ""),
    };
  }

  async componentDidMount() {
    const data = await getGuideData(
      this.props.match.url.replace("/", ""),
      "state"
    );
    this.setState({ facilities: data });
  }

  render() {
    const { url } = this.props.match;

    console.log(this.state.facilities);
    const links = this.state.facilities.map((item) => (
      // to={{ pathname: `${url}/${item.route}`, state: { foo: 'bar'} }}
      <Link
        key={item.route}
        className="blue"
        to={{ pathname: `${url}/${item.route}`, state: { data: item } }}
      >
        {item.facility}
      </Link>
    ));

    const catalogue = _.chunk(links, 7).map(function (group) {
      return <div className="d-flex flex-column ml-lg-5">{group}</div>;
    });

    const state = getStateName(this.state.region);
    return (
      <div>
        <div className="d-flex flex-column p-3">
          <span className="p1 font-weight-bold text-center">
            {state}, Mailing & Visiting
          </span>
        </div>
        <div className="d-flex flex-column flex-lg-row">{catalogue}</div>
        {/* <div>{listItems}</div> */}
      </div>
    );
  }
}

export default withRouter(StateMailingGuide);
