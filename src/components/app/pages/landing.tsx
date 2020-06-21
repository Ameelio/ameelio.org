import React from "react";
import Hero from "../sections/Hero";
import MainCardBackground from "../maincardbackground";
import Testimonials from "../testimonials";
import LettersForFamilies from "../sections/LettersFamilies";
import LettersForOrgs from "../lettersfororgs";
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
