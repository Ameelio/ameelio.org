import React, { useEffect } from "react";
import "./App.css";

import Landing from "./pages/Landing";
import Mission from "./pages/Mission";
import HowFree from "./pages/HowFree";
import NavBar from "./Navbar/Navbar";
import Team from "./pages/Team";
import Footer from "./footer/Footer";
import HowItWorks from "./pages/HowItWorks";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { trackPageOpen, load } from "../../utils/analytics";

const App: React.FC = () => {
  useEffect(() => {
    load();
    trackPageOpen();
  }, []);

  return (
    <Router>
      <NavBar />
      <br />
      <Switch>
        <Route path="/how-we-work" component={HowItWorks} />
        <Route path="/transparency" component={HowFree} />
        <Route path="/team" component={Team} />
        <Route path="/mission" component={Mission} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
