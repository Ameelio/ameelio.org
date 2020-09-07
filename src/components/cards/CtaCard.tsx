import React, { ReactElement } from "react";
import { Send, Heart, Coffee, Truck } from "react-feather";
import "./CtaCard.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import UsersBanner from "src/assets/HowFree/UsersBanner.png";
import { trackButtonClick } from "src/utils/analytics";
import { BUTTON_TYPES, PLACEMENT, LINKS } from "src/utils/constants";
import DownloadButton from "src/components/buttons/DownloadButton";

interface Props {
  type: BUTTON_TYPES;
}

export default function CtaCard({ type }: Props): ReactElement {
  const handleDonateClick = () => {
    trackButtonClick(BUTTON_TYPES.DONATE, PLACEMENT.CARD);
    window.open(LINKS.DONATION, "_self");
  };

  const getContent = (): JSX.Element => {
    switch (type) {
      case BUTTON_TYPES.SIGNUP:
      case BUTTON_TYPES.DOWNLOAD:
        return (
          <div className="cta-card-container">
            <span className="font-semibold p4 mb-3">
              Share something real with your loved one.
            </span>

            <div className="d-flex flex-row mt-3">
              <Send className="blue flex-shrink-0" size={24} />
              <p className="ml-3">
                Every week, we help more than <b>1,000</b> families send over{" "}
                <b>3,000</b> letters.
              </p>
            </div>
            <div className="d-flex flex-row mt-3">
              <Truck className="blue flex-shrink-0" size={24} />
              <p className="ml-3">We serve all facilities in the U.S.</p>
            </div>
            <div className="d-flex flex-row mt-3 mb-3">
              <Heart className="blue flex-shrink-0" size={24} />
              <p className="ml-3">Our nonprofit's help is 100% free.</p>
            </div>
            <DownloadButton isBlock />
          </div>
        );
      case BUTTON_TYPES.DONATE:
        return (
          <div className="cta-card-container">
            <span className="font-weight-bold p4">
              Staying connected to your loved ones should be free.
            </span>

            <div className="d-flex flex-row mt-3">
              <Send className="blue flex-shrink-0" size={24} />
              <p className="ml-3">
                Every week, we help more than <b>1,000</b> families send over{" "}
                <b>3,000</b> letters.
              </p>
            </div>
            <div className="d-flex flex-row mt-3">
              <Heart className="blue flex-shrink-0" size={24} />
              <p className="ml-3">
                It takes only $3 to fund a month of free letters for an entire
                family.
              </p>
            </div>
            <div className="d-flex flex-row mt-3">
              <Coffee className="blue flex-shrink-0" size={24} />
              <p className="ml-3">
                The price of a coffee is all we need to make a difference in
                another family's life.
              </p>
            </div>
            <Button
              className="bg-blue"
              size="lg"
              block
              onClick={handleDonateClick}
            >
              Donate
            </Button>
          </div>
        );
      default:
        return <div />;
    }
  };

  return (
    <div className="cta-card-wrapper ">
      <Image src={UsersBanner} className="mw-100" />
      {getContent()}
    </div>
  );
}
