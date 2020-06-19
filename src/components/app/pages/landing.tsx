import React from "react";
import Hero from "../../sections/Hero";
import MainCardBackground from "../maincardbackground";
import Testimonials from "../testimonials";
import Context from "../context";
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
      <Context />
    </div>
  );
};

export default Landing;
