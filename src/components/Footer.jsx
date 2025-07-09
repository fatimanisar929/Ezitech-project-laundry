import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import titleNavbar from "../assets/10008.webp";
import img1 from "../assets/10020.webp";
import fb from "../assets/fb.png.png";
import twitter from "../assets/twitter.png.png";
import pinterest from "../assets/pinterest.png.png";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div>
          <img
            className="logo-text"
            src={titleNavbar}
            alt="Laundry"
            onClick={scrollToTop}
          />

          <p>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </p>
          <div classname="iconss">
            <img
              classname="board1"
              src={twitter}
              style={{
                width: "20px",
                height: "70%",
                objectFit: "contain",
                borderradius: " 50%",
                backgroundcolor: "grey",
                cursor: " pointer",
              }}
              alt="board"
              onClick={scrollToTop}
            />
            <img
              classname="board2"
              src={fb}
              style={{
                width: "20px",
                height: "70%",
                objectFit: "contain",
                cursor: " pointer",
              }}
              alt="board"
              onClick={scrollToTop}
            />
            <img
              classname="board3"
              src={pinterest}
              style={{
                width: "20px",
                height: "70%",
                objectFit: "contain",
                cursor: " pointer",
              }}
              alt="board"
              onClick={scrollToTop}
            />
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul style={{ cursor: "pointer" }}>
            <li onClick={scrollToTop}>- Dry Cleaning</li>
            <li onClick={scrollToTop}>- Dry Clean</li>
            <li onClick={scrollToTop}>- Ironing Services</li>
            <li onClick={scrollToTop}>- Laudary Service London</li>
            <li onClick={scrollToTop}> - Laundary App</li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <div className="getintouch">
              <li style={{ cursor: "pointer" }} onClick={scrollToTop}>
                (90) 989 789-8957
              </li>
            </div>
            <li style={{ cursor: "pointer" }} onClick={scrollToTop}>
              laundry@567.com
            </li>
            <li style={{ cursor: "pointer" }} onClick={scrollToTop}>
              789/A, Green road NYC-9089
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | This template is made with 🖤 by
          <strong
            style={{ color: "blue", cursor: "pointer" }}
            onClick={"https:\\colorlib.com"}
          >
            {" "}
            Colorlib
          </strong>
        </p>{" "}
        <img
          classname="board"
          src={img1}
          style={{ width: "1414px", height: "70%", objectFit: "contain" }}
          alt="board"
        />{" "}
      </div>
    </footer>
  );
};

export default Footer;
