import React from "react";
import "./Hero2.css";
import heroImage2 from "../assets/hero2.png";

const Hero2 = () => {
  return (
    <div className="hero-section">
      <img src={heroImage2} alt="Laundry" className="hero-bg" />
      <div className="hero-gradient"></div>
      <div className="hero-content">
        <h1>Contact Us</h1>
      </div>
    </div>
  );
};

export default Hero2;
