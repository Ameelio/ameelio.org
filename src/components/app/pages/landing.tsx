import React from "react";
import Hero from "../../sections/Hero";
import MainCardBackground from "../maincardbackground";
import Testimonials from "../testimonials";
import LettersForFamilies from "../../sections/LettersFamilies";
import LettersForOrgs from "../lettersfororgs";

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
