import React, { Component } from "react";
import "./Hero.css";
import Typical from "react-typical";
import Image from "react-bootstrap/Image";
import { numberWithCommas } from "src/utils/utils";
import { PLACEMENT, APP_STORES } from "src/utils/constants";
import Mockup from "src/assets/Hero/Mockup.png";
import AppStoreButton from "src/components/buttons/AppStoreButton";

type LetterCounter = {
  letters: string;
};

export default class Hero extends Component<{}, LetterCounter> {
  tick() {
    const weekly_letters = 2162;
    const increment_seconds = weekly_letters / 604800;
    const startDate = new Date(2020, 6, 26, 0, 0, 0, 0);
    const today = new Date();

    const dif = today.getTime() - startDate.getTime();
    var dif_seconds = dif / 1000;

    this.setState({
      letters: numberWithCommas(
        Math.round(31089 + dif_seconds * increment_seconds)
      ),
    });
  }
  componentWillMount() {
    this.tick();
  }

  // After the component did mount, we set the state each 6 minutes (6 min = 1 letter).
  componentDidMount() {
    setInterval(() => this.tick(), 360000);
  }

  render() {
    return (
      <div className="px-md-5 mb-md-5 mb-0 py-3  d-flex flex-lg-row flex-column  w-100 justify-content-center align-items-center align-items-md-start">
        <div className="mx-5 d-flex flex-column align-items-lg-start">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column flex-md-row ">
              <span className="p1 font-weight-bold">Send free&nbsp;</span>
              <Typical
                steps={[
                  "letters",
                  3000,
                  "photos",
                  3000,
                  "postcards",
                  3500,
                  "games",
                  3000,
                  "art",
                  3000,
                ]}
                loop={Infinity}
                wrapper="h1"
              />
            </div>
            <span className="p1 font-weight-bold">
              to your incarcerated <br /> loved ones
            </span>
          </div>
          <div className="p5 subtitle mt-1">
            Staying connected to your loved ones and paying for basic needs
            shouldn't be a tradeoff. That's why we're a <b>nonprofit</b>.
          </div>
          <div className="d-flex flex-row mt-3">
            <div>
              <AppStoreButton
                placement={PLACEMENT.HERO}
                type={APP_STORES.APPLE}
              />
            </div>
            <div className="ml-3">
              <AppStoreButton
                placement={PLACEMENT.HERO}
                type={APP_STORES.GOOGLE}
              />
            </div>
          </div>

          <span className="font-weight-bold blue letter-counter mt-4">
            Ameelio's community has sent over {this.state.letters} letters,
            cards & photos
          </span>
          <div className="d-flex flex-row mt-3 position-relative media-container flex-wrap">
            <a href="https://www.fastcompany.com/90514321/this-app-bypasses-the-absurdly-high-cost-of-making-phone-calls-to-prison-by-converting-texts-to-snail-mail?partner=rss&utm_source=rss&utm_medium=feed&utm_campaign=rss+fastcompany&utm_content=rss">
              <Image
                src={require("src/assets/media/fc.png")}
                alt="Fast Company Article"
                className="media-article ml-md-0"
              />
            </a>
            <a href="https://www.fastcompany.com/90514321/this-app-bypasses-the-absurdly-high-cost-of-making-phone-calls-to-prison-by-converting-texts-to-snail-mail?partner=rss&utm_source=rss&utm_medium=feed&utm_campaign=rss+fastcompany&utm_content=rss">
              <Image
                src={require("src/assets/media/wapo.png")}
                alt="Washington Post Article"
                className="media-article ml-4 ml-md-3"
              />
            </a>
            <a href="https://techcrunch.com/2020/05/14/ameelio-wants-to-take-on-for-profit-prison-calling-rackets-after-starting-with-free-letters-to-inmates/">
              <Image
                src={require("src/assets/media/tc.png")}
                alt="Techcrunch Article"
                className="media-article ml-md-3"
              />
            </a>
            <a href="https://www.businessinsider.com/how-to-use-app-talk-family-prison-ameelio-2020-6">
              <Image
                src={require("src/assets/media/bi.png")}
                alt="Business Insider Article"
                className="media-article  ml-4 ml-md-3"
              />
            </a>
          </div>
        </div>
        <div
          className="main-illustration mt-5  mt-md-0 mb-md-5"
          data-aos="zoom-out-down"
        >
          <Image
            src={Mockup}
            className="main-illustration"
            alt={"Image of letter, postcard and mobile app"}
          />
        </div>
      </div>
    );
  }
}
