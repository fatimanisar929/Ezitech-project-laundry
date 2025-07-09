import React from "react";
import "./Process.css";

import img2 from "../assets/10003.svg";
import img3 from "../assets/10004.svg";
import img4 from "../assets/10002.svg";

const Process = () => {
  return (
    <section className="process-section">
      <p className="process-label">Our Process</p>
      <h2>This is how we work</h2>
      <div className="process-cards">
        <div className="process-card">
          <img className="process-icon" src={img4} alt="Folding Clothes" />
          <h4>We Collect Your Clothes</h4>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>
        <div className="process-card">
          <img className="process-icon" src={img2} alt="Hand Wash" />

          <h4>Wash Your Clothes</h4>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>
        <div className="process-card">
          <img className="process-icon" src={img3} alt="truck" />

          <h4>Get Delivery</h4>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>
      </div>
      <hr></hr>
    </section>
  );
};

export default Process;
