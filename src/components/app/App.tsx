import React from "react";
import "./App.css";

import Landing from "./landing";
import About from "./about";
import FAQ from "./faq";
import GetInvolved from "./getinvolved";
import Donate from "./donate";
import NavBar from "./navbar";
import Team from "./pages/Team";

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
        <Route path="/about" component={About} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
