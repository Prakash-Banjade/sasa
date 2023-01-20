import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

import "./css/HeroSection.scss";
import { ThemeContext } from "../context/context";

export default function HeroSection() {
  const { dark } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`hero-container dflex-center wrap dflex-column ${
          dark ? "dark" : "light"
        }`}
      >
        <div className="hero-content-heading">
          <h2 className={`hero-heading-main ${dark ? "dark" : "light"}`}>
            Unlock your potential with SASA Group
          </h2>
        </div>

        <div className="hero-content-paragraph">
          <p
            style={{
              maxWidth: "800px",
              margin: "20px auto",
              lineHeight: "2rem",
              fontWeight: 400,
              color: "var(--white)",
              padding: "0 20px",
            }}
            className="hero-content text-center"
          >
            "Empowering individuals and communities through a wide range of
            services, SASA Group is dedicated to helping you navigate the
            complexities of modern life."
          </p>
        </div>

        <div className="dflex-center dflex-column gap-1">
          <div className="hero-content-button dflex gap-1">
            <Button
              className="hero-button"
              variant="contained"
              sx={{
                boxShadow: "0 4px 10px rgb(0 0 0 / .2)",
                padding: "10px 18px",
                borderRadius: "25px",

                "&:hover": {
                  boxShadow: "2px 2px 15px 5px rgb(30 144 255 / .3)",
                },
              }}
            >
              <Link to="/about">Learn More</Link>
            </Button>
            <Button
              className="hero-button"
              variant="outlined"
              sx={{
                boxShadow: "0 4px 10px rgb(0 0 0 / .2)",
                backgroundColor: "white",
                padding: "10px 18px",
                borderRadius: "25px",
              }}
            >
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>

          <div
            className="social-media dflex"
            style={{
              gap: "10px",
            }}
          >
            <a
              href="https://www.facebook.com/profile.php?id=100087576614717"
              className="socialIcons"
            >
              <FacebookRoundedIcon
                sx={{
                  color: "var(--primary-color)",
                  fontSize: "3rem",
                  borderRadius: "5px",
                  padding: "8px",
                  zIndex: 5,
                  "&:hover": { cursor: "pointer", opacity: ".8" },
                }}
              />
            </a>
            <a href="mailto:group.sasa816@gmail.com" className="socialIcons">
              <EmailRoundedIcon
                sx={{
                  color: "var(--primary-color)",
                  fontSize: "3rem",
                  borderRadius: "5px",
                  padding: "8px",
                  zIndex: 5,
                  "&:hover": { cursor: "pointer", opacity: ".8" },
                }}
              />
            </a>
            <a href="tel:+9779824473803" className="socialIcons">
              <LocalPhoneRoundedIcon
                sx={{
                  color: "var(--primary-color)",
                  fontSize: "3rem",
                  borderRadius: "5px",
                  padding: "8px",
                  zIndex: 5,
                  "&:hover": { cursor: "pointer", opacity: ".8" },
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
