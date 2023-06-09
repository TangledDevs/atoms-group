import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
    <section className="relative w-full bg-primary" id="about">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="relative lg:col-span-5 lg:-ml-8 xl:col-span-6 flex items-center justify-center">
          <img className="w-4/5" src="about-us.svg" alt="about us image" />
        </div>

        <div className="flex flex-col justify-center px-4 py-12 md:py-12 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-12 xl:col-span-6">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
            Welcome to Atoms Group
          </h1>
          <p className="mt-8 text-lg text-white">
            Atoms Group is a startup committed to providing exceptional services
            in the fields of digital marketing, education, and hospitality. Here
            is what sets us apart:
          </p>
          <ul className="mt-8 text-lg text-white list-disc list-inside">
            <li>Passionate experts dedicated to your success</li>
            <li>Tailored solutions to meet your unique needs</li>
            <li>Creative and innovative strategies</li>
            <li>Meaningful relationships with our clients</li>
            <li>Driving growth and impactful experiences</li>
            <li>Results-oriented approach</li>
            <li>Belief in the power of collaboration</li>
            <li>Commitment to making a difference</li>
          </ul>
          <p className="mt-8 text-lg text-white">
            Join us on this journey of growth and success. Together, we can make
            a difference.
          </p>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default About;
