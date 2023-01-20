import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./Service-card";
import "../css/Services.scss";

const ServicesFront = () => {
  const servicesInfo = {
    "Vehicle Lisence":
      "Our vehicle license service provides a convenient and efficient way to obtain and renew vehicle registrations quickly and easily. We offer secure online payment options, comprehensive customer service, and vehicle registration services. Our team of experienced professionals can help you every step of the way.",

    "Passport Service":
      "Our passport service provides customers with a convenient way to apply for a passport. We offer a secure and easy-to-use online application process, allowing customers to quickly and efficiently apply for their passports from their homes. Our service also offers an expedited service for those who need their passport more quickly. With our service, customers can rest assured that their passport application will be processed quickly and securely.",

    "Tuition Classes":
      "Our tuition classes service offers personalized learning programs and one-on-one attention to help students improve their academic performance and achieve their goals. Our experienced teachers use a variety of instructional methods to ensure that each student gets the individual attention they need to succeed. We offer classes for all grade levels, covering a wide range of subjects including Math, Science, English, Social Studies, and more. With our flexible scheduling and convenient locations, we make it easy for students to get the help they need.",

    "Computer Classes":
      "Our tuition computer classes service provides one-on-one tutoring in a variety of computer programming languages and software applications. We cater to students of all ages and skill levels, with personalized lessons tailored to their specific needs and goals. Our experienced tutors will help you develop your technical proficiency and foster a love for coding and programming.",

    "Web Designing":
      "Our web designing service provides beautiful, modern, and professional designs for businesses, organizations, and individuals. We create custom websites that are tailored to meet the specific needs of our clients. Our designs are mobile-friendly and optimized for search engines, so your website will look great on any device and rank higher in search results. We also provide ongoing maintenance and support to ensure your website is always up-to-date and functioning properly.",

    "Share Market Suggestions":
      "Our Share Market Suggestion Service provides personalized advice on investing in the stock market. Our team of experts analyzes the market data and makes recommendations on which stocks to buy and sell, as well as when to do so. We offer a tailored approach to ensure that you get the most out of your investment. Our services also provide timely updates and insights into the markets to keep you informed of the latest trends and developments. With our advice, you can maximize your profits and minimize your risks.",
  };

  const links=['services/drivinglicense', 'services/passport', 'services/tuitionclasses', 'services/computerclasses', 'services/webdesigning', 'services/sharemarket']


  return (
    <div className="services-container container">
    <div className="shadow_container dflex-center">
      <div className="shadows dfex dflex-column">
        <div className="shadow-dark shadow"></div>
        <div className="shadow-light shadow"></div>
      </div>
    </div>
      <h2 className="heading text-center">What We Serve</h2>

      <div className="services-card-container">
        {Array.from(Object.keys(servicesInfo)).map((title, index) => {
          return (
            <ServiceCard
              key={title}
              title={title}
              description={servicesInfo[title]}
              link={links[index]}
            />
          );
        })}
      </div>

      <div className="viewAllBtn dflex">
        <button style={{ marginLeft: "auto", marginTop: '1rem' }}>
          <Link to="services">View all</Link>
        </button>
      </div>
    </div>
  );
};

export default ServicesFront;
