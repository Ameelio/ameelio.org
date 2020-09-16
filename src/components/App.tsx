import React, { useEffect, ReactElement } from "react";
import "./App.scss";

import Landing from "src/pages/landing";
import Mission from "src/pages/Mission";
import HowFree from "src/pages/HowFree";
import NavBar from "src/components/Navbar/Navbar";
import Team from "src/pages/Team";
import Footer from "src/components/Footer/Footer";
import HowItWorks from "src/pages/HowItWorks";
import GetInvolved from "src/pages/GetInvolved";
import ReferralPage from "src/pages/ReferralPage";
import Onboarding from "src/pages/Onboarding";

import ReactPixel from "react-facebook-pixel";
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { trackPageOpen, load, page } from "src/utils/analytics";

import { RouteComponentProps } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";
import LettersOrgs from "src/pages/LettersOrgs";

if (process.env.REACT_APP_PIXEL_KEY) {
  ReactPixel.init(process.env.REACT_APP_PIXEL_KEY);
  ReactPixel.pageView();
}

const Main = withRouter(({ location }: RouteComponentProps) => {
  console.log(location);
  return (
    <div>
      <NavBar
        showMenuItems={
          !!(
            location.pathname !== "/signup" &&
            location.pathname.indexOf("/join") === -1
          )
        }
      />
      <Route exact path="/" component={Landing} />
      <Route path="/how-we-work" component={HowItWorks} />
      <Route path="/transparency" component={HowFree} />
      <Route path="/team" component={Team} />
      <Route path="/mission" component={Mission} />
      <Route path="/get-involved" component={GetInvolved} />
      <Route path="/join/:id" component={ReferralPage} />
      <Route path="/signup" component={Onboarding} />
      <Route path="/organizations" component={LettersOrgs} />
    </div>
  );
});

export default function App(): ReactElement {
  useEffect(() => {
    AOS.init();
    load();
    trackPageOpen();
    page();
  }, []);

  return (
    <Router>
      <Switch>
        <Main />
      </Switch>
      <Footer />
    </Router>
  );
}
