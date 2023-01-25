import React, { useContext } from "react";
import HeroSection from "../HeroSection";
import Tags from "../Tags";
import AboutMain from "../about/About-homePage";
import ServicesFront from "../services/Services-main";
import Features from "../features/Features";
import WhySASA from "../WhySASA";
import Conclusion from "../Conclusion";
import Typed from "react-typed";
import { ThemeContext } from "../../context/context";

const HomePage = () => {
  const { dark } = useContext(ThemeContext);
  const typeWriterStyle = {
    fontSize: "3.5rem",
    textShadow: "0 0 15px 2px rgb(30 144 255 / .7)",
    fontWeight: 600,
    height: '300px',
    fontFamily: "var(--heading-font)",
    margin: "1em 0",
    padding: "1em 20px",
    color: dark ? "var(--white)" : "var(--primary-dark)",
    // margin: 'auto';
    textAlign: "center",
    borderRadius: "50%",
    background:
      "radial-gradient(rgb(30 144 255 / .12), rgb(30 144 255 / .05), transparent, transparent)",
  };

  const hrStyle = {
    border: "none",
    background: dark ? "var(--line-color-dark)" : "var(--line-color-light)",
    height: "1px",
    width: "90%",
    margin: "auto",
  };
  return (
    <>
      <HeroSection />
      <Tags />
      <AboutMain />
      <hr style={hrStyle} />
      <ServicesFront />
      <hr style={hrStyle} />
      <Features />
      <div className="typeWriter dflex center dflex-column gap-1" style={typeWriterStyle}>
        <span style={{ color: "var(--primary-color)" }}>SASA Group - </span>

        <Typed
          strings={[
            "Your reliable partner",
            "Simplifying the journey",
            "Unlocking potential",
            "One-stop solution",
            "Simplifying complexity",
            "Achieving the impossible",
            "Partnering for success",
            "Reaching your destination",
          ]}
          typeSpeed={80}
          backSpeed={80}
          loop
        />
      </div>
      <hr style={hrStyle} />
      <WhySASA />
      <hr style={hrStyle} />
      <Conclusion />
    </>
  );
};

export default HomePage;
