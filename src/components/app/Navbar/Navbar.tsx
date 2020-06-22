import React, { FunctionComponent } from "react";
import "./Navbar.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar: FunctionComponent = () => {
  const nav_logo: string = require("../../../assets/logo.svg");

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="/">
        <img
          src={nav_logo}
          width="150px"
          // height="15%"
          className="d-inline-block align-top"
          alt="Ameelio logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/mission">Our Mission</Nav.Link>
          <Nav.Link href="/how-we-work">How it works</Nav.Link>
          <Nav.Link href="/transparency">How it is free</Nav.Link>
          {/* <Nav.Link href="/team">Team</Nav.Link> */}
          <NavDropdown title="Team" id="nav-dropdown">
            <NavDropdown.Item href="/team">Team</NavDropdown.Item>
            <NavDropdown.Item href="/#careers">Get Involved</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/#orgs">For Organizations</Nav.Link>
          <Nav.Link
            className="btn secondary-btn"
            href="https://letters.ameelio.org/donate"
          >
            Donate
          </Nav.Link>
        </Nav>
        <div className="auth">
          <a className="login" href="https://letters.ameelio.org/login">
            Login
          </a>
          <a
            className="signup ml-3"
            href="https://letters.ameelio.org/register"
          >
            <button>Sign Up</button>
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
