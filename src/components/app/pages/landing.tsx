import React from "react";
import MainCard from "../maincard";
import MainCardBackground from "../maincardbackground";
import Products from "../products";
import Testimonials from "../testimonials";
import Context from "../context";
import LettersForFamilies from "../lettersforfamilies";
import LFFBackground from "../lffbackground";
import LettersForOrgs from "../lettersfororgs";

const Landing: React.FC = () => {
  return (
    <div>
      <MainCard />
      <MainCardBackground />
      <Products />
      <Testimonials />
      <Context />
      <LettersForFamilies />
      <LettersForOrgs />
    </div>
  );
};

export default Landing;
