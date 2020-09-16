import React from "react";
import Hero from "src/components/sections/Families/Hero";
import MainCardBackground from "src/components/sections/Families/HeroBackground";
import Testimonials from "src/components/sections/Testimonials";
import HowItWorks from "src/components/sections/Families/HowItWorks";
import Careers from "src/components/sections/Careers";
import GlassCase from "src/components/sections/Families/GlassCase";
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
      <Careers />
    </div>
  );
};

export default Landing;
