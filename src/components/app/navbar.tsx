import React from "react";
import "./stylesheets/navbar.css";

import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const nav_logo: any = require("../../assets/logo.png");
  return (
    <div>
      <header>
        <img className="logo" src={nav_logo} alt="" />
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/getinvolved">Get Involved</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </nav>
        <div className="auth">
          <a className="login" href="https://letters.ameelio.org/login">
            Login
          </a>
          <a className="signup" href="https://letters.ameelio.org/register">
            <button>Sign Up</button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
