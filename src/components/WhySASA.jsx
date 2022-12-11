import React from "react";
import "./css/WhySASA.scss";

const WhySASA = () => {
  return (
    <div className="why_sasa-container container dflex wrap">
      <div className="left-content">
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

      <div className="right-content">
        <div className="title">Our Top Notch Qualities</div>
        <ol className="dflex dflex-column gap-1">
          <li>Open and honest communication</li>
          <li>Commitment to customer service</li>
          <li>Solid track record of successful performance</li>
          <li>Commitment to ethical business practices</li>
          <li>Solid financial status</li>
          <li>Commitment to employee training and development</li>
        </ol>
      </div>
    </div>
  );
};

export default WhySASA;
