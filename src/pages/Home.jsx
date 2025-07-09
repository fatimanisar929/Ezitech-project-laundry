import React from "react";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Services from "../components/Services";

import Testimonial from "../components/Testimonial";
import MapSection from "../components/MapSection";
import FunFact from "../components/FunFact";
import AboutCompany from "../components/AboutCompany";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Process />
      <Services />
      <Testimonial />
      <FunFact />
      <AboutCompany />
      <MapSection />
      <Footer />
    </>
  );
};

export default Home;
