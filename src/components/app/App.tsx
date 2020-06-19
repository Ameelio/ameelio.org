import React from "react";
import "./App.css";

import Landing from "./pages/landing";
import About from "./pages/about";
import GetInvolved from "./getinvolved";
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
      <Switch>
        <Route path="/getinvolved" component={GetInvolved} />
        <Route path="/team" component={Team} />
        <Route exact path="/about" component={About} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
