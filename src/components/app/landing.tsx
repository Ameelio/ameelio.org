import React from "react";
import NavBar from "./navbar";
import MainCard from "./maincard";
import MainCardBackground from "./maincardbackground";
import Products from "./products";
import Testimonials from "./testimonials";
import Context from "./context";

const Landing: React.FC = () => {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <MainCard />
      <MainCardBackground />
      <Products />
      <Testimonials />
      <Context />
    </div>
  );
};

export default Landing;
