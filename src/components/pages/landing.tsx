import React from "react";
import Hero from "../sections/Hero";
import MainCardBackground from "../sections/HeroBackground";
import Testimonials from "../sections/Testimonials";
import HowItWorks from "../sections/HowItWorks";
import LettersForOrgs from "../sections/LettersOrgs";
import GetStarted from "../sections/GetStarted";
import Careers from "../sections/Careers";
import GlassCase from "src/components/sections/GlassCase";
import StarBackground from "src/components/backgrounds/StarBackground";

const Landing: React.FC = () => {
  return (
    <div>
      <Hero />
      <MainCardBackground />
      <Testimonials />
      <StarBackground />
      <GlassCase />
      <HowItWorks />
      <LettersForOrgs />
      <GetStarted />
      <Careers />
    </div>
  );
};

export default Landing;
