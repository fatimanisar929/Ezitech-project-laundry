import React from "react";
import "./Hero.css";
import heroImage from "../assets/10021.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <img
        src={heroImage}
        alt="Laundry"
        style={{ height: "50%", width: "100%" }}
        className="hero-bg"
      />
      <div className="hero-gradient"></div>
      <div className="hero-content">
        <h1>
          Quality Laundry <br />
          Service In Your City
        </h1>
        <p>We take care about cleenness of your cloth</p>
        <button className="hero-btn">Explore Services</button>
      </div>
    </div>
  );
};

export default Hero;
