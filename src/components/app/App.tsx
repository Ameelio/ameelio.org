import React, { useEffect } from "react";
import "./App.css";

import Landing from "./pages/landing";
import Mission from "./pages/Mission";
import HowFree from "./pages/HowFree";
import NavBar from "./Navbar/Navbar";
import Team from "./pages/Team";
import Footer from "./footer/Footer";
import HowItWorks from "./pages/HowItWorks";
import Ambassadors from "./pages/Ambassadors";
import GetInvolved from "./pages/GetInvolved";
import StateMailingGuide from "./pages/StateMailingGuide";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { trackPageOpen, load, page } from "../../utils/analytics";
import { US_STATES } from "../../utils/us_states";
import FacilityGuide from "./pages/FacilityGuide";

const App: React.FC = () => {
  useEffect(() => {
    load();
    trackPageOpen();
    page();
  }, []);

  return (
    <Router>
      <NavBar />
      <br />
      <Switch>
        <Route path="/how-we-work" component={HowItWorks} />
        <Route path="/transparency" component={HowFree} />
        <Route path="/team" component={Team} />
        <Route path="/ambassadors" component={Ambassadors} />
        <Route path="/mission" component={Mission} />
        <Route path="/get-involved" component={GetInvolved} />
        {US_STATES.map((item) => (
          <Route
            key={item.abbreviation}
            path={`/${item.abbreviation}`}
            exact
            component={StateMailingGuide}
          />
        ))}
        {US_STATES.map((item) => (
          <Route
            key={item.abbreviation}
            path={`/${item.abbreviation}/:facilityName`}
            component={FacilityGuide}
          />
        ))}
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
