import React, { useContext } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import logo from "../assets/images/logo.gif";
import './css/Footer.scss'
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/context";

const Footer = () => {
  const {dark} = useContext(ThemeContext)
  return (
    <footer
      className="footer container dflex-center dflex-column"
      style={{ gap: "2rem", marginBottom: 0 }}
    >
    <hr style={{background: dark? '#343a46' : '#ebecf0'}} />
      <NavLink to="/" className={() => "dflex dflex-center"}>
        <img
          src={logo}
          alt="logo"
          className="logoImg"
          id="logoImg"
          style={{ height: "50px" }}
        />
        <h3 style={{color: '#138bc7'}} className="logo-text">SASA</h3>
      </NavLink>

      <div className="social-icons dflex-center gap-1" >
        <a href="https://www.facebook.com/profile.php?id=100087576614717" target="_blank" rel="noopener noreferrer" style={{background: dark? 'var(--white)' : 'var(--text-color)'}} className="dflex-center">
          <FacebookOutlinedIcon sx={{color: dark? 'var(--text-color)' : 'var(--white)'}} />
        </a>

        <a href="mailto:group.sasa816@gmail.com" target="_blank" rel="noopener noreferrer" style={{background: dark? 'var(--white)' : 'var(--text-color)'}} className="dflex-center">
          <MailOutlineOutlinedIcon sx={{color: dark? 'var(--text-color)' : 'var(--white)'}} />
        </a>

        <a href="tel:+9779800784971" target="_blank" rel="noopener noreferrer" style={{background: dark? 'var(--white)' : 'var(--text-color)'}} className="dflex-center">
          <LocalPhoneOutlinedIcon sx={{color: dark? 'var(--text-color)' : 'var(--white)'}} />
        </a>
      </div>

    <div className="text-center">
      <p className="copyright" style={{color: 'var(--light-gray)'}}>
        Copyright &copy;-2022 | All rights reserved - SASA Group
      </p>
      <address className="address">Golpark, Butwal-3 | Shivraj-5, Kapilvastu <br /><strong>Nepal</strong></address>
    </div>
    </footer>
  );
};

export default Footer;
