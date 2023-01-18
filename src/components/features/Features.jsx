import React, { useContext, useEffect } from "react";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";
import "../css/Features.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../../context/context";

const featuresDesc = {
  "Quality Service":
    "Providing top-notch customer service and quality solutions to all customers.",
  "Comprehensive Solutions":
    "Offering a comprehensive range of services, such as driving licenses, passports, tuition classes, computer classes, and government-related suggestions to meet the diverse needs of customers.",
  "Experienced Staff":
    " Having a team of experienced professionals to provide customers with the best solutions and advice.",
  Convenience:
    "Providing convenient and fast services, so customers can get the help they need quickly and easily.",
  "Secure Systems":
    "Using secure systems to ensure the safety and security of customers’ information.",
};

const headings = Array.from(Object.keys(featuresDesc));
const Features = () => {
  useEffect(() => {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  const { dark } = useContext(ThemeContext);
  AOS.init();
  const iconStyle = {
    fontSize: "5rem",
    color: "var(--purple)",
    margin: "auto",
  };
  return (
    <div className="features-container container dflex dflex-column gap-2 dflex-wrap">
      <h2 className="heading" data-aos="fade-up">
        Our Key Features
      </h2>
      <div className="features-cards dflex wrap">
        <div id="cards">
          <div class="card">
            <div class={`card-content ${dark? 'dark' : 'light'}`}>
              <div class="card-image">
                <SentimentSatisfiedAltOutlinedIcon sx={iconStyle} />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  {/* <i class="fa-duotone fa-apartment"></i> */}
                  <div class="card-info-title">
                    <h3 className="text-center">{headings[0]}</h3>
                    <p className="text-center">{featuresDesc[headings[0]]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class={`card-content ${dark? 'dark' : 'light'}`}>
              <div class="card-image">
                <EmojiObjectsOutlinedIcon sx={iconStyle} />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  {/* <i class="fa-duotone fa-apartment"></i> */}
                  <div class="card-info-title">
                    <h3 className="text-center">{headings[1]}</h3>
                    <p className="text-center">{featuresDesc[headings[1]]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class={`card-content ${dark? 'dark' : 'light'}`}>
              <div class="card-image">
                <Groups2OutlinedIcon sx={iconStyle} />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  {/* <i class="fa-duotone fa-apartment"></i> */}
                  <div class="card-info-title">
                    <h3 className="text-center">{headings[2]}</h3>
                    <p className="text-center">{featuresDesc[headings[2]]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class={`card-content ${dark? 'dark' : 'light'}`}>
              <div class="card-image">
                <RecommendOutlinedIcon sx={iconStyle} />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  {/* <i class="fa-duotone fa-apartment"></i> */}
                  <div class="card-info-title">
                    <h3 className="text-center">{headings[3]}</h3>
                    <p className="text-center">{featuresDesc[headings[3]]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class={`card-content ${dark? 'dark' : 'light'}`}>
              <div class="card-image">
                <AssuredWorkloadOutlinedIcon sx={iconStyle} />
              </div>
              <div class="card-info-wrapper">
                <div class="card-info">
                  {/* <i class="fa-duotone fa-apartment"></i> */}
                  <div class="card-info-title">
                    <h3 className="text-center">{headings[4]}</h3>
                    <p className="text-center">{featuresDesc[headings[4]]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
