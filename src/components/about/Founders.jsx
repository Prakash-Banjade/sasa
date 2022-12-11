import React from "react";
import founder1 from '../../assets/images/founder_1.jpg'
import founder2 from '../../assets/images/founder_2.jpg'
import '../css/Founders.scss'

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const Founders = () => {
  return (
    <div className="founders dflex dflex-column gap-2 container">
      <article className="dflex dflex-column gap-1">
        <h2 className="big-heading text-center dflex dflex-column" style={{ marginBottom: '2rem'}}>Founders Of The Company<span style={{fontSize: '.8rem', color: 'var(--light-gray', fontWeight: 400}}>--quick look to our founders--</span></h2>
        <p>
          The two bachelor students, <strong>Arjun</strong> and <strong>Prakash</strong>, founded SASA.
          <br />
          <br />
          Arjun and Prakash both had a passion for helping people and providing
          services that would make the lives of others easier. They saw the need
          for a company that could provide these types of services and decided
          to create one. They worked hard to create a service that was reliable,
          efficient, and affordable.
          <br />
          <br />
          Arjun and Prakash are dedicated to providing excellent customer
          service and making sure that each customer is satisfied with their
          experience. They are always available to answer questions and provide
          advice. They understand the importance of providing quality services
          for their customers and strive to always be up to date with the latest
          technological advancements.
          <br />
          <br />
          Arjun and Prakash are committed to making sure that their customers
          are always taken care of and that their services are always up to
          date. They are constantly improving their services and making sure
          that they are offering the best possible experience to their
          customers.
        </p>
      </article>

      <div className="founders-details dflex-center wrap">
        <div className="founder dflex-center dflex-column gap-1">
            <figure >
            <div className="dflex-center">
                <img src={founder1} alt="Arjun paudel" />
            </div>
            </figure>
            <h3 className="text-center">Arjun Paudel</h3>
            <p className="text-center">BSC Student At<br /> Butwal Multiple Campus</p>

            <div className="founder-contact dflex-center wrap gap-1">
            <a href="https://www.facebook.com/profile.php?id=100009343787975" target="_blank" rel="noopener noreferrer">
                <FacebookOutlinedIcon />
                </a>

                <a href="mailto:arjunpaudel452@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MailOutlineOutlinedIcon />
                </a>

                <a href="tel:+9779824473803" target="_blank" rel="noopener noreferrer">
                    <LocalPhoneOutlinedIcon />
                </a>
            </div>
        </div>
        <div className="founder dflex-center dflex-column gap-1">
            <figure >
            <div className="dflex-center first"> 
                <img src={founder2} alt="Prakash Banjade" />
            </div>
            </figure>
            <h3 className="text-center">Prakash Banjade</h3>
            <p className="text-center">Bsc. CSI
            T Student At <br />Butwal Multiple Campus</p>
            <div className="founder-contact dflex-center wrap gap-1">
                <a href="https://www.facebook.com/prakash.banjade.5832/" target="_blank" rel="noopener noreferrer">
                <FacebookOutlinedIcon />
                </a>

                <a href="mailto:prakashbanjade191@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MailOutlineOutlinedIcon />
                </a>

                <a href="tel:+9779800784971" target="_blank" rel="noopener noreferrer">
                    <LocalPhoneOutlinedIcon />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
