import React, { FunctionComponent, useEffect, useState } from "react";
import "./Navbar.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { trackNav, trackButtonClick } from "src/utils/analytics";
import { PLACEMENT, LINKS, BUTTON_TYPES } from "src/utils/constants";
import { ReactComponent as Logo } from "src/assets/logo.svg";
import { isMobile } from "react-device-detect";

const NavBar: FunctionComponent = () => {
  const NAV_ITEMS: Array<{ path: string; name: string; key: string }> = [
    { path: "mission", name: "Our Mission", key: "mission" },
    { path: "how-we-work", name: "How We Work", key: "walkthrough" },
    { path: "transparency", name: "How Are We Free", key: "transparency" },
    { path: "team", name: "Team", key: "team" },
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
          <Logo />
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
