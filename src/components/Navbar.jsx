import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import titleNavbar from "../assets/10008.webp";
import phoneNavbar from "../assets/10007.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const scrollToTop = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          className="logo"
          src={titleNavbar}
          alt="Laundry"
          onClick={scrollToTop}
        />

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li
            className="dropdown-container"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="dropdown-trigger">
              <NavLink to="/blog">Blog</NavLink>
            </div>

            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/blog-details">Blog Details</NavLink>
                </li>
                <li>
                  <NavLink to="/elements">Element</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="phone">
          <img className="phone-icon" src={phoneNavbar} alt="Phone" />
          <span>| (08) 728 256 266</span>
        </div>
      </div>

      <div className="btn-appointment">
        <button className="appointment-btn">Make an Appointment</button>
      </div>
    </nav>
  );
};

export default Navbar;
