import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Companies from "../components/Companies";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Team/>
      <Companies/>
      <Testimonial />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
