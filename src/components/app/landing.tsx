import React from "react";
import NavBar from "./navbar";
import MainCard from "./maincard";
import MainCardBackground from "./maincardbackground";
import Products from "./products";

const Landing: React.FC = () => {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <MainCard />
      <MainCardBackground />
      <Products />
    </div>
  );
};

export default Landing;
