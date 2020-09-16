import React, { ReactElement } from "react";
import HowItWorksCard from "src/components/cards/HowItWorksCard";
import LocateLovedOne from "src/assets/HowItWorks/LocateLovedOne.png";
import SendContent from "src/assets/HowItWorks/SendContent.png";
import Sample from "src/assets/HowItWorks/Sample.png";
import DownloadButton from "src/components/buttons/DownloadButton";

export default function HowItWorks(): ReactElement {
  return (
    <section className="d-flex flex-column align-items-center w-100 py-5">
      <span className="dark font-weight-bold p2">How it works</span>
      <HowItWorksCard
        step={1}
        asset={LocateLovedOne}
        title="Locate your loved one."
        desc="Use our locator tool to select their facility, and we’ll fill in the mailing address."
      />

      <HowItWorksCard
        step={2}
        asset={SendContent}
        title="Share something real."
        desc="Whether it’s images, postcards, or games, send them for free. We'll print and mail it for you."
        reverse
      />

      <HowItWorksCard
        step={3}
        asset={Sample}
        title="Make them feel connected."
        desc="Lift your loved one’s spirits by sharing a piece of your daily life with them."
      />
      <DownloadButton />
    </section>
  );
}
