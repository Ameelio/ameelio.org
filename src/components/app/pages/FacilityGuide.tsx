import React, { FunctionComponent, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
// import "./FacilityGuide.css";
import { getGuideData } from "../../../utils/utils";

export interface FacilityItem {
  state: string;
  facility: string;
  description: string;
  address: string;
  telephone: string;
  mailing: string;
  route: string;
}

interface FacilityGuideProps extends RouteComponentProps<FacilityItem> {}

const FacilityGuide = ({
  location,
}: RouteComponentProps<{}, any, FacilityItem | any>) => {
  const [facility, setFacility] = useState(
    location.state ? location.state.data : null
  );
  const [route, _] = useState(location.pathname.split("/")[2]);

  useEffect(() => {
    async function fetchData() {
      const data = await getGuideData(route, "facility");

      setFacility(data.length > 0 ? data[0] : null);
    }
    if (!facility) {
      fetchData();
    }
  }, [facility, route]); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  // For this use case, dangerouslySetInnerHTML seems safe given that we are the only ones controlling the data source passed down to
  // The flag is primarily to alert users of the vulnearbility to XSS scripting
  // Source: https://stackoverflow.com/questions/46832912/is-dangerouslysetinnerhtml-the-only-way-to-render-html-from-an-api-in-react
  return (
    <div className="d-flex flex-column align-items-center">
      {facility ? (
        <div>
          {" "}
          <h1
            className="text-center"
            dangerouslySetInnerHTML={{ __html: facility!.facility }}
          />
          <section>
            <h2>Physical Address</h2>
            <p
              className="text-center"
              dangerouslySetInnerHTML={{ __html: facility!.address }}
            />
          </section>
          <section>
            <h2>Telephone</h2>
            <p
              className="text-center"
              dangerouslySetInnerHTML={{ __html: facility!.telephone }}
            />
          </section>
          <section>
            <h2>Mailing Address</h2>
            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: facility!.mailing }}
            />
          </section>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default FacilityGuide;
