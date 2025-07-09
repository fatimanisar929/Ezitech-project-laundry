import React, { useState } from "react";
import "./Contact.css";

import alert from "../assets/alert.png";
import home from "../assets/home.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.message)
      newErrors.message =
        "um...yea, you have to write something to send this form.";
    if (!form.name) newErrors.name = "come on, you have a name, don't you?";
    if (!form.email) newErrors.email = "no email, no message";
    if (!form.subject)
      newErrors.subject = "come on, you have a subject, don't you?";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Message sent ✅");
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="contact-container">
      <div className="map-placeholder">
        <img src={alert} style={{ height: "12%" }} alt="message-error" />
        <h3>Oops! Something went wrong.</h3>
        <p>
          This page didn’t load Google Maps correctly. See the JavaScript
          console for technical details.
        </p>
      </div>

      <div className="contact-content">
        <div className="form-section">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit} noValidate>
            <textarea
              className="message"
              name="message"
              placeholder=" Enter Message "
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <div className=" input-row ">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            {errors.name && <p className="error">{errors.name}</p>}
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              value={form.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="error">{errors.subject}</p>}

            <button type="submit">SEND</button>
          </form>
        </div>

        <div className="info-section">
          <div className="info-box">
            <img
              src={home}
              class-Name="icon"
              style={{ height: "30px" }}
              alt="message-error"
            />
            <div>
              <h5>Buttonwood, California.</h5>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>

          <div className="info-box">
            <img
              src={phone}
              class-Name="icon"
              style={{ height: "30px" }}
              alt="phone"
            />

            <div>
              <h5>+1 253 565 2365</h5>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>

          <div className="info-box">
            <img
              src={mail}
              class-Name="icon"
              style={{ height: "30px" }}
              alt="mail"
            />
            <div>
              <h5>support@colorlib.com</h5>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
