import React from "react";
import ReactGA from "react-ga";
import Hero from "src/components/sections/Families/Hero";
import MainCardBackground from "src/components/sections/Families/HeroBackground";
import Testimonials from "src/components/sections/Testimonials";
import HowItWorks from "src/components/sections/Families/HowItWorks";
import Careers from "src/components/sections/Careers";
import GlassCase from "src/components/sections/Families/GlassCase";
import StarBackground from "src/components/backgrounds/StarBackground";

if (process.env.REACT_APP_GA_KEY) {
  ReactGA.pageview("/");
}

const Landing: React.FC = () => {
  return (
    <div className="overflow-hidden">
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
