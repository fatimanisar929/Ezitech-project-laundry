import React from "react";
import "./MapSection.css";
import mapImg from "../assets/10016.png"; // map background image

const MapSection = () => {
  return (
    <section className="map-section">
      <img src={mapImg} alt="map" className="map-image" />
    </section>
  );
};

export default MapSection;
