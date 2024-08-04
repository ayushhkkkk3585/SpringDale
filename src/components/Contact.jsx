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
                <p>
                  Springdale Public School, 123 Education Lane, Cityville,
                  State, ZIP Code
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-4 text-xl">
                <i className="fas fa-phone-alt"></i>
              </span>
              <div>
                <p className="font-bold">Phone</p>
                <p>1 (123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-xl">
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <p className="font-bold">e-Mail</p>
                <p>info@springdale.edu</p>
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
      <div className=" m-5 border-2 border-gray-200 rounded-lg p-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.062430472!2d-74.30933728043162!3d40.697019259110355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1722790070190!5m2!1sen!2sin"
          className="w-full h-96 rounded-lg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
