import React from "react";
import "./Hero.css";
import Typical from "react-typical";
import Image from "react-bootstrap/Image";

const Hero: React.FC = () => {
  const illustration: any = require("../../assets/maincard_illustration.png");
  const fc: any = require("../../assets/media/fc.png");
  const wapo: string = require("../../assets/media/wapo.png");
  const tc: string = require("../../assets/media/tc.png");
  const bi: string = require("../../assets/media/bi.png");

  return (
    <div className="ml-1 ml-md-5 px-5 py-3 mt-3 d-flex flex-lg-row flex-column  w-100 justify-content-center">
      <div className="d-flex flex-column">
        <h1 className="font-weight-bold">
          Send free
          <Typical
            steps={["letters", 3000, "photos", 2500, "postcards", 2500]}
            loop={Infinity}
            wrapper="h1"
          />
          to your loved ones
        </h1>
        <div className="subtitle mt-1">
          You shouldn't have to decide between paying for basic <br></br> needs
          and staying connected to your loved ones.
        </div>
        <a className="signup" href="https://letters.ameelio.org/register">
          <button className="mt-3 letters-button">
            Send Free Letters Today
          </button>
        </a>
        <div className="d-flex flex-row mt-4 position-relative media-container flex-wrap">
          <a href="https://www.fastcompany.com/90514321/this-app-bypasses-the-absurdly-high-cost-of-making-phone-calls-to-prison-by-converting-texts-to-snail-mail?partner=rss&utm_source=rss&utm_medium=feed&utm_campaign=rss+fastcompany&utm_content=rss">
            <Image
              src={fc}
              alt="Fast Company Article"
              className="media-article ml-3 ml-md-0"
            />
          </a>
          <a href="https://www.fastcompany.com/90514321/this-app-bypasses-the-absurdly-high-cost-of-making-phone-calls-to-prison-by-converting-texts-to-snail-mail?partner=rss&utm_source=rss&utm_medium=feed&utm_campaign=rss+fastcompany&utm_content=rss">
            <Image
              src={wapo}
              alt="Washington Post Article"
              className="media-article ml-3"
            />
          </a>
          <a href="https://techcrunch.com/2020/05/14/ameelio-wants-to-take-on-for-profit-prison-calling-rackets-after-starting-with-free-letters-to-inmates/">
            <Image
              src={tc}
              alt="Techcrunch Article"
              className="media-article ml-3"
            />
          </a>
          <a href="https://www.businessinsider.com/how-to-use-app-talk-family-prison-ameelio-2020-6">
            <Image
              src={bi}
              alt="Business Insider Article"
              className="media-article ml-3"
            />
          </a>
        </div>
      </div>
      <div>
        <img
          className="illustration ml-md-5 mt-4 mt-md-1"
          src={illustration}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
