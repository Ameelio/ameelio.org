import React, { ReactElement, useEffect, useState } from "react";
import "./Navbar.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { trackNav, trackButtonClick } from "src/utils/analytics";
import { PLACEMENT, LINKS, BUTTON_TYPES } from "src/utils/constants";
import Logo from "src/assets/logo.svg";
import { isMobile } from "react-device-detect";
import Image from "react-bootstrap/Image";

interface Props {
  showMenuItems?: boolean;
}
export default function NavBar({ showMenuItems }: Props): ReactElement {
  const NAV_ITEMS: Array<{ path: string; name: string; key: string }> = [
    { path: "mission", name: "Our Mission", key: "mission" },
    { path: "how-we-work", name: "How We Work", key: "walkthrough" },
    { path: "transparency", name: "How Are We Free", key: "transparency" },
    { path: "team", name: "Team", key: "team" },
    { path: "organizations", name: "For Organizations", key: "orgs" },
  ];

  const history = useHistory();

  const [loginClicked, setLoginClicked] = useState(false);
  const [donateClicked, setDonateClicked] = useState(false);

  useEffect(() => {
    if (loginClicked) {
      trackButtonClick(BUTTON_TYPES.LOGIN, PLACEMENT.NAV);
      window.open(LINKS.LOGIN, "_self");
    } else if (donateClicked) {
      trackButtonClick(BUTTON_TYPES.DONATE, PLACEMENT.NAV);
      window.open(LINKS.DONATION, "_self");
    }
  });

  const donateClassName = isMobile ? "" : "btn secondary-btn";
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
          <Image src={Logo} width="150" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {showMenuItems && (
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
              className={donateClassName}
              onClick={() => setDonateClicked(true)}
            >
              Donate
            </Nav.Link>
            {isMobile ? <NavDropdown.Divider /> : null}
          </Nav>

          <div className="d-flex flex-column flex-md-row">
            <Nav.Link className="" onClick={() => setLoginClicked(true)}>
              Login
            </Nav.Link>
            <Button
              className="ml-md-3 mr-5 mt-3 "
              onClick={() => {
                trackButtonClick(BUTTON_TYPES.SIGNUP, PLACEMENT.NAV);
                history.push("/signup");
              }}
            >
              Sign Up
            </Button>
          </div>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}
