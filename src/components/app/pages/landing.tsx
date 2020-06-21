import React from "react";
import Hero from "../sections/Hero";
import MainCardBackground from "../sections/HeroBackground";
import Testimonials from "../sections/Testimonials";
import LettersForFamilies from "../sections/LettersFamilies";
import LettersForOrgs from "../sections/LettersOrgs";
import GetStarted from "../sections/GetStarted";

const Landing: React.FC = () => {
  return (
    <div>
      <Hero />
      <MainCardBackground />
      <Testimonials />
      <LettersForFamilies />
      <LettersForOrgs />
      <GetStarted />
    </div>
  );
};

export default Landing;
