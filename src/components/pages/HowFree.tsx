import React, { FunctionComponent } from "react";
import Supporters from "../sections/Supporters";
import Image from "react-bootstrap/Image";
import AuthorCard from "src/components/cards/AuthorCard";
import Lara from "src/assets/Team/Lara.png";
import Liz from "src/assets/Team/Liz.png";

import SummaryCard from "src/components/cards/SummaryCard";
import Kickstarter from "src/assets/HowFree/Kickstarter.png";
import TeamBI from "src/assets/HowFree/TeamBI.jpeg";

import CtaCard from "src/components/cards/CtaCard";
import { BUTTON_TYPES } from "src/utils/constants";

const HowFree: FunctionComponent = () => {
  return (
    <div className="d-flex flex-column text-align-center  justify-content-center mw-100 default-px py-5">
      <h1 className="font-weight-bold mb-5">How Is Ameelio Free?</h1>
      <div className="d-flex flex-column flex-md-row">
        <div className="d-flex flex-column mr-md-5">
          <SummaryCard desc="Transparency is one of our nonprofit’s core values. That’s why it’s important to us that you know how Ameelio stays free and who funds Ameelio." />
          <AuthorCard
            images={[Lara, Liz]}
            name="Lara Schull & Elizabeth Levin"
            lastUpdatedAt="July 9, 2020"
          />
          <hr className="mb-3" />

          <span className="text-break mb-3">
            We are the only nonprofit prison telecommunications provider in the
            U.S. We believe that it’s unjust for loved ones of the incarcerated
            to pay sky-high fees to stay in touch, and we are committed to
            providing free communications options to all families.
          </span>
          <span className="text-break mb-3">
            Luckily, we’re not alone; our work is made possible by the
            generosity of like-minded charitable foundations, individual donors,
            corporate partners, and users who choose to “tip” us for our
            services.
          </span>

          <span className="text-break mb-3">
            Our supporters include the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.robinhood.org/"
            >
              Robin Hood Foundation
            </a>
            , the{" "}
            <a
              href="https://foundation.mozilla.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Foundation
            </a>
            , and{" "}
            <a
              href="https://www.ffwd.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fast Forward
            </a>
            . Donors like{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Eric_Schmidt"
            >
              Eric Schmidt
            </a>{" "}
            (the former CEO of Google) and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Tarell_Alvin_McCraney"
            >
              Tarell McCraney
            </a>{" "}
            (Oscar-winning writer of Moonlight) have contributed key funds that
            have allowed us to keep offering free letters to all our users.
          </span>

          <div className="sub-page-media">
            <Image
              src={Kickstarter}
              alt="Ameelio raises $48,000 through Kickstarter"
            />
            <span className="mt-3">
              Ameelio raises $48,727 to keep funding free letters for families
              impacted by incarceration.
            </span>
          </div>
          <span>
            Sustainability is critical to our mission, so we believe that it's
            important to generate earned revenue. That’s why we are building
            paid products for mission-aligned partners, like criminal justice
            organizations and lawyers, who are willing and able to pay.
          </span>

          <div className="mt-5 d-flex flex-column">
            <span className="p2 font-weight-bold mb-3">Who Owns Ameelio?</span>
            <span className="mb3">
              Ameelio is a nonprofit. Ending the exploitation of families
              impacted by incarceration is central to our mission, so we
              reinvest all revenue into our products. All our funds are directed
              towards building better communications options and serving more
              families.
            </span>
          </div>
          <div className="sub-page-media">
            <Image src={TeamBI} alt="Members of the Ameelio team." />
            <span className="mt-3">
              Members of the Ameelio team featured on{" "}
              <a
                href="https://www.businessinsider.com/startup-ameelio-communicate-loved-ones-incarcerated-yale-2020-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Business Insider
              </a>
              .
            </span>
          </div>
        </div>
        <CtaCard type={BUTTON_TYPES.DONATE} />
      </div>
      <Supporters />
    </div>
  );
};

export default HowFree;
