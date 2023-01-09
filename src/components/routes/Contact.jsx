import React, { useContext } from "react";
import contactImg from "../../assets/images/contactImg.png";
import "../css/Contact.scss";
import { Button } from "@mui/material";
import HeroSectionTemplate from "../HeroSection_template";
import { ThemeContext } from "../../context/context";

const Contact = () => {
  const {dark} = useContext(ThemeContext)
  const heroSectionContent = {
    title: 'Contact Us',
    description: `We value all of our customers and thank you for your continued
    support. If you ever have any questions or concerns, please don't
    hesitate to reach out. Our team is available 24/7 to provide
    assistance. Thank you again for choosing us.`
  }
  return (
    <div className="contact-container">
      <HeroSectionTemplate title={heroSectionContent.title} description={heroSectionContent.description} />

      <div className="contact-field dflex wrap gap-2">
        <div className="left-content dflex-center">
          <img src={contactImg} alt="this is contact imgage" />
        </div>

        <div className="right-content">
          <h3>Have any question or suggestions?</h3>
          <small style={{ fontFamily: "var(--text-font)", maxWidth: "20ch", color: dark? 'var(--white)' : 'black' }}>
            We ensure your privacy is maintained. Feel free to ask any thing
            about SASA and its services.
          </small>

          <form
            action="https://formspree.io/f/xwkjevpe"
            method="POST"
            className="dflex dflex wrap gap-1"
          >
            <div className="name-field">
              <label style={{color: dark? 'var(--white)' : 'var(--text-color)'}} htmlFor="name">
                Your Name<span style={{fontSize: '13px'}}><sup>(Required)</sup></span>
              </label>
              <input style={{background: dark? 'white' : '#ddd'}} type="text"  id="name" name="Name" minLength={3} required autoComplete="off" />
            </div>

            <div className="email-field">
              <label style={{color: dark? 'var(--white)' : 'var(--text-color)'}} htmlFor="name">
                Your Email<span style={{fontSize: '13px'}}><sup>(Required)</sup></span>
                 
              </label>
              <input style={{background: dark? 'white' : '#ddd'}} type="email" placeholder="abc@gmail.com" id="email" name="E-mail" required autoComplete="off" />
            </div>

            <div className="phone-field">
              <label style={{color: dark? 'var(--white)' : 'var(--text-color)'}} htmlFor="phNumber">
                Your Phone no. (+ country code)<span style={{fontSize: '13px'}}><sup>(Required)</sup></span>
              </label>
              <input style={{background: dark? 'white' : '#ddd'}} pattern="^\+[1-9]{1}[0-9]{3,14}$" id="phNumber" placeholder="+97798..." name="Phone" required autoComplete="off" />
            </div>

            <div className="subject-field">
              <label style={{color: dark? 'var(--white)' : 'var(--text-color)'}} htmlFor="name">Subject</label>
              <input style={{background: dark? 'white' : '#ddd'}} type="text" minLength={10} autoComplete="off" />
            </div>

            <div className="message-field">
              <label style={{color: dark? 'var(--white)' : 'var(--text-color)'}} htmlFor="message">
                Message<span style={{fontSize: '13px'}}><sup>(Required)</sup></span>
              </label>
              <textarea
              style={{background: dark? 'white' : '#ddd'}}
                rows="4"
                id="message"
                minLength={20}
                required
                autoComplete="off"
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                maxWidth: "30ch",
                background: "transparent",
                border: "none",
              }}
            >
              <Button sx={{ padding: '8px 15px', width: '100%', fontSize: '1.2rem' }} variant="contained">
                Send
              </Button>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
