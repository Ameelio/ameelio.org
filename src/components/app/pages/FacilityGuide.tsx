import React, { FunctionComponent, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
// import "./FacilityGuide.css";
import { getGuideData } from "../../../utils/utils";
import Spinner from "react-bootstrap/Spinner";
import Facepile from "../facepile/Facepile";
import SummaryCard from "../cards/SummaryCard";
import AuthorCard from "../cards/AuthorCard";

export interface FacilityItem {
  state: string;
  facility: string;
  description: string;
  address: string;
  telephone: string;
  mailing: string;
  route: string;
}

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
  }, [facility, route]);

  // For this use case, dangerouslySetInnerHTML seems safe given that we are the only with edit access to the markup being passed down
  // The flag is primarily to alert users of the vulnearbility to XSS scripting
  // Source: https://stackoverflow.com/questions/46832912/is-dangerouslysetinnerhtml-the-only-way-to-render-html-from-an-api-in-react
  return (
    <div className="d-flex flex-column align-items-center py-5">
      {facility ? (
        <div>
          {" "}
          <p className="lightgray">{facility.state}</p>
          <h1
            dangerouslySetInnerHTML={{ __html: facility.facility }}
            className=""
          />
          <Facepile />
          <hr />
          <AuthorCard />
          <div className="mt-5">
            <SummaryCard locality={facility.facility} />
          </div>
          <section className="mb-3">
            <h2>Physical Address</h2>
            <p dangerouslySetInnerHTML={{ __html: facility.address }} />
          </section>
          <section className="mb-3">
            <h2>Telephone</h2>
            <p dangerouslySetInnerHTML={{ __html: facility.telephone }} />
          </section>
          <section className="mb-3">
            <h2>Mailing Address</h2>
            <div dangerouslySetInnerHTML={{ __html: facility.mailing }} />
          </section>
        </div>
      ) : (
        <div className="vh-100">
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
};

export default FacilityGuide;
