import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HeroSectionTemplate from "../HeroSection_template";
import "../css/ServicesPage.scss";

import img1 from "../../assets/images/servicesImg/img_books.png";
import img2 from "../../assets/images/servicesImg/img_computer.png";
import img3 from "../../assets/images/servicesImg/img_forms.png";
import img4 from "../../assets/images/servicesImg/img_license.png";
import img5 from "../../assets/images/servicesImg/img_passport.png";
import img6 from "../../assets/images/servicesImg/img_sharemarket.png";
import img7 from "../../assets/images/servicesImg/img_webdesigning.jpg";
import img8 from "../../assets/images/servicesImg/img_ukWork.jpg";
import img9 from "../../assets/images/servicesImg/img_loksewa.png";
import img10 from "../../assets/images/servicesImg/img_edv.png";

const ServicesPage = () => {
  const heroSectionContent = {
    title: "Our Services",
    description:
      "Welcome to our services webpage! We offer a variety of essential services including driving lessons, passport assistance, tuition classes, online form submissions, web designing and many more. Let us help you with all of your needs. Contact us for more information.",
  };

  const regularServices = [
    {
      title: "Driving License",
      description:
        "Our vehicle license service provides a convenient and efficient way to obtain and renew vehicle registrations quickly and easily. We offer secure online payment options, comprehensive customer service, and vehicle registration services. Our team of experienced professionals can help you every step of the way.",
      img: img4,
      link: "drivinglicense",
    },
    {
      title: "Passport Service",
      description:
        "Our passport service provides customers with a convenient way to apply for a passport. We offer a secure and easy-to-use online application process, allowing customers to quickly and efficiently apply for their passports from their homes. Our service also offers an expedited service for those who need their passport more quickly. With our service, customers can rest assured that their passport application will be processed quickly and securely.",
      img: img5,
      link: "passport",
    },
    {
      title: "Tuition Classes",
      description:
        "Our tuition classes service offers personalized learning programs and one-on-one attention to help students improve their academic performance and achieve their goals. Our experienced teachers use a variety of instructional methods to ensure that each student gets the individual attention they need to succeed. We offer classes for all grade levels, covering a wide range of subjects including Math, Science, English, Social Studies, and more. With our flexible scheduling and convenient locations, we make it easy for students to get the help they need.",
      img: img1,
      link: "tuitionclasses",
    },
    {
      title: "Computer Classes",
      description:
        "Our tuition computer classes service provides one-on-one tutoring in a variety of computer programming languages and software applications. We cater to students of all ages and skill levels, with personalized lessons tailored to their specific needs and goals. Our experienced tutors will help you develop your technical proficiency and foster a love for coding and programming.",
      img: img2,
      link: "computerclasses",
    },
    {
      title: "Web Development",
      description:
        "Our web designing service provides beautiful, modern, and professional designs for businesses, organizations, and individuals. We create custom websites that are tailored to meet the specific needs of our clients. Our designs are mobile-friendly and optimized for search engines, so your website will look great on any device and rank higher in search results. We also provide ongoing maintenance and support to ensure your website is always up-to-date and functioning properly.",
      img: img7,
      link: "webdesigning",
    },
    {
      title: "Share Market Suggestions",
      description:
        "Our Share Market Suggestion Service provides personalized advice on investing in the stock market. Our team of experts analyzes the market data and makes recommendations on which stocks to buy and sell, as well as when to do so. We offer a tailored approach to ensure that you get the most out of your investment. Our services also provide timely updates and insights into the markets to keep you informed of the latest trends and developments. With our advice, you can maximize your profits and minimize your risks.",
      img: img6,
      link: "sharemarket",
    },
  ];

  const seasonalServices = [
    {
      title: "EDV Submission",
      description:
        "Our company offers a comprehensive DV form submission service to help individuals apply for the Diversity Visa (DV) program, also known as the green card lottery. Our team of experienced immigration professionals will guide you through the entire process, from start to finish.",
      img: img10,
      link: "onlineforms",
    },
    {
      title: "UK Seasonal Work",
      description:
        "We serve to help individuals apply for a UK seasonal work visa. The service includes assistance with the entire application process, including reviewing eligibility, gathering necessary documents, completing the application form, and providing guidance on the final steps of the process. The service aims to make the process stress-free and help individuals secure a great opportunity in the UK.",
      img: img8,
      link: "onlineforms",
    },
    {
      title: "Lok Sewa Aayog",
      description:
        "Our company offers a comprehensive Lok Sewa Aayog form submission service to help individuals apply for civil service positions in Nepal through the Public Service Commission (Lok Sewa Aayog). Our team of experienced professionals will guide you through the entire process, from start to finish.",
      img: img9,
      link: "onlineforms",
    },
    {
      title: "Other Online Forms",
      description:
        "We also offers different seasonal forms submission service. Many individuals are still not familiar with these online form submission technologies. We help them by guiding all the process needed for that particular form submission on lowest price.",
      img: img3,
      link: "onlineforms",
    },
  ];

  const ServiceCard = (props) => {
    return (
      <div className="card dflex-center dflex-column ">
        <figure className="grid-center">
          <img
            src={props.img}
            alt="our service img"
            style={{ display: props.img !== "" ? "block" : "none" }}
          />
        </figure>
        <h3 className="text-center">{props.title}</h3>
        <p className="text-center">{props.description}</p>
        <button>
          <Link to={props.link}>Explore</Link>
        </button>
      </div>
    );
  };

  const [serviceCategory, setServiceCategory] = useState([...regularServices, ...seasonalServices]);

  const handleBtnClick = (e) => {
    switch (e.target.id) {
      case "all":
        setServiceCategory([...regularServices, ...seasonalServices]);
        break;

      case "seasonal":
        setServiceCategory(seasonalServices);
        break;

      case "regular":
        setServiceCategory(regularServices);
        break;

      case "future":
        setServiceCategory([]);
        break;

      default:
        setServiceCategory([...regularServices, ...seasonalServices]);
    }

    Array.from(document.getElementsByClassName('service-action-btn')).forEach(btn => {
      btn.classList.remove('active')
    })

    e.target.classList.add('active')
  };

  const servicesImg = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <>
      <div className="servicesPage">
        <HeroSectionTemplate
          title={heroSectionContent.title}
          description={heroSectionContent.description}
        />

        <section className="service-summary container dflex gap-3 wrap">
          <div className="left-content dflex dflex-column gap-2">
            <h2 className="big-heading">Quick Overview</h2>
            <p>
              For those in need of a{" "}
              <strong>
                <Link to="drivinglicense"> driving license</Link>
              </strong>
              , we offer a quick and easy process to obtain your license. Our
              team of experienced professionals will guide you through every
              step of the process to ensure that you are fully prepared to hit
              the road.
              <br />
              In addition to driving licenses, we also offer{" "}
              <strong>
                <Link to="passport"> passport</Link>
              </strong>{" "}
              services. Whether you need a new passport or need to renew an
              existing one, we can help you get the documentation you need to
              travel the world.
              <br />
              For those looking to further their education, we offer{" "}
              <strong>
                <Link to="tuitionclasses"> tuition classes</Link>
              </strong>{" "}
              in a variety of subjects. Our experienced teachers are dedicated
              to helping you succeed and reach your full potential.
              <br />
              We also offer{" "}
              <strong>
                <Link to="computerclasses">
                  web designing and computer classes
                </Link>
              </strong>{" "}
              for those looking to develop new skills in the digital world. Our
              classes are designed to be hands-on and interactive, ensuring that
              you get the most out of your learning experience.
              <br />
              In addition to these services, we also offer{" "}
              <strong>
                <Link to="sharemarket">share market suggestion</Link>
              </strong>{" "}
              to help you make informed investment decisions. Our team of
              financial experts will provide you with the insights and guidance
              you need to succeed in the stock market.
              <br />
              We are dedicated to providing{" "}
              <strong className="last">
                {" "}
                top-quality services at competitive prices
              </strong>
              . If you have any questions about the services we offer, please
              don't hesitate to contact us. We look forward to helping you
              succeed!
              <br />
            </p>
          </div>

          <div className="right-content dflex-center dflex-column">
            <figure className="grid-center">
              {servicesImg.map((img) => (
                <img src={img} alt="service-img" key={img} />
              ))}
            </figure>
          </div>
        </section>

        <section className="services-grid-wrapper container dflex-center dflex-column">
          <h2 className="text-center grid-center">What You'll Get</h2>

          <div className="action-btns dflex-center wrap gap-1">
            <button
              className="service-action-btn active"
              id="all"
              onClick={handleBtnClick}
            >
              All
            </button>
            <button
              className="service-action-btn"
              id="regular"
              onClick={handleBtnClick}
            >
              Regular Services
            </button>
            <button
              className="service-action-btn"
              id="seasonal"
              onClick={handleBtnClick}
            >
              Seasonal Services
            </button>
            <button
              className="service-action-btn"
              id="future"
              onClick={handleBtnClick}
            >
              Future Plans
            </button>
          </div>

          <div className="services-category-card-container dflex-center wrap">
            {serviceCategory.map((service, ind) => {
              return (
                <ServiceCard
                  key={ind}
                  title={service.title}
                  description={service.description}
                  img={service.img}
                  link={service.link}
                />
              );
            })}
          </div>
        </section>
        <Outlet />
      </div>
    </>
  );
};

export default ServicesPage;
