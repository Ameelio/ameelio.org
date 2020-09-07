import React, { useEffect, ReactElement } from "react";
import "./App.scss";

import Landing from "./pages/landing";
import Mission from "./pages/Mission";
import HowFree from "./pages/HowFree";
import NavBar from "./Navbar/Navbar";
import Team from "./pages/Team";
import Footer from "./footer/Footer";
import HowItWorks from "./pages/HowItWorks";
import GetInvolved from "./pages/GetInvolved";
import ReferralPage from "./pages/ReferralPage";
import Onboarding from "./pages/Onboarding";

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
