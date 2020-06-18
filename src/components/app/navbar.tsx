import React from "react";
import "./stylesheets/navbar.css";

import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";

const NavBar: React.FC = () => {
  const nav_logo: any = require("../../assets/logo.png");
  return (
    // <div>
    //   <header>
    //     <img className="logo" src={nav_logo} alt="" />
    //     <nav>
    //       <ul className="nav-links">
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/faq">FAQ</Link>
    //         </li>
    //         <li>
    //           <Link to="/getinvolved">Get Involved</Link>
    //         </li>
    //         <li>
    //           <Link to="/donate">Donate</Link>
    //         </li>
    //       </ul>
    //     </nav>
    // <div className="auth">
    //   <a className="login" href="https://letters.ameelio.org/login">
    //     Login
    //   </a>
    //   <a className="signup" href="https://letters.ameelio.org/register">
    //     <button>Sign Up</button>
    //   </a>
    // </div>
    //   </header>

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">
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
          <Nav.Link href="/about">Our Mission</Nav.Link>
          <Nav.Link href="/howitworks">How it works</Nav.Link>
          <Nav.Link href="/team">Team</Nav.Link>
          <Nav.Link href="/orgs">For Organizations</Nav.Link>
          <Nav.Link href="https://letters.ameelio.org/donate">Donate</Nav.Link>
          <Nav.Link href="/getinvolved">Get Involved</Nav.Link>
        </Nav>
        <div className="auth">
          <a className="login" href="https://letters.ameelio.org/login">
            Login
          </a>
          <a className="signup" href="https://letters.ameelio.org/register">
            <button>Sign Up</button>
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
