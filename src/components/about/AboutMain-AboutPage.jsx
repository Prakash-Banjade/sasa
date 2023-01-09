import React, { useContext } from "react";
import "../css/About.scss";
import Logo from "../../assets/images/logo.gif";
import logo_white from "../../assets/images/logo-white.png";
import { ThemeContext } from "../../context/context";

const AboutMainAboutPage = () => {
  const {dark} = useContext(ThemeContext)
  return (
    <div className="about-container container" >
      <div className="left-content dflex-center">
        <figure className="grid-center" style={{ margin: 0 }}>
          <div className="rotatingBack">
            <div className="rotatingBackCircle grid-center"></div>
          </div>
          <img src={dark? logo_white : Logo} alt="rounded sasa logo" title="Logo" />
        </figure>
      </div>

      <div className="right-content">
        <p>
          SASA is an organization that provides various services on balanced
          pricing, solving different problems, and providing suggestions on
          foreign visits either to study or work. It was established in early
          2022 by a group of students studying in Butwal Multiple Campus and
          facing difficulties managing their finances. The group decided to help
          others in similar situations by providing better information and
          advice on government-related works. SASA has since grown into a
          well-known and respected organization, and many people every month to
          stay on top of their finances every day and make the most of their
          profits.
          <br />
          <br />
          SASA is the perfect organization for those who are looking for help
          with government-related work. We offer various services at a
          reasonable price and are always willing to help solve any financial
          problems. We also offer great suggestions on foreign visits to study
          or work. "SASA is for getting your driving license, passport, and
          Indian university study permit. They provide various services and are
          very efficient. You would recommend us to anyone."
        </p>
      </div>
    </div>
  );
};

export default AboutMainAboutPage;
