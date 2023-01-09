import React, { useContext } from "react";
import "./css/WhySASA.scss";
import {ThemeContext} from '../context/context'

import AOS from 'aos';
import 'aos/dist/aos.css';

const WhySASA = () => {
  AOS.init();
  
  const {dark} = useContext(ThemeContext)
  return (
    <div className="why_sasa-container container dflex wrap">
      <div className="left-content" data-aos="zoom-in-up" >
        <h2 className="why-ques">Why SASA ?</h2>

        <div className="why-ans dflex">
          <p>
            We provide a <span>comprehensive range of services</span> that
            simplify the process of obtaining the necessary documents and
            information for each of our services. We provide{" "}
            <span>
              guidance on the necessary documents, fees, and application
              processes,
            </span>{" "}
            as well as offer assistance with choosing and enrolling in the right
            classes and programs. Furthermore, we also provide{" "}
            <span>advice and support for those seeking to study abroad</span>,
            helping you to better understand the various options and find the
            best fit for your needs. By providing these services in one place,
            we help to make these activities easier and more{" "}
            <span>accessible for everyone</span>.
          </p>
        </div>

        <ul className="tags-ans dfex dflex-column">
          <li>Positive Communication</li>
          <li>Immediate Response</li>
          <li>More Advice And Suggestions</li>
        </ul>
      </div>

      <div className="right-content" data-aos="zoom-in-up">
        <div className="title">Our Top Notch Qualities</div>
        <ol className="dflex dflex-column gap-1">
          <li style={{color: dark? 'var(--white)' : 'black'}}>Open and honest communication</li>
          <li style={{color: dark? 'var(--white)' : 'black'}}>Commitment to customer service</li>
          <li style={{color: dark? 'var(--white)' : 'black'}}>Solid track record of successful performance</li>
          <li style={{color: dark? 'var(--white)' : 'black'}}>Commitment to ethical business practices</li>
          <li style={{color: dark? 'var(--white)' : 'black'}}>Solid financial status</li>
          <li style={{color: dark? 'var(--white)' : 'black'}}>Commitment to employee training and development</li>
        </ol>
      </div>
    </div>
  );
};

export default WhySASA;
