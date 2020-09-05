import React, { ReactElement } from "react";
import { isAndroid, isIOS } from "react-device-detect";
import Button from "react-bootstrap/Button";
import {
  PLACEMENT,
  LINKS,
  BUTTON_TYPES,
  APP_STORES,
} from "src/utils/constants";
import { trackButtonClick } from "src/utils/analytics";

interface Props {
  isBlock?: boolean;
}
export default function DownloadButton({ isBlock }: Props): ReactElement {
  const genLink = () => {
    if (isAndroid) {
      return LINKS.GOOGLE_PLAY;
    } else if (isIOS) {
      return LINKS.APPLE_STORE;
    } else {
      return LINKS.SIGNUP;
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
    const LINK = genLink();
    logClickEvent();
    window.open(LINK, "_blank");
  };
  // const gen

  return (
    <Button size="lg" block={isBlock} onClick={handleClick}>
      {genCTA()}
    </Button>
  );
}
