import React from "react";
import "./Navbar.css";

import { Navbar, Nav } from "react-bootstrap";

const NavBar: React.FC = () => {
  const nav_logo: any = "/logo.svg";
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
          <Nav.Link href="/howitworks">How it works</Nav.Link>
          <Nav.Link href="/team">Team</Nav.Link>
          {/* <Nav.Link href="/orgs">For Organizations</Nav.Link> */}
          <Nav.Link href="https://letters.ameelio.org/donate">Donate</Nav.Link>
          {/* <Nav.Link href="/getinvolved">Get Involved</Nav.Link> */}
        </Nav>
        <div className="auth">
          <a className="login" href="https://letters.ameelio.org/login">
            Login
          </a>
          <a
            className="signup ml-md-3"
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
