import React from "react";
import Hero from "../sections/Hero";
import MainCardBackground from "../sections/HeroBackground";
import Testimonials from "../sections/Testimonials";
import LettersForFamilies from "../sections/LettersFamilies";
import LettersForOrgs from "../sections/LettersOrgs";
import GetStarted from "../sections/GetStarted";
import Careers from "../sections/Careers";

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
    </div>
  );
};

export default Landing;
