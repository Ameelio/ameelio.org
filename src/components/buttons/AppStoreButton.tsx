import React, { ReactElement } from "react";
import AppleStoreBadge from "src/assets/Badge/AppleStoreBadge.svg";
import GooglePlayBadge from "src/assets/Badge/GooglePlayBadge.png";
import Image from "react-bootstrap/Image";
import { trackButtonClick } from "src/utils/analytics";
import {
  PLACEMENT,
  LINKS,
  BUTTON_TYPES,
  APP_STORES,
} from "src/utils/constants";
import "./AppStoreButton.css";

interface Props {
  placement: PLACEMENT;
  type: APP_STORES;
}
export default function AppStoreButton({
  placement,
  type,
}: Props): ReactElement {
  const link =
    type === APP_STORES.APPLE ? LINKS.APPLE_STORE : LINKS.GOOGLE_PLAY;
  const handleClick = (e: React.MouseEvent) => {
    trackButtonClick(BUTTON_TYPES.DOWNLOAD, placement, type);
    window.open(link, "_blank");
  };

  return (
    <Image
      src={type === APP_STORES.APPLE ? AppleStoreBadge : GooglePlayBadge}
      onClick={handleClick}
      className="hover-cursor download-badge-btn"
    />
  );
}
