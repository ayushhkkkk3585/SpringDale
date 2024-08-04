import React from "react";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Footer = () => {
  return (
    <>
      <motion.div
        className="w-full text-white "
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        <footer className="bg-[#130E0B] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h2 className="text-white text-lg font-bold mb-4">FOOTER</h2>
                <p className="text-sm text-gray-400">
                  "Welcome to Springdale Public School, where we nurture young
                  minds for a brighter future."
                </p>
              </div>
              <div>
                <h2 className="text-white text-lg font-bold mb-4">
                  CREATIVITY
                </h2>
                <ul className="text-sm text-gray-400">
                  <li className="mb-2">Website Guidline & Ideas</li>
                  <li className="mb-2">Tips & Tricks</li>
                  <li>Photography</li>
                </ul>
              </div>
              <div>
                <h2 className="text-white text-lg font-bold mb-4">
                  CREATIVITY
                </h2>
                <ul className="text-sm text-gray-400">
                  <li className="mb-2">Guidline & Ideas</li>
                  <li className="mb-2">Tips & Tricks</li>
                  <li>Photography</li>
                </ul>
              </div>
              <div>
                <h2 className="text-white text-lg font-bold mb-4">
                  CREATIVITY
                </h2>
                <ul className="text-sm text-gray-400">
                  <li className="mb-2">Email: info@springdale.edu</li>
                  <li className="mb-2">Phone: +1 (123) 456-7890</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default Footer;
