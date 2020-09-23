import React, { ReactElement } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import { Button } from "react-bootstrap";
import {
  PLACEMENT,
  LINKS,
  BUTTON_TYPES,
  APP_STORES,
} from "src/utils/constants";
import { trackButtonClick } from "src/utils/analytics";
import "./DownloadButton.css";
import { useHistory } from "react-router-dom";

interface Props {
  isBlock?: boolean;
}
export default function DownloadButton({ isBlock }: Props): ReactElement {
  const history = useHistory();
  const genLink = () => {
    if (isAndroid) {
      return LINKS.GOOGLE_PLAY;
    } else {
      return LINKS.APPLE_STORE;
    }
  };

  const genCTA = () => {
    if (isAndroid) {
      return "Download on Google Play";
    } else if (isIOS) {
      return "Download on App Store";
    } else {
      return "Sign Up";
    }
  };

  const logClickEvent = () => {
    if (isAndroid) {
      trackButtonClick(
        BUTTON_TYPES.DOWNLOAD,
        PLACEMENT.SECTION,
        APP_STORES.GOOGLE
      );
    } else if (isIOS) {
      trackButtonClick(
        BUTTON_TYPES.DOWNLOAD,
        PLACEMENT.SECTION,
        APP_STORES.APPLE
      );
    } else {
      trackButtonClick(BUTTON_TYPES.SIGNUP, PLACEMENT.SECTION);
    }
  };

  const handleClick = () => {
    logClickEvent();

    if (!isIOS && !isAndroid) {
      history.push("/signup");
    } else {
      const LINK = genLink();
      window.open(LINK, "_blank");
    }
  };

  return (
    <Button size="lg" block={isBlock} onClick={handleClick}>
      {genCTA()}
    </Button>
  );
}
