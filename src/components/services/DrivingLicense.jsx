import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { NavBackContext } from "../../context/context";
import "../css/DrivingLicense.scss";
import ServicesHeroSection from "./ServicesHeroSection";
import heroImg from "../../assets/images/drivingLicense.png";

import AOS from "aos";
import "aos/dist/aos.css";

const DrivingLicense = () => {
  AOS.init();
  const { setNavBack, navBack } = useContext(NavBackContext);
  return (
    <>
      <div className="dl_container">
        <div className="nav-back" style={{ background: navBack }}></div>
        <ServicesHeroSection
          heroTitle="Grab Your Driving License With SASA"
          heroDescription={`"A driving license is the key to freedom and independence. Let us help
          you unlock those doors at SASA."`}
          heroImg={heroImg}
        />
      </div>

      <section className="saying dflex">
        <h4 className="text" data-aos="fade-up">
          Obtaining a driving license is a rite of passage that opens up a world
          of opportunities and freedom. At <span>SASA</span>, we are dedicated
          to helping you navigate the process and achieve your goals in a timely
          and cost-effective manner. Our team of experienced professionals is
          here to provide you with the resources and support you need to
          succeed. So don't let the fear of the unknown hold you back - take the
          first step towards independence and apply for your driving license
          today.
        </h4>
      </section>

      <section className="license-features">
        <ol>
          <li className="feature1" data-aos="fade-down" data-aos-offset="300">
            <h2>
              
              Easy online form submission
            </h2>
            <p>
              At our driving license agency, we make it easy for you to fill out
              the online driving license form. Our user-friendly platform is
              designed to streamline the application process, allowing you to
              complete the necessary paperwork and submit it quickly and easily.
              Simply follow the prompts on our website and provide the required
              information. Our system will guide you through the process step by
              step, ensuring that you don't miss any important details. With our
              online form, you can save time and avoid the hassle of standing in
              line at the agency. Get started today and take the first step
              towards obtaining your driving license!
            </p>
          </li>

          <span className="firstSpan">&lt;&gt;</span>

          <li className="feature2" data-aos="fade-down" data-aos-offset="300">
            <h2>
              
              Any Category Vehicle
            </h2>
            <p>
              We help you get the driving licenses for all categories of
              vehicles. This includes cars, trucks, motorcycles, buses, and any
              other type of motor vehicle. Our team of experienced professionals
              is here to help you obtain the necessary documentation and pass
              the required exams to become a licensed driver. We offer a variety
              of services, including written and practical driving exams, driver
              education programs, and the issuance and renewal of driving
              licenses. Whether you're a first-time driver or an experienced
              professional, we have the resources and expertise to help you get
              on the road safely and confidently.
            </p>
          </li>

          <span className="secondSpan">&lt;&gt;</span>

          <li className="feature3" data-aos="fade-down" data-aos-offset="300">
            
            <h2>Easy category addition and re-tiral form submission</h2>
            <p>
              We assist you with the process of adding or retiring a vehicle
              category on your license. Whether you're looking to add a
              motorcycle endorsement or retire a commercial driver's license, we
              can help. Our team of experienced professionals is here to guide
              you through the form submission process, ensuring that all
              necessary documentation is completed accurately and efficiently.
              Simply let us know what you need, and we will work with you to
              make the process as smooth as possible. With our help, you can
              easily update your driving license to reflect your current vehicle
              categories.
            </p>
          </li>

          <span className="thirdSpan">&lt;&gt;</span>

          <li className="feature4" data-aos="fade-down" data-aos-offset="300">
            
            <h2>Suggestions in each steps: biometrics, written exam, trial</h2>
            <p>
              We help you take the necessary biometrics, written exam, and road
              test. Our team of professionals is here to guide you through each
              step of the process, ensuring that you have the knowledge and
              skills necessary to become a safe and confident driver. We offer a
              variety of services to help you prepare for these exams, including
              driver education programs and practice tests. Whether you're a
              first-time driver or an experienced professional, we have the
              resources and expertise to help you succeed. Let us help you get
              on the road and achieve your driving goals!
            </p>
          </li>

          <span className="forthSpan">&lt;&gt;</span>

          <li className="feature5" data-aos="fade-down" data-aos-offset="280">
            
            <h2>100% guarantee license within a month</h2>
            <p>
              We are committed to helping you get your driving license in a
              timely manner. In fact, we guarantee that you will receive your
              license within a month of starting the process. Our team of
              experienced professionals is here to guide you through each step
              of the process, ensuring that you have the knowledge and skills
              necessary to pass the required exams and become a licensed driver.
              We offer a variety of services to help you prepare, including
              written and practical driving exams, driver education programs,
              and practice tests. With our help, you can confidently and
              efficiently achieve your goal of obtaining a driving license.
            </p>
          </li>
        </ol>
      </section>

      <section className="emergencyLicense dflex wrap ">
      <div className="left-content">
        <h2 className="heading">Emergency license on worth pricing</h2>
        <p>
        We provide emergency driving licenses does so at a cost that is considered reasonable or worth the price. Emergency driving licenses are issued in situations where an individual needs to obtain a license on a expedited basis, such as in the case of an unexpected life event or emergency situation. These types of licenses are typically more expensive than regular licenses due to the expedited processing and issuance. However, SASA strives to keep the cost of the emergency license as reasonable as possible, ensuring that it is still worth the price for the individual in need.
        </p>
      </div>

      <div className="right-content">
        <h3>You are at the right place.<br />Get Your License Now!</h3>
        <button>
          <Link to="/contact">
            Contact Us
          </Link>
        </button>
      </div>
      </section>
    </>
  );
};

export default DrivingLicense;
