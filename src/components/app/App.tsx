import React from "react";
import "./App.css";

import Landing from "./pages/Landing";
import Mission from "./pages/Mission";
import GetInvolved from "./getinvolved";
import NavBar from "../Navbar/Navbar";
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
        <Route exact path="/mission" component={Mission} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
