import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/mail", formData);
      if(res.status === 200){
        console.log("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Failed to send email", error.message);
    }
  };
  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-secondary">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            If you&apos;d like to get in touch with us, feel free to reach out
            using the contact information below or by filling out the contact
            form.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2" action="#">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-secondary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-secondary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-secondary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary h-32 text-base outline-none text-secondary py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg"
              >
                Submit
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-primary">admin@atomsgroup.net</a>
              <p>+91 67563 45834</p>
              <p className="leading-normal my-5">
                VVIT College Rd, Namburu,
                <br />
                Andhra Pradesh 522508, India
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
