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
import { fetchReferrerName } from "src/services/Api/index";

type TParams = { id: string };

export default function Referral({
  match,
}: RouteComponentProps<TParams>): ReactElement {
  const [referrer, setReferrer] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const history = useHistory();
  useEffect(() => {
    async function fetchReferrer() {
      const { id } = match.params;
      try {
        const name = await fetchReferrerName(id);
        localStorage.setItem("referrer_id", id);
        setReferrer(name);
      } catch (e) {
        setHasError(true);
      }
      setIsLoading(false);
    }
    fetchReferrer();
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
              You were invited by {referrer} to join Ameelio.
            </span>
            <span className="mt-3">
              In less than 5 minutes, you send your first free <b>photos</b>,{" "}
              <b>letter</b> or <b>postcards</b> to your incarcerated loved one.
            </span>
            <Lottie options={defaultOptions} height="60%" width="60%" />
            <Button size="lg" className="mt-3" onClick={handleClick}>
              Accept Invitation
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
