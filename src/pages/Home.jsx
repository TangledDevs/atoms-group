import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import PricingNew from "../components/PricingNew";
import Team from "../components/Team";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      {/* <Pricing /> */}
      <Team/>
      <PricingNew/>
      <Footer />
    </>
  );
};

export default Home;
