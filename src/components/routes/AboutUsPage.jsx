import React from "react";
import HeroSectionAboutPage from "../HeroSection_template";
import AboutMainAboutPage from "../about/AboutMain-AboutPage";
import Founders from "../about/Founders";
import TagsAboutPage from "../about/Tags-AboutPage";
import Testimonials from "../about/Testimonials";

const AboutUsPage = () => {
  const heroSectionContent = {
    title: "About Us",
    description: ` Our mission is to provide our customers with services while maintaining
    the highest standards of integrity, respect, and trustworthiness. We
    strive to create lifelong relationships with our customers and employees
    by ensuring that our core values of honesty, fairness, and reliability
    are at the heart of everything we do.`,
  };
  return (
    <>
      <div className="aboutPage">
        <HeroSectionAboutPage
          title={heroSectionContent.title}
          description={heroSectionContent.description}
        />
      </div>
      <main>
        <AboutMainAboutPage />
      </main>
      <Founders />
      <TagsAboutPage />
      <Testimonials />
    </>
  );
};

export default AboutUsPage;
