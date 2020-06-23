import React, { FunctionComponent, useEffect, useState } from "react";
import "./Navbar.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { trackNav, trackButtonClick } from "../../../utils/analytics";
import { PLACEMENT, LINKS, BUTTON_TYPES } from "../../../utils/constants";

const NavBar: FunctionComponent = () => {
  const nav_logo: string = require("../../../assets/logo.svg");
  const NAV_ITEMS: Array<{ path: string; name: string; key: string }> = [
    { path: "mission", name: "Our Mission", key: "mission" },
    { path: "how-we-work", name: "How it works", key: "walkthrough" },
    { path: "transparency", name: "How it is free", key: "transparency" },
    { path: "team", name: "Team", key: "team" },
    { path: "get-involved", name: "Get Involved", key: "career" },
  ];

  const [signup_clicked, setSignupClicked] = useState(false);
  const [login_clicked, setLoginClicked] = useState(false);

  useEffect(() => {
    if (signup_clicked) {
      trackButtonClick(BUTTON_TYPES.SIGNUP, PLACEMENT.NAV);
      window.open(LINKS.SIGNUP, "_self");
    } else if (login_clicked) {
      trackButtonClick(BUTTON_TYPES.LOGIN, PLACEMENT.NAV);
      window.open(LINKS.LOGIN, "_self");
    }
  });

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand>
        <Link to="/">
          <img
            src={nav_logo}
            width="150px"
            className="d-inline-block align-top"
            alt="Ameelio logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {NAV_ITEMS.map((item) => (
            <Nav.Link
              as={Link}
              to={item.path}
              eventKey={item.name}
              key={item.key}
              onClick={() => trackNav(item.key)}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
        <div className="auth">
          <a
            className="login"
            onClick={() => setLoginClicked(true)}
            href="https://letters.ameelio.org/login"
          >
            Login
          </a>
          <a
            className="signup ml-3"
            href="https://letters.ameelio.org/register"
          >
            <button onClick={() => setSignupClicked(true)}>Sign Up</button>
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
