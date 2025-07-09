import React from "react";
import "../components/Elements.css";
import Hero7 from "../components/Hero7";
import Footer from "../components/Footer";
import element1 from "../assets/element1.webp";
import table from "../assets/table.png";
import table1 from "../assets/table2.png";
import pic1 from "../assets/pic1.jpg";
import { useNavigate } from "react-router-dom";

const Elements = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top Blog
    navigate("/elements");
  };
  const images = [
    require("../assets/pic1.jpg"),
    require("../assets/pic2.jpg"),
    require("../assets/pic3.jpg"),
    require("../assets/pic4.jpg"),
    require("../assets/pic5.jpg"),
    require("../assets/pic6.jpg"),
    require("../assets/pic7.jpg"),
    require("../assets/pic8.jpg"),
  ];
  return (
    <>
      <Hero7 />
      <div className="elements-page">
        <div className="sample">
          <h2 style={{ fontWeight: "normal" }}>Text Sample</h2>

          <p>
            Every avid independent filmmaker has <b>Bold</b> about making that
            <i>Italic</i> interest documentary, or short film to show off their
            creative prowess. Many have great ideas and want to “wow” the
            <sup>Superscript</sup> scene, or video renters with their big
            project. But once you have the<sub>Subscript</sub> “in the can” (no
            easy feat), how do you move from a <s>Strike through</s> of master
            DVDs with the <u>“Underline”</u> marked hand-written title inside a
            secondhand CD case, to a pile of cardboard boxes full of shiny new,
            retail-ready DVDs, with UPC barcodes and polywrap sitting on your
            doorstep? You need to create eye-popping artwork and have your
            project replicated. Using a reputable full service DVD Replication
            company like PacificDisc, Inc. to partner with is certainly a
            helpful option to ensure a professional end result, but to help with
            your DVD replication project, here are 4 easy steps to follow for
            good DVD replication results.
          </p>
        </div>
        <section className="button-samples">
          <h2>Sample Buttons</h2>

          {[
            "Default",
            "Primary",
            "Success",
            "Info",
            "Warning",
            "Danger",
            "Link",
            "Disabled",
          ].map((type) => (
            <div key={type} className="button-row" onClick={handleClick}>
              {[
                "filled",
                "outlined",
                "small-outlined",
                "round-filled",
                "round-outlined",
              ].map((style) => (
                <button
                  key={style}
                  className={`btn btn--${type.toLowerCase()} btn--${style}`}
                  disabled={type === "Disabled"}
                >
                  {type}
                </button>
              ))}
            </div>
          ))}

          <div className="size-row">
            {["Extra Large", "Large", "Default", "Medium", "Small"].map(
              (size) => (
                <button
                  key={size}
                  className={`btn btn--primary btn--${size
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {size}
                </button>
              )
            )}
          </div>

          <div className="size-row outlined">
            {["Extra Large", "Large", "Default", "Medium", "Small"].map(
              (size) => (
                <button
                  key={size}
                  className={`btn btn--outline btn--${size
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {size}
                </button>
              )
            )}
          </div>
          <hr></hr>
        </section>
        <h2 className="headl">Left Aligned</h2>
        <section className="left">
          <img
            className="service-icon"
            src={element1}
            alt="truck"
            style={{ objectFit: "contain" }}
          />

          <p>
            Recently, the US Federal government banned online casinos from
            operating in America by making it illegal to transfer money to them
            through any US bank or payment system. As a result of this law, most
            of the popular online casino networks such as Party Gaming and
            PlayTech left the United States. Overnight, online casino players
            found themselves being chased by the Federal government. But, after
            a fortnight, the online casino industry came up with a solution and
            new online casinos started taking root. These began to operate under
            a different business umbrella, and by doing that, rendered the
            transfer of money to and from them legal. A major part of this was
            enlisting electronic banking systems that would accept this new
            clarification and start doing business with me. Listed in this
            article are the electronic banking systems that accept players from
            the United States that wish to play in online casinos.
          </p>
        </section>
        <hr></hr>
        <h2 className="headr">Right Aligned</h2>
        <section className="right">
          <img
            className="service-icon"
            src={element1}
            alt="truck"
            style={{ objectFit: "contain" }}
          />
          <p>
            Over time, even the most sophisticated, memory packed computer can
            begin to run slow if we don’t do something to prevent it. The reason
            why has less to do with how computers are made and how they age and
            more to do with the way we use them. You see, all of the daily tasks
            that we do on our PC from running programs to downloading and
            deleting software can make our computer sluggish. To keep this from
            happening, you need to understand the reasons why your PC is getting
            slower and do something to keep your PC running at its best. You can
            do this through regular maintenance and PC performance optimization
            programs <br></br> <br></br>Before we discuss all of the things that
            could be affecting your PC’s performance, let’s talk a little about
            what symptoms
          </p>
        </section>

        <hr style={{ color: "grey" }}></hr>
        <h2>Definition</h2>
        <section className="definitions">
          {["Definition-01", "Definition-02", "Definition-03"].map((def) => (
            <div key={def} className="def-box">
              <h3>{def}</h3>
              <p>
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
          ))}
        </section>
        <hr></hr>

        <div className="section">
          <h2>Block Quotes</h2>
          <blockquote className="blog-quote">
            “Recently, the US Federal government banned online casinos from
            operating in America by making it illegal to transfer money to them
            through any US bank or payment system. As a result of this law, most
            of the popular online casino networks such as Party Gaming and
            PlayTech left the United States. Overnight, online casino players
            found themselves being chased by the Federal government. But, after
            a fortnight, the online casino industry came up with a solution and
            new online casinos started taking root. These began to operate under
            a different business umbrella, and by doing that, rendered the
            transfer of money to and from them legal. A major part of this was
            enlisting electronic banking systems that would accept this new
            clarification and start doing business with me. Listed in this
            article are the electronic banking”
          </blockquote>
        </div>
        <hr></hr>
        <div className="table">
          <h2>Table</h2>
          <img src={table} />
        </div>
        <section className="gallery-container">
          <h2>Image Gallery</h2>
          <div className="gallery-grid">
            {images.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`gallery-${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
        <section className="typography-lists">
          <img
            className="service-icon"
            src={table1}
            alt="truck"
            style={{ objectFit: "contain" }}
          />
        </section>

        <section className="form-section">
          <div className="form-elements">
            <h2>Form Element</h2>
            <form>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email address" />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Country" />
              <textarea placeholder="Message"></textarea>
              <input type="text" placeholder="Primary color" />
              <input type="text" placeholder="Accent color" />
              <input type="text" placeholder="Secondary" />
            </form>
          </div>

          <div className="side-controls">
            <div className="switches">
              <h4>Switches</h4>
              <label>
                <input type="checkbox" /> 01. Sample Switch
              </label>
              <label>
                <input type="checkbox" defaultChecked /> 02. Primary Color
                Switch
              </label>
              <label>
                <input type="checkbox" defaultChecked /> 03. Confirm Color
                Switch
              </label>
            </div>

            <div className="selectbox">
              <h4>Selectboxes</h4>
              <select>
                <option>English</option>
                <option>Urdu</option>
              </select>
            </div>

            <div className="checkboxes">
              <h4>Checkboxes</h4>
              <label>
                <input type="checkbox" /> 01. Sample Checkbox
              </label>
              <label>
                <input type="checkbox" defaultChecked /> 02. Primary Color
                Checkbox
              </label>
              <label>
                <input type="checkbox" defaultChecked /> 03. Confirm Color
                Checkbox
              </label>
              <label>
                <input type="checkbox" disabled /> 04. Disabled Checkbox
              </label>
              <label>
                <input type="checkbox" disabled defaultChecked /> 05. Disabled
                Checkbox Active
              </label>
            </div>

            <div className="radios">
              <h4>Radios</h4>
              <label>
                <input type="radio" name="radio" /> Option 1
              </label>
              <label>
                <input type="radio" name="radio" /> Option 2
              </label>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Elements;
