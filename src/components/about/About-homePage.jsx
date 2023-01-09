import React, { useContext } from "react";
import Button from "@mui/material/Button";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import "../css/About.scss";
import Logo from "../../assets/images/logo.gif";
import logo_white from "../../assets/images/logo-white.png"
import { Link } from "react-router-dom";
import {ThemeContext} from '../../context/context'

import AOS from "aos";
import "aos/dist/aos.css";

const AboutMain = () => {
  const {dark} = useContext(ThemeContext)
  AOS.init();

  return (
    <div className="about-container container" style={{background: dark ? 'var(--primary-dark-light)': '#f2f2f2'}}>
      <div
        className="left-content dflex dflex-column gap-1"
        data-aos="fade-up"
        data-aos-offset="170"
      >
        <figure className="grid-center">
          <div className="rotatingBack">
            <div className="rotatingBackCircle grid-center"></div>
          </div>
          <img src={dark? logo_white : Logo} alt="rounded sasa logo" title="Logo" />
        </figure>
        <h3>Make better Decisions With SASA Services</h3>
        <p>
          Overcome challenges and grasp opportunities in this modern era with{" "}
          <strong>SASA</strong>{" "}
        </p>
        <Link to="/latestposts">
          <Button
            sx={{
              width: "fit-content",
              padding: 0,
              borderBottom: "2px solid currentcolor",
              borderRadius: "0",
            }}
          >
            Get In Touch
          </Button>
        </Link>
      </div>

      <div
        className="right-content dflex dflex-column gap-1"
        data-aos="fade-in"
        data-aos-offset="170"
      >
        <h4 className="dflex">
          <span></span>Who We Are
        </h4>
        <h2 className="big-heading" style={{ maxWidth: "28ch"}}>
          We Are Most Advanced Agency In The Market
        </h2>
        <p>
          "SASA is for getting your driving license, passport, and Indian
          university study permit. They provide various services and are very
          efficient. You would recommend us to anyone."
        </p>
        <p>
          SASA is the perfect organization for those who are looking for help
          with government-related work. We offer various services at a
          reasonable price and are always willing to help solve any financial
          problems. We also offer great suggestions on foreign visits to study
          or work.
        </p>
        <div className="ticks firstTick dflex">
          <CheckCircleRoundedIcon color="primary" />
          <span style={{color: dark? 'white' : 'black'}}>Business Strategy and Marketing</span>
        </div>
        <div className="ticks dflex">
          <CheckCircleRoundedIcon color="primary" />
          <span style={{color: dark? 'white' : 'black'}}>Excellence In Everyting</span>
        </div>

        <Link to="/about">More About Us</Link>
      </div>
    </div>
  );
};

export default AboutMain;
