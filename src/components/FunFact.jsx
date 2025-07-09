import React from "react";
import "./FunFact.css";
import img1 from "../assets/10020.webp";

const FunFact = () => {
  return (
    <section className="fun-fact">
      <p className="label">Fun Fact</p>
      <h2>Company achievement</h2>
      <div className="facts">
        <div>
          <h3>4000</h3>
          <p>
            The automated process starts as soon as your clothes go into the
            machine.
          </p>
        </div>
        <div>
          <h3>300+</h3>
          <p>
            The automated process starts as soon as your clothes go into the
            machine.
          </p>
        </div>
        <div>
          <h3>95%</h3>
          <p>
            The automated process starts as soon as your clothes go into the
            machine.
          </p>
        </div>
      </div>
      <img src={img1} alt="board" />
    </section>
  );
};

export default FunFact;
