import React, { useEffect } from "react";
import "../css/Testimonials.scss";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonials = () => {
    useEffect(() => {
      let slides = document.querySelectorAll(".slide");
      let btns = document.querySelectorAll(".btn");
      let currentSlide = 1;

      // Javascript for image slider manual navigation
      let manualNav = function (manual) {
        slides.forEach((slide) => {
          slide.classList.remove("active");

          btns.forEach((btn) => {
            btn.classList.remove("active");
          });
        });

        slides[manual].classList.add("active");
        btns[manual].classList.add("active");
      };

      btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
          manualNav(i);
          currentSlide = i;
        });
      });

      // Javascript for image slider autoplay navigation
      let repeat = function (activeClass) {
        let active = document.getElementsByClassName("active");
        let i = 1;

        let repeater = () => {
          setTimeout(function () {
            [...active].forEach((activeSlide) => {
              activeSlide.classList.remove("active");
            });

            slides[i].classList.add("active");
            btns[i].classList.add("active");
            i++;

            if (slides.length === i) {
              i = 0;
            }
            if (i >= slides.length) {
              return;
            }
            repeater();
          }, 10000);
        };
        repeater();
      };
      repeat();
    });

  return (
    <div className="testimonial-container container dflex wrap gap-2 ">
      <div className="right-content dflex" style={{alignItems: 'center'}}>
        <h2 className="big-heading big-font" style={{ fontSize: "4rem" }}>
          <span>What</span><br />
          <span>Our Customers</span><br />
          <span>Say About Us?</span>
        </h2>
      </div>

      <div className="left-content">
        <div className="img-slider">
          <div className="slide active">
            <div className="info">
              <FormatQuoteIcon
                sx={{ fontSize: "8rem", color: "var(--primary-color)" }}
              />
              <p className="message">
                "The driving license process was so seamless and easy with this
                company! I'm glad I chose them for my needs."
              </p>

              <p className="customer-name">Ram Kumar Mishra</p>
            </div>
          </div>
          <div className="slide">
            <div className="info">
              <FormatQuoteIcon
                sx={{ fontSize: "8rem", color: "var(--primary-color)" }}
              />
              <p className="message">
                "I received my passport in record time thanks to this company.
                I'm so impressed with their service!"{" "}
              </p>

              <p className="customer-name">Ram Kumar Pathak</p>
            </div>
          </div>
          <div className="slide">
            <div className="info">
              <FormatQuoteIcon
                sx={{ fontSize: "8rem", color: "var(--primary-color)" }}
              />
              <p className="message">
                "I took tuition classes with this company and the teacher was
                great! I learned so much and would highly recommend them."
              </p>

              <p className="customer-name">Tika Paudel</p>
            </div>
          </div>
          <div className="slide">
            <div className="info">
              <FormatQuoteIcon
                sx={{ fontSize: "8rem", color: "var(--primary-color)" }}
              />
              <p className="message">
                "The share market suggestions this company provided me with have
                been invaluable. I'm so thankful for their expertise!"{" "}
              </p>

              <p className="customer-name">Avinash Patel</p>
            </div>
          </div>
          <div className="slide">
            <div className="info">
              <FormatQuoteIcon
                sx={{ fontSize: "8rem", color: "var(--primary-color)" }}
              />
              <p className="message">
                "The web design they created for me was top-notch and exceeded
                my expectations! I'm so pleased with the outcome."{" "}
              </p>

              <p className="customer-name">Ishwor Dayal Mishra</p>
            </div>
          </div>
          <div className="navigation">
            <div className="btn active"></div>
            <div className="btn"></div>
            <div className="btn"></div>
            <div className="btn"></div>
            <div className="btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
