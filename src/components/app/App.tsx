import React from "react";
import "./App.css";

import Landing from "./pages/landing";
import About from "./pages/about";
import FAQ from "./faq";
import GetInvolved from "./getinvolved";
import Donate from "./donate";
import NavBar from "./navbar";
import Team from "./pages/Team";
import Footer from "./footer/Footer";

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
      <br />
      <Switch>
        <Route path="/getinvolved" component={GetInvolved} />
        <Route path="/faq" component={FAQ} />
        <Route path="/team" component={Team} />
        <Route path="/donate" component={Donate} />
        <Route exact path="/about" component={About} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
