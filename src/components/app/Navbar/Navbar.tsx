import React, { FunctionComponent } from "react";
import "./Navbar.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Nav.Link eventKey="1">
            <Link to="/mission">Our Mission</Link>
          </Nav.Link>
          <Nav.Link eventKey="2">
            <Link to={{ pathname: "/how-we-work" }}>How it works</Link>
          </Nav.Link>
          <Nav.Link eventKey="3">
            <Link to={{ pathname: "/transparency" }}>How it is free</Link>
          </Nav.Link>
          <NavDropdown title="Team" id="nav-dropdown">
            <NavDropdown.Item eventKey="4">
              <Link to={{ pathname: "/team" }}>Team</Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="5">
              <Link to={{ pathname: "#careers" }}>Get Involved</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey="6">
            <Link to={{ pathname: "#orgs" }}>For Organizations</Link>
          </Nav.Link>
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
