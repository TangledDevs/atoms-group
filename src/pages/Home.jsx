import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      <Pricing />
    </>
  );
};

export default Home;
