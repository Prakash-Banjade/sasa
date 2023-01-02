import React from "react";
import "../css/ServicesHeroSection.scss";

const ServicesHeroSection = (props) => {
  return (
    <div className="service-herosection dflex wrap gap-3">
      <div className="left-content dflex dflex-column gap-2 ">
        <h2 className="hero-heading">{props.heroTitle}</h2>
        <p>{props.heroDescription}</p>
        <p className="tags">
          <span>Easier! </span>
          <span>Faster! </span>
          <span>Secure!</span>
        </p>

        <button><a href="tel:+9779800784971">Call Now</a></button>
      </div>

      <div className="right-content dflex dflex-center">
        <img src={props.heroImg} alt="heroImg" />
      </div>
    </div>
  );
};

export default ServicesHeroSection;
