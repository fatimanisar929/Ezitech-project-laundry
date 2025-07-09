import React from "react";
import "./Hero5.css";
import heroImage3 from "../assets/hero2.png";

const Hero5 = () => {
  return (
    <div className="hero-section">
      <img src={heroImage3} alt="Laundry" className="hero-bg" />
      <div className="hero-gradient"></div>
      <div className="hero-content">
        <h1>Blog</h1>
      </div>
    </div>
  );
};

export default Hero5;
