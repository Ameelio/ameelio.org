import React from "react";
import "./App.css";

import Landing from "./pages/landing";
import Mission from "./pages/Mission";
import HowFree from "./pages/HowFree";
import NavBar from "../Navbar/Navbar";
import Team from "./pages/Team";
import Footer from "./footer/Footer";
import HowItWorks from "./pages/HowItWorks";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <br />
      <Switch>
        <Route path="/how-we-work" component={HowItWorks} />
        <Route path="/transparency" component={HowFree} />
        {/* <Route path="/getinvolved" component={GetInvolved} /> */}

        <Route path="/team" component={Team} />
        <Route exact path="/mission" component={Mission} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
