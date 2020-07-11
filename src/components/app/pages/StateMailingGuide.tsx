import React, { Component } from "react";
import { FacilityItem } from "./FacilityGuide";
import { RouteComponentProps } from "react-router-dom";
import { getGuideData, getStateName } from "../../../utils/utils";
import { Link, withRouter } from "react-router-dom";
import _ from "lodash";
import Facepile from "../facepile/Facepile";
import SummaryCard from "../cards/SummaryCard";
import AuthorCard from "../cards/AuthorCard";
import CtaCard from "../cards/CtaCard";
interface FacilityItems extends Array<FacilityItem> {}

type StateMailingGuideState = {
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

    const links = this.state.facilities.map((item) => (
      <Link
        key={item.route}
        className="blue p5"
        to={{ pathname: `${url}/${item.route}`, state: { data: item } }}
      >
        {item.facility}
      </Link>
    ));

    const catalogue = _.chunk(links, 10).map(function (group) {
      return <div className="d-flex flex-column mr-lg-5">{group}</div>;
    });

    const state = getStateName(this.state.region);
    return (
      <div className="default-px d-flex">
        <div>
          <div className="d-flex flex-column">
            <span className="p4 lightgrey">{state}</span>
            <span className="p1 font-weight-bold">
              {state}, Mailing & Visiting
            </span>
            <Facepile />
            <hr className="mb-3" />
            <AuthorCard />
          </div>
          <div className="mt-5">
            <SummaryCard locality={state} />
          </div>
          <div className="d-flex flex-column flex-lg-row">{catalogue}</div>
        </div>
        <div className="w-33 vh-100">
          <div className="d-flex flex-column mt-5 ml-5 position-sticky top-2">
            <CtaCard />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StateMailingGuide);
