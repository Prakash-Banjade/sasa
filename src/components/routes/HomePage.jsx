import React from "react";
import HeroSection from "../HeroSection";
import Tags from "../Tags";
import AboutMain from "../about/About-homePage";
import ServicesFront from "../services/Services-main";
import Features from "../features/Features";
import WhySASA from "../WhySASA";
import Conclusion from "../Conclusion";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Tags />
      <AboutMain />
      <ServicesFront />
      <Features />
      <WhySASA />
      <Conclusion />
    </>
  );
};

export default HomePage;
