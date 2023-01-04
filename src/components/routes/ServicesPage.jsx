import React from "react";
import { Link, Outlet } from "react-router-dom";
import HeroSectionTemplate from "../HeroSection_template";
import '../css/ServicesPage.scss'

import img1 from '../../assets/images/servicesImg/img_books.png'
import img2 from '../../assets/images/servicesImg/img_computer.png'
import img3 from '../../assets/images/servicesImg/img_forms.png'
import img4 from '../../assets/images/servicesImg/img_license.png'
import img5 from '../../assets/images/servicesImg/img_passport.png'
import img6 from '../../assets/images/servicesImg/img_sharemarket.png'
import img7 from '../../assets/images/servicesImg/img_webdesigning.jpg'

const ServicesPage = () => {
  const heroSectionContent = {
    title: "Our Services",
    description:
      "Welcome to our services webpage! We offer a variety of essential services including driving lessons, passport assistance, tuition classes, online form submissions, web designing and many more. Let us help you with all of your needs. Contact us for more information.",
  };

  const servicesImg = [img1, img2, img3, img4, img5, img6, img7]
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
              For those in need of a <strong><Link to="drivinglicense"> driving license</Link></strong>, we offer a quick and easy
              process to obtain your license. Our team of experienced
              professionals will guide you through every step of the process to
              ensure that you are fully prepared to hit the road.
              <br />
              In addition to driving licenses, we also offer <strong><Link to="passport"> passport</Link></strong> services.
              Whether you need a new passport or need to renew an existing one,
              we can help you get the documentation you need to travel the
              world.
              <br />
              For those looking to further their education, we offer <strong><Link to="tuitionclasses"> tuition
              classes</Link></strong> in a variety of subjects. Our experienced teachers are
              dedicated to helping you succeed and reach your full potential.
              <br />
              We also offer <strong><Link to="computerclasses">web designing and computer classes</Link></strong> for those looking
              to develop new skills in the digital world. Our classes are
              designed to be hands-on and interactive, ensuring that you get the
              most out of your learning experience.
              <br />
              In addition to these services, we also offer <strong><Link to="sharemarket">share market
              suggestion</Link></strong> to help you make informed investment decisions. Our
              team of financial experts will provide you with the insights and
              guidance you need to succeed in the stock market.
              <br />
              We are dedicated to providing <strong className="last"> top-quality services at competitive
              prices</strong>. If you have any questions about the services we offer,
              please don't hesitate to contact us. We look forward to helping
              you succeed!
              <br />
            </p>
          </div>

          <div className="right-content dflex-center dflex-column">
          <figure className="grid-center">
            {
              servicesImg.map(img => <img src={img} alt="service-img" key={img} />)
            }
          </figure>
          </div>
        </section>
        <Outlet />
      </div>
    </>
  );
};

export default ServicesPage;
