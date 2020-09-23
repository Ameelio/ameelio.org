import React, { ReactElement, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import UserBanner from "src/assets/HowFree/UsersBanner.png";
import "./ReferralPage.css";
import LottieLetter from "src/assets/Referral/LottieLetter.json";
import Lottie from "react-lottie";
import CardContentLoader from "src/components/loading/CardContentLoader";
import GenericModal from "src/components/modals/GenericModal";

import { RouteComponentProps, useHistory } from "react-router-dom";
import { fetchReferrer } from "src/services/Api/index";
import { trackButtonClick, track } from "src/utils/analytics";
import { BUTTON_TYPES, PLACEMENT } from "src/utils/constants";
import { format } from "date-fns/esm";

type TParams = { id: string };

export default function Referral({
  match,
}: RouteComponentProps<TParams>): ReactElement {
  const [referrer, setReferrer] = useState<Referrer>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const history = useHistory();
  useEffect(() => {
    async function loadReferrer() {
      const { id } = match.params;
      track("Landing Page - Referral Page Open", { referrer: id });
      try {
        const referrer = await fetchReferrer(id);
        setReferrer(referrer);
      } catch (e) {
        setHasError(true);
      }
      setIsLoading(false);
    }
    loadReferrer();
  }, [match]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieLetter,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = () => {
    trackButtonClick(BUTTON_TYPES.SIGNUP, PLACEMENT.REFERRAL);
    history.push(`/signup`);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <Image src={UserBanner} className="referral-page-banner" />
      <div className="d-flex flex-column align-items-center bg-white rounded referral-page-card text-center mb-5">
        {hasError && (
          <GenericModal
            title="Oops"
            body="Something went wrong. The referral code is not valid."
            cta="Take me home"
            redirectPath={"/"}
          />
        )}
        {isLoading && !hasError && (
          <div className="mw-100">
            <CardContentLoader className="w-100" />
          </div>
        )}
        {!isLoading && !hasError && (
          <div className="d-flex flex-column">
            <span className="font-weight-medium p2">Hi there!</span>
            <span className="mt-3">
              You were invited by {referrer?.name} to join Ameelio.
            </span>
            <span className="mt-3">
              In less than 5 minutes, you can send your first free <b>photos</b>
              , <b>letter</b> or <b>postcard</b> to your incarcerated loved one.
            </span>
            <Lottie options={defaultOptions} height="60%" width="60%" />
            <Button size="lg" className="mt-3" onClick={handleClick}>
              Accept Invitation
            </Button>
            <hr />
            <div className="d-flex flex-column flex-md-row mt-3 align-items-center">
              <Image
                src={referrer?.image}
                className="medium-img"
                alt="Profile Image"
                roundedCircle
              />
              <div className="d-flex flex-column mt-2 mt-md-0 ml-md-3 text-center text-md-left">
                <span>{referrer?.name}</span>
                <span className="p6">
                  {referrer?.city}, {referrer?.state}
                </span>
                <span className="p6">
                  Member of Ameelio since{" "}
                  {format(referrer?.createdAt, "MMMM, YYY")}
                </span>
                <span className="p6">
                  {referrer?.totalLettersSent} letters & photos sent
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
