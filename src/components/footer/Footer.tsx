import React from "react";
import "./Footer.css";
import { Twitter, Facebook, Instagram, GitHub } from "react-feather";

const Footer = () => {
  return (
    <div className="d-flex flex-column footer-wrapper w-100 py-5  pr-5 flex-md-row">
      <div className="d-flex flex-column">
        <span className="font-weight-light social-media-title mb-3 ">
          NETWORK
        </span>
        <a
          className="mb-2 social-media-link"
          href="https://twitter.com/teamameelio"
        >
          <Twitter color="white" size="20" />
          <span className="ml-3">Twitter</span>
        </a>

        <a
          className="mb-2 social-media-link"
          href="https://www.instagram.com/teamameelio/"
        >
          <Instagram color="white" size="20" />
          <span className="ml-3">Instagram</span>
        </a>

        <a
          className="mb-2 social-media-link"
          href="https://www.facebook.com/teamameelio/"
        >
          <Facebook color="white" size="20" />
          <span className="ml-3">Facebook</span>
        </a>

        <a className="mb-2 social-media-link" href="https://github.com/Ameelio">
          <GitHub color="white" size="20" />
          <span className="ml-3">GitHub</span>
        </a>
      </div>
      <div className="ml-auto d-flex flex-column pr-md-5 pt-5">
        <h3 className="text-md-right copyright-title">Ameelio</h3>
        <span className="text-md-right p5 white">
          Contact us at team@ameelio.org
        </span>
        <span className="copyright mt-3">
          © 2020 Ameelio. Ameelio Inc, EIN 84-1800611, is a registered nonprofit
          501(c)(3) organization.
        </span>
      </div>
    </div>
  );
};

export default Footer;
