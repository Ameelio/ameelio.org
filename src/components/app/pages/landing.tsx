import React from "react";
import Hero from "../sections/Hero";
import MainCardBackground from "../sections/HeroBackground";
import Testimonials from "../sections/Testimonials";
import LettersForFamilies from "../sections/LettersFamilies";
import LettersForOrgs from "../sections/LettersOrgs";

const Landing: React.FC = () => {
  return (
    <div>
      <Hero />
      <MainCardBackground />
      <Testimonials />
      <LettersForFamilies />
      <LettersForOrgs />
    </div>
  );
};

export default Landing;
