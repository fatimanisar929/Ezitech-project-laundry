import React, { useState } from "react";
import "./Testimonial.css";
import user1 from "../assets/10012.png";
import user2 from "../assets/10013.png";
import user3 from "../assets/10010.png";

const testimonials = [
  {
    image: user1,
    name: "Rupaya",
    quote:
      "The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!",
  },
  {
    image: user2,
    name: "Rupaya",
    quote:
      "The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!",
  },
  {
    image: user3,
    name: "Rupaya",
    quote:
      "The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getRelativeIndex = (offset) => {
    return (current + offset + testimonials.length) % testimonials.length;
  };

  return (
    <section className="testimonial-wrapper">
      <div className="testimonial-img-row">
        {[getRelativeIndex(-1), current, getRelativeIndex(1)].map(
          (index, i) => (
            <img
              key={i}
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className={`testimonial-img ${
                i === 1 ? "center-img" : "side-img"
              }`}
            />
          )
        )}
      </div>

      <div className="left">
        <button className="nav-btn" onClick={prev}>
          ❮
        </button>
      </div>
      <div className="right">
        <button className="nav-btn right" onClick={next}>
          ❯
        </button>
      </div>

      <div className="testimonial-text">
        <p className="quote">"{testimonials[current].quote}"</p>
        <p className="author">
          ⭐⭐⭐⭐⭐ <br></br> - {testimonials[current].name}
        </p>
      </div>

      <hr></hr>
    </section>
  );
};

export default Testimonial;
