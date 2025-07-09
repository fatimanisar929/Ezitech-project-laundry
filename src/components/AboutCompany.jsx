import React from "react";
import "./AboutCompany.css";
import aboutImg from "../assets/10022.png";

const AboutCompany = () => {
  return (
    <section className="about-company">
      <div className="about-img">
        <img src={aboutImg} alt="about" />
      </div>
      <div className="about-content">
        <h2>About company</h2>
        <p>
          The automated process starts as soon as your clothes go into the
          machine. The outcome is gleaming clothes!
        </p>
        <p>
          The automated process starts as soon as your clothes go into the
          machine. The outcome is gleaming clothes!
        </p>
        <button className="about-btn">About Us</button>
      </div>
    </section>
  );
};

export default AboutCompany;
