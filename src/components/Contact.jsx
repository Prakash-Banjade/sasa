import React from "react";
import contactImg from "../assets/images/contactImg.jpg";
import "./css/Contact.scss";
import { Button } from "@mui/material";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="heroSection container grid-center">
        <article className="dflex-center dflex-column gap-2">
          <h2>Contact Us</h2>
          <p className="text-center">
            We value all of our customers and thank you for your continued
            support. If you ever have any questions or concerns, please don't
            hesitate to reach out. Our team is available 24/7 to provide
            assistance. Thank you again for choosing us.
          </p>
        </article>
      </div>

      <div className="contact-field dflex wrap gap-2">
        <div className="left-content dflex-center">
          <img src={contactImg} alt="this is contact imgage" />
        </div>

        <div className="right-content">
          <h3>Have any question or suggestions?</h3>
          <small style={{ fontFamily: "var(--text-font)", maxWidth: "20ch" }}>
            We ensure your privacy is maintained. Feel free to ask any thing
            about SASA and its services.
          </small>

          <form
            action="https://formspree.io/f/xwkjevpe"
            method="POST"
            className="dflex dflex wrap gap-1"
          >
            <div className="name-field">
              <label htmlFor="name">
                Your Name<span>*</span>
              </label>
              <input type="text"  id="name" name="Name" minLength={3} required autoComplete="off" />
            </div>

            <div className="email-field">
              <label htmlFor="name">
                Your Email<span>*</span>
                 
              </label>
              <input type="email" placeholder="abc@gmail.com" id="email" name="E-mail" required autoComplete="off" />
            </div>

            <div className="phone-field">
              <label htmlFor="phNumber">
                Your Phone no. (+ country code)<span>*</span>
              </label>
              <input pattern="^\+[1-9]{1}[0-9]{3,14}$" id="phNumber" placeholder="+97798..." name="Phone" required autoComplete="off" />
            </div>

            <div className="subject-field">
              <label htmlFor="name">Subject</label>
              <input type="text" minLength={10} autoComplete="off" />
            </div>

            <div className="message-field">
              <label htmlFor="message">
                Message<span>*</span>
              </label>
              <textarea
                id="message"
                minLength={20}
                row="40"
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
              <Button sx={{ width: "100%" }} variant="contained">
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
