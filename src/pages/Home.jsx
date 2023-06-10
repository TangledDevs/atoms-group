import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
    </>
  );
};

export default Home;
