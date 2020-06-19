import React from "react";
import MainCard from "../maincard";
import MainCardBackground from "../maincardbackground";
import Products from "../products";
import Testimonials from "../testimonials";
import Context from "../context";
import LettersForFamilies from "../lettersforfamilies";
import LettersForOrgs from "../lettersfororgs";

const Landing: React.FC = () => {
  return (
    <div>
      <MainCard />
      <MainCardBackground />
      <Testimonials />
      <LettersForFamilies />
      <Context />
      <LettersForOrgs />
    </div>
  );
};

export default Landing;
