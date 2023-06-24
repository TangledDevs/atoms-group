import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full bg-white" id="home">
      <div className="mx-auto max-w-7xl lg:py-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1 cursor-pointer">
            <div className="rounded-full bg-white p-1 px-2">
              <p className="text-sm font-medium">We&apos;re hiring</p>
            </div>
            <p className="text-sm font-medium">Join our team &rarr;</p>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-6xl">
            People who care about your growth
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Atoms Group is a startup dedicated to providing exceptional services
            in digital marketing, education, and hospitality. We believe in the
            power of growth and strive to help individuals and businesses
            succeed in their respective fields.
          </p>
        </div>

        <div className="py-6 relative lg:col-span-5 lg:-mr-8 xl:col-span-6 flex items-center justify-center">
          <img className="w-4/5 " src="hero.svg" alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
