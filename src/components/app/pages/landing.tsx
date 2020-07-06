import React from "react";
import Hero from "../sections/Hero";
import MainCardBackground from "../sections/HeroBackground";
import Testimonials from "../sections/Testimonials";
import LettersForFamilies from "../sections/LettersFamilies";
import LettersForOrgs from "../sections/LettersOrgs";
import GetStarted from "../sections/GetStarted";
import Careers from "../sections/Careers";
import GuidesCatalogue from "../sections/GuidesCatalogue";
import { US_STATES } from "../../../utils/us_states";

const Landing: React.FC = () => {
  return (
    <div>
      <Hero />
      <MainCardBackground />
      <Testimonials />
      <LettersForFamilies />
      <LettersForOrgs />
      <GetStarted />
      <Careers />
      <GuidesCatalogue items={US_STATES} />
    </div>
  );
};

export default Landing;
