import React from "react";
import "./App.css";

import Landing from "./pages/Landing";
import Mission from "./pages/Mission";
import HowFree from "./pages/HowFree";
import NavBar from "./Navbar/Navbar";
import Team from "./pages/Team";
import Footer from "./footer/Footer";
import HowItWorks from "./pages/HowItWorks";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <br />
      <Switch>
        <Route
          path={process.env.PUBLIC_URL + "/how-we-work"}
          component={HowItWorks}
        />
        <Route
          path={process.env.PUBLIC_URL + "/transparency"}
          component={HowFree}
        />
        <Route path={process.env.PUBLIC_URL + "/team"} component={Team} />
        <Route path={process.env.PUBLIC_URL + "/mission"} component={Mission} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
