import React, { useEffect, useRef, useState, useContext } from "react";
import logo_white from "../assets/images/logo.png";
import logo_blue from "../assets/images/logo.gif";
import "./css/Navbar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tooltip } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NavBackContext } from "../context/context";

export default function Navbar() {
  const navRef = useRef();
  const {setNavBack} = useContext(NavBackContext)
  const [logo, setLogo] = useState(logo_white);
  const [navListColor, setNavListColor] = useState("var(--white)");
  const [logoTextColor, setLogoTextColor] = useState("var(--white)");

  let location = useLocation();

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      navRef.current.classList.add("scrolled");
      setLogo(logo_blue);
      setNavListColor("var(--text-color)");
      setLogoTextColor("#138bc7");
      setNavBack('transparent')
    } else {
      navRef.current.classList.remove("scrolled");
      setLogo(logo_white);
      setNavListColor("var(--white)");
      setLogoTextColor("var(--white)");
      setNavBack('linear-gradient(to left, var(--primary-color), var(--purple))')
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

          <li className="menuToggle" onClick={toggleMenu}>
            <Tooltip title="Menu" arrow>
              <div
                className="bar"
                id="bar"
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
                  <Link to="services/drivinglicense">Driving License</Link>
                </li>
                <li className="dropdown_items">
                  <Link to="services/passport">Passport Service</Link>
                </li>
                <li className="dropdown_items">
                  <Link to="services/tuitionclasses">Tution Classes</Link>
                </li>
                <li className="dropdown_items">
                  <a href="/">Online Forms</a>
                </li>
                <li className="dropdown_items">
                  <Link to="/services">More</Link>
                </li>
              </ul>
            </li>
            <li className="nav_link">
              <a style={{ color: navListColor }} role="link">
                Company
              </a>
            </li>
            <li className="nav_link contact">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
    </>
  );
}
