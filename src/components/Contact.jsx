import React from "react";
import Home from "./Home";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Home />
      <div className="flex flex-col md:flex-row justify-between p-8 kanit-regular ">
        {/* Contact Info Section */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 ">
          <h2 className="text-3xl font-bold  mb-4">Get In Touch</h2>
          <p className="mb-8 text-gray-600">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <span className="mr-4 text-xl">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div>
                <p className="font-bold">Address</p>
                <p>0665 Broadway NY, 10001 USA</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-4 text-xl">
                <i className="fas fa-phone-alt"></i>
              </span>
              <div>
                <p className="font-bold">Phone</p>
                <p>855 100 4444</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-xl">
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <p className="font-bold">e-Mail</p>
                <p>info@barber.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-black p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Form</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 p-2 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="flex-1 p-2 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="e-Mail"
                className="flex-1 p-2 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="flex-1 p-2 rounded-md focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-2 rounded-md focus:outline-none"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-[#7c624a] text-white py-2 px-4 rounded-md hover:bg-[#5e4b38] transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
