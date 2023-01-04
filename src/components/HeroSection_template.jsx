import React from "react";
import './css/HeroSection_template.scss'

const HeroSectionTemplate = (props) => {
  return (
    <div className="heroSection container grid-center">
    <article className="dflex-center dflex-column gap-2">
      <h2 className="text-center">{props.title}</h2>
      <p className="text-center hero-desc">
       {props.description}
      </p>
    </article>
    </div>
  );
};

export default HeroSectionTemplate;
