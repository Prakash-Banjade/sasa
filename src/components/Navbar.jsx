import React, { useEffect, useRef, useContext, useMemo } from "react";
import logo from "../assets/images/logo.gif";
import "./css/Navbar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tooltip } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";

import Thumb from "./ThemeToggleThumb";

import { NavBackContext } from "../context/context";
import { ThemeContext } from "../context/context";

export default function Navbar() {
  const { dark } = useContext(ThemeContext);

  const navRef = useRef();
  const serviceTabRef = useRef();
  const service1 = useRef();
  const service2 = useRef();
  const service3 = useRef();
  const service4 = useRef();
  const moreBtnRef = useRef();

  const { setNavBack, navBackColor } = useContext(NavBackContext);

  let location = useLocation();

  useEffect(() => {
    serviceTabRef.current.style.color = location.pathname.includes("/services")
      ? "var(--primary-color)"
      : dark
      ? "var(--white)"
      : "var(--text-color)";
    service1.current.style.color =
      location.pathname === "/services/drivinglicense"
        ? "var(--primary-color)"
        : "black";
    service2.current.style.color =
      location.pathname === "/services/passport"
        ? "var(--primary-color)"
        : "black";
    service3.current.style.color =
      location.pathname === "/services/tuitionclasses"
        ? "var(--primary-color)"
        : "black";
    service4.current.style.color =
      location.pathname === "/services/onlineforms"
        ? "var(--primary-color)"
        : "black";
    moreBtnRef.current.style.display =
      location.pathname === "/services" ? "none" : "block";
  }, [location, dark]);

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setNavBack("transparent");
    } else {
      setNavBack(navBackColor);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dark]);

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
      background: dark ? "#23272fee" : "rgb(250 250 250 / 0.9)",
      boxShadow: "0 2px 10px rgb(0 0 0 / 0.1)",
      backdropFilter: "blur(5px)",
    };
  }, [dark]);

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
              style={{ height: "40px" }}
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

        <ul className="nav__links" data-dropdown>
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
              <ExpandMoreIcon
                sx={{ color: "currentcolor", transform: "translateY(2px)" }}
                fontSize="small"
              />
            </span>
            <ul className="services__dropdown">
              <li className="dropdown_items" ref={service1}>
                <Link to="services/drivinglicense">Driving License</Link>
              </li>
              <li className="dropdown_items" ref={service2}>
                <Link to="services/passport">Passport Service</Link>
              </li>
              <li className="dropdown_items" ref={service3}>
                <Link to="services/tuitionclasses">Tution Classes</Link>
              </li>
              <li className="dropdown_items" ref={service4}>
                <Link to="services/onlineforms">Online Forms</Link>
              </li>
              <li className="dropdown_items" ref={moreBtnRef}>
                <Link to="/services">More</Link>
              </li>
            </ul>
          </li>
          <li className="nav_link">
            <NavLink style={navLinkStyle} to="/company">
              Company
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
