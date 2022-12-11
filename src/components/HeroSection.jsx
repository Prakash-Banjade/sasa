import { Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./css/HeroSection.scss";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

export default function HeroSection() {

  return (
    <>
      <div className="hero-container dflex wrap gap-2">
        <div className="left-content dflex dflex-column">
          <div className="hero-content-heading dflex wrap">
            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--heading-font)",
                color: "var(--primary-color)",
                paddingTop: "20px",
                textShadow: "2px 2px 10px rgb(0 0 0 / .5)",
              }}
            >
              SASA
            </Typography>
            <Typography
              className="hero_heading_secondary"
              variant="h2"
              sx={{
                fontFamily: "var(--heading-font)",
                color: "var(--white)",
                textShadow: "2px 2px 10px rgb(0 0 0 / .5)",
              }}
            >
              Is Your Need
            </Typography>
          </div>

          <div className="hero-content-paragraph">
            <p
              style={{
                maxWidth: "800px",
                margin: "20px auto",
                lineHeight: "2rem",
                fontWeight: 400,
                fontSize: "1rem",
                color: "var(--white)",
              }}
            >
              Driving लाइसेन्स देखि लिएर राहदानी (passport) सम्म बनाउन
              चाहनुहुन्छ भने SASA लाई सम्झनुहोस। हामी उचित मूल्यमा विभिन्न
              सेवाहरू प्रदान गर्दछौं र कुनै पनि वित्तीय समस्याहरू समाधान गर्न
              मद्दत गर्न सधैं इच्छुक छौं। हामी अध्ययन वा कामको लागि विदेश
              भ्रमणहरूमा पनि राम्रो सुझाव दिन्छौं।
            </p>
          </div>

          <div
            className="hero-content-button"
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "50px",
            }}
          >
            <Button
              className="hero-button"
              variant="contained"
              sx={{ boxShadow: "0 4px 10px rgb(0 0 0 / .2)" }}
            >
              <Link
                to="/about"
              >
                Learn More
              </Link>
            </Button>
            <Button
              className="hero-button"
              variant="outlined"
              href="/"
              sx={{
                boxShadow: "0 4px 10px rgb(0 0 0 / .2)",
                backgroundColor: "white",
                "&:hover": { backgroundColor: "white", opacity: ".9" },
              }}
            >
              Contact us
            </Button>
          </div>

          <div
            classname="social-media"
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
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

        <div className="right-content grid-center">
          <div className="stack"></div>
        </div>
      </div>
    </>
  );
}
