import React, { useEffect, useRef, useState } from "react";
import logo_white from "../assets/images/logo.png";
import logo_blue from "../assets/images/logo.gif";
import "./css/Navbar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef();
  const [logo, setLogo] = useState(logo_white);
  const [navListColor, setNavListColor] = useState("var(--white)");
  const [logoTextColor, setLogoTextColor] = useState("var(--white)");

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      navRef.current.classList.add("scrolled");
      setLogo(logo_blue);
      setNavListColor("var(--text-color)");
      setLogoTextColor("#138bc7");
    } else {
      navRef.current.classList.remove("scrolled");
      setLogo(logo_white);
      setNavListColor("var(--white)");
      setLogoTextColor("var(--white)");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let toggleMenu = () => {
    document.querySelector(".nav__links").classList.toggle("active");
    document.getElementById("bar").classList.toggle("toggled");
  };

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : navListColor,
  });

  return (
    <>
      <nav ref={navRef} className="nav">
        <div className="nav__logo">
          <Link to="/" className="dflex dflex-center">
            <img
              src={logo}
              alt="logo"
              className="logoImg"
              id="logoImg"
              style={{ height: "50px" }}
            />
            <h3 style={{ color: logoTextColor }}>SASA</h3>
          </Link>
        </div>

        <li className="menuToggle">
          <Tooltip title="Menu" arrow>
            <div
              className="bar"
              id="bar"
              onClick={toggleMenu}
              style={{ backgroundColor: navListColor }}
            ></div>
          </Tooltip>
        </li>

        <ul className="nav__links" data-dropdown>
          <li className="nav_link active">
            <NavLink style={navLinkStyle} to="/">
              Home
            </NavLink>
          </li>
          <li className="nav_link">
            <NavLink style={navLinkStyle} to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav_link">
            <NavLink style={navLinkStyle} to="/latestposts">
              Latest Posts
            </NavLink>
          </li>
          <li className="nav_link services">
            <span
              className="serviceSpan"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: navListColor,
              }}
            >
              Services{" "}
              <ExpandMoreIcon
                sx={{ color: "currentcolor", transform: "translateY(2px)" }}
                fontSize="small"
              />
            </span>
            <ul className="services__dropdown">
              <li className="dropdown_items">
                <a href="/">Vehicle License</a>
              </li>
              <li className="dropdown_items">
                <a href="/">Passport Service</a>
              </li>
              <li className="dropdown_items">
                <a href="/">Tution Classes</a>
              </li>
              <li className="dropdown_items">
                <a href="/">Online Forms</a>
              </li>
            </ul>
          </li>
          <li className="nav_link">
            <a style={{ color: navListColor }} role="link">
              Company
            </a>
          </li>
          <li className="nav_link contact">
            <NavLink to="/contact">
                Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
