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
import ReactPixel from "react-facebook-pixel";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { trackPageOpen, load, page } from "../../utils/analytics";

if (process.env.REACT_APP_PIXEL_KEY) {
  ReactPixel.init(process.env.REACT_APP_PIXEL_KEY);
  ReactPixel.pageView();
}

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
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
