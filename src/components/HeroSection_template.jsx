import React, { useContext } from "react";
import './css/HeroSection_template.scss'
import { ThemeContext } from "../context/context";

const HeroSectionTemplate = (props) => {
  const {dark} = useContext(ThemeContext)
  return (
    <div className={`heroSection grid-center ${dark? 'dark' : 'light'}`}>
    <article className="dflex-center dflex-column gap-2">
      <h2 className="text-center">{props.title}</h2>
      <p className="text-center hero-content">
       {props.description}
      </p>
    </article>
    </div>
  );
};

export default HeroSectionTemplate;
