import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
