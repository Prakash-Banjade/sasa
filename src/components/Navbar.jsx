import React, { useEffect, useRef, useContext, useMemo } from "react";
import logo from "../assets/images/logo.gif";
import "./css/Navbar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tooltip } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";

import Thumb from "./ThemeToggleThumb";

import { ThemeContext } from "../context/context";

export default function Navbar() {
  const { dark } = useContext(ThemeContext);

  const navRef = useRef();
  const serviceTabRef = useRef();
  const moreBtnRef = useRef();


  let location = useLocation();

  useEffect(() => {
    serviceTabRef.current.style.color = location.pathname.includes("/services")
      ? "var(--primary-color)"
      : dark
      ? "var(--white)"
      : "var(--text-color)";
    moreBtnRef.current.style.display =
      location.pathname === "/services" ? "none" : "block";
  }, [location, dark]);



  let toggleMenu = () => {
    document.querySelector(".nav__links").classList.toggle("active");
    document.getElementById("bar").classList.toggle("toggled");
  };

  const navLinkStyle = ({ isActive }) => ({
    color: isActive
      ? "var(--primary-color)"
      : dark
      ? "var(--white)"
      : "var(--text-color)",
  });

  const navStyle = useMemo(() => {
    return {
      background: dark ? "transparent" : "rgb(250 250 250 / 0.9)",
      borderBottom: `1px solid ${dark?  '#343a46' : '#ebecf0'}`,
      backdropFilter: "blur(30px) drop-shadow(4px 4px 10px blue) saturate(150%)",
    };
  }, [dark]);

  const dropDownItemStyle = ({ isActive }) => ({
    color: isActive
      ? "var(--primary-color)"
      : dark
      ? "var(--white)"
      : "var(--text-color)",
  });

  return (
    <>
      <nav ref={navRef} className="nav" style={navStyle}>
        <div className="nav__logo dflex-center">
          <Link to="/" className="dflex dflex-center">
            <img
              src={logo}
              alt="logo"
              className="logoImg"
              id="logoImg"
              style={{ height: "30px" }}
            />
            <h1>SASA</h1>
          </Link>
        </div>

        <li className="menuToggle" onClick={toggleMenu}>
          <Tooltip title="Menu" arrow>
            <div
              className="bar"
              id="bar"
              style={{ backgroundColor: dark? 'white' : '#404756' }}
            ></div>
          </Tooltip>
        </li>

        <ul className={`nav__links menuDropDown ${dark ? 'dark' : 'light'}`} >
          <li className="nav_link nav-tab active">
            <NavLink
              style={navLinkStyle}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/"
            >
              Home
              <div className="bottom-row" style={navLinkStyle.bottom_row}></div>
            </NavLink>
          </li>
          <li className="nav_link nav-tab">
            <NavLink
              style={navLinkStyle}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/about"
            >
              About Us
              <div className="bottom-row" style={navLinkStyle.bottom_row}></div>
            </NavLink>
          </li>
          <li className="nav_link nav-tab">
            <NavLink
              style={navLinkStyle}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/latestposts"
            >
              Latest Posts
              <div className="bottom-row" style={navLinkStyle.bottom_row}></div>
            </NavLink>
          </li>
          <li className="nav_link services">
            <span
              ref={serviceTabRef}
              className="serviceSpan"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: dark ? "var(--white)" : "var(--text-color)",
              }}
            >
              Services{" "}
              <div className="dropDownIcon">
              <ExpandMoreIcon
                sx={{ color: "currentcolor", transform: "translateY(2px)" }}
                fontSize="small"
              />
              </div>
            </span>

            <ul className={`services__dropdown ${dark? 'dark' : 'light'}`}>
              <li className="dropdown_items">
                <NavLink to="services/drivinglicense" style={dropDownItemStyle}>Driving License</NavLink>
              </li>
              <li className="dropdown_items">
                <NavLink to="services/passport" style={dropDownItemStyle}>Passport Service</NavLink>
              </li>
              <li className="dropdown_items">
                <NavLink to="services/tuitionclasses" style={dropDownItemStyle}>Tution Classes</NavLink>
              </li>
              <li className="dropdown_items">
                <NavLink to="services/onlineforms" style={dropDownItemStyle}>Online Forms</NavLink>
              </li>
              <li className="dropdown_items" ref={moreBtnRef}>
                <NavLink to="/services">More</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav_link nav-tab">
            <NavLink style={navLinkStyle} to="/company">
              Company
              <div className="bottom-row" style={navLinkStyle.bottom_row}></div>
            </NavLink>
          </li>
          <li className="nav_link contact">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="nav_link">
            <Thumb />
          </li>
        </ul>
      </nav>
    </>
  );
}
