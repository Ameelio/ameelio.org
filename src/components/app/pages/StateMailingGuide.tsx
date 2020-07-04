import React, { Component } from "react";
import FacilityGuide from "./FacilityGuide";
import { RouteComponentProps } from "react-router-dom";
import { getStateGuideData, getStateName } from "../../../utils/utils";
import { withRouter } from "react-router-dom";

type FacilityItem = {
  state: string;
  facility: string;
  description: string;
  address: string;
  telephone: string;
  mailing: string;
};

interface FacilityItems extends Array<FacilityItem> {}

type StateMailingGuideState = {
  // region: string,
  items: FacilityItems;
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
      items: [],
      region: this.props.location.pathname.replace("/", ""),
    };
  }

  componentDidMount() {
    const url = getStateGuideData(
      this.props.location.pathname.replace("/", "")
    );

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let batchRowValues = data.valueRanges[0].values;

        let rows: FacilityItem[] = [];

        for (let i = 1; i < batchRowValues.length; i++) {
          let rowObject: FacilityItem = {
            state: "",
            facility: "",
            description: "",
            address: "",
            telephone: "",
            mailing: "",
          };

          for (let j = 0; j < batchRowValues[i].length; j++) {
            rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
          }
          rows.push(rowObject);
        }

        this.setState({ items: rows });
        console.log(this.state.items);
      });
  }

  render() {
    const listItems: JSX.Element[] = this.state.items.map(
      (item: FacilityItem) => (
        <FacilityGuide
          state={item.state}
          facility={item.facility}
          description={item.description}
          address={item.address}
          telephone={item.telephone}
          mailing={item.mailing}
        />
      )
    );

    const state = getStateName(this.state.region);
    return (
      <div>
        <div className="d-flex flex-column p-3">
          <span className="p1 font-weight-bold text-center">
            {state}, Mailing & Visiting
          </span>
        </div>
        <div>{listItems}</div>
      </div>
    );
  }
}

export default withRouter(StateMailingGuide);
