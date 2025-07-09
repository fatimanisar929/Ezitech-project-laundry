import React from "react";
import "./Hero2.css";
import heroImage3 from "../assets/hero2.png";

const Hero3 = () => {
  return (
    <div className="hero-section">
      <img src={heroImage3} alt="Laundry" className="hero-bg" />
      <div className="hero-gradient"></div>
      <div className="hero-content">
        <h1>Our Services</h1>
      </div>
    </div>
  );
};

export default Hero3;
