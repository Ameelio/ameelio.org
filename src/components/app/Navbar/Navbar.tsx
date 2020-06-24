import React, { FunctionComponent, useEffect, useState } from "react";
import "./Navbar.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { trackNav, trackButtonClick } from "../../../utils/analytics";
import { PLACEMENT, LINKS, BUTTON_TYPES } from "../../../utils/constants";
import { isMobile } from "react-device-detect";

const NavBar: FunctionComponent = () => {
  const nav_logo: string = require("../../../assets/logo.svg");
  const NAV_ITEMS: Array<{ path: string; name: string; key: string }> = [
    { path: "mission", name: "Our Mission", key: "mission" },
    { path: "how-we-work", name: "How it works", key: "walkthrough" },
    { path: "transparency", name: "How it is free", key: "transparency" },
  ];

  const NAV_DROPDOWN_ITEMS: Array<{
    path: string;
    name: string;
    key: string;
  }> = [
    { path: "team", name: "Team", key: "team" },
    { path: "ambassadors", name: "Ambassadors", key: "ambassadors" },
    { path: "get-involved", name: "Get Involved", key: "career" },
  ];

  const [signup_clicked, setSignupClicked] = useState(false);
  const [login_clicked, setLoginClicked] = useState(false);
  const [donate_clicked, setDonateClicked] = useState(false);

  useEffect(() => {
    if (signup_clicked) {
      trackButtonClick(BUTTON_TYPES.SIGNUP, PLACEMENT.NAV);
      window.open(LINKS.SIGNUP, "_self");
    } else if (login_clicked) {
      trackButtonClick(BUTTON_TYPES.LOGIN, PLACEMENT.NAV);
      window.open(LINKS.LOGIN, "_self");
    } else if (donate_clicked) {
      trackButtonClick(BUTTON_TYPES.DONATE, PLACEMENT.NAV);
      window.open(LINKS.DONATION, "_self");
    }
  });
  const donate_className = isMobile ? "" : "btn secondary-btn";
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

          <NavDropdown title="Team" id="basic-nav-dropdown">
            {NAV_DROPDOWN_ITEMS.map((item) => (
              <NavDropdown.Item
                as={Link}
                to={item.path}
                eventKey={item.name}
                key={item.key}
                onClick={() => trackNav(item.key)}
              >
                {item.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>

          <Nav.Link
            className={donate_className}
            onClick={() => setDonateClicked(true)}
          >
            Donate
          </Nav.Link>
          {isMobile ? <NavDropdown.Divider /> : <div></div>}
        </Nav>

        <div className="d-flex flex-column flex-md-row">
          <Nav.Link className="login" onClick={() => setLoginClicked(true)}>
            Login
          </Nav.Link>
          <button
            className="signup-button ml-md-3 mr-5"
            onClick={() => setSignupClicked(true)}
          >
            Sign Up
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
