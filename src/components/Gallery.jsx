import React from "react";
import { motion } from "framer-motion";
import Home from "./Home";
import Footer from "./Footer";

const Gallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Home />

      <div className=" flex justify-center mt-4 kanit-regular sm:text-xl md:text-2xl lg:text-3xl">
        <span className="relative group cursor-pointer inline-block text-black">
          SpringDale's Gallery
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </span>
      </div>
      <div className="flex justify-center mt-5">
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 gap-4 p-3 max-w-6xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.img
              className="w-full rounded-lg object-cover object-center"
              src="/Annuall sports day.jpg"
              alt="gallery-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.img
              className="w-full rounded-lg object-cover object-center"
              src="/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
              alt="gallery-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.img
              className="w-full rounded-lg object-cover object-center"
              src="/Fest.jpeg"
              alt="gallery-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.img
              className="w-full rounded-lg object-cover object-center"
              src="/Sports dat.avif"
              alt="gallery-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.img
              className="w-full rounded-lg object-cover object-center"
              src="/national-cancer-institute-N_aihp118p8-unsplash.jpg"
              alt="gallery-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.img
              className="w-full rounded-lg object-cover object-center"
              src="/Science Exhibition.jpeg"
              alt="gallery-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.img
              className="w-full rounded-lg object-cover object-center"
              src="/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
              alt="gallery-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.img
              className="w-full rounded-lg object-cover object-center"
              src="/john-schnobrich-2FPjlAyMQTA-unsplash.jpg"
              alt="gallery-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.img
              className="w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="gallery-photo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
