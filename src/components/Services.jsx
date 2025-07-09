import React from "react";
import "./Services.css";
import img1 from "../assets/10011.png";
import img2 from "../assets/10019.png";
import img3 from "../assets/10015.png";

const Services = () => {
  return (
    <section className="services-section">
      <p className="services-label">Services</p>
      <h2>Services we offer</h2>

      <div className="services-grid">
        <img src={img1} alt="Folding Clothes" />
        <div className="service-card blue">
          <img
            className="service-icon"
            src={img3}
            alt="truck"
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />

          <h3>Cloth Laundry</h3>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>
        <div className="service-card blue">
          <img
            className="service-icon"
            src={img3}
            alt="truck"
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />

          <h3>Cloth Ironing</h3>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>
        <img src={img2} alt="Ironing Clothes" />
      </div>
    </section>
  );
};

export default Services;
