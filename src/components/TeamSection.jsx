import React from "react";
import { Tooltip, Button } from "@material-tailwind/react";
import Home from "./Home";
import { motion } from "framer-motion";
import Footer from "./Footer";

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Home />
      <motion.div
        className="w-full bg-[#130E0B] p-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="max-w-7xl mx-auto" variants={containerVariants}>
          <motion.h2
            className="text-center text-2xl font-bold mb-8"
            variants={itemVariants}
          >
            <span className="relative group cursor-pointer inline-block text-white">
              Our Team
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {/* Team member 1 */}
            <motion.div
              className="flex flex-col items-center p-4 bg-amber-500 rounded-lg transition-transform duration-300 hover:scale-105"
              variants={itemVariants}
            >
              <img
                src="/avataaa.png"
                alt="John Doe"
                className="w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full"
              />
              <Tooltip
                content="Principal, M.Ed, 20 years of experience in educational administration"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Button className="text-sm sm:text-base">John Doe</Button>
              </Tooltip>
            </motion.div>

            {/* Team member 2 */}
            <motion.div
              className="flex flex-col items-center p-4 bg-amber-500 rounded-lg transition-transform duration-300 hover:scale-105"
              variants={itemVariants}
            >
              <img
                src="/avataaars (2).png"
                alt="Jane Smith"
                className="w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full"
              />
              <Tooltip
                content="Vice Principal, M.Sc. in Physics, 15 years of teaching experience."
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Button className="text-sm sm:text-base">Jane Smith</Button>
              </Tooltip>
            </motion.div>

            {/* Team member 3 */}
            <motion.div
              className="flex flex-col items-center p-4 bg-amber-500 rounded-lg transition-transform duration-300 hover:scale-105"
              variants={itemVariants}
            >
              <img
                src="/avataaars.png"
                alt="David Wilson"
                className="w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full"
              />
              <Tooltip
                content="Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience."
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Button className="text-sm sm:text-base">David Wilson</Button>
              </Tooltip>
            </motion.div>

            {/* Team member 4 */}
            <motion.div
              className="flex flex-col items-center p-4 bg-amber-500 rounded-lg transition-transform duration-300 hover:scale-105"
              variants={itemVariants}
            >
              <img
                src="/avataaars (1).png"
                alt="Emily Johnson"
                className="w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full"
              />
              <Tooltip
                content="English Teacher, M.A. in English, 10 years of teaching experience."
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <Button className="text-sm sm:text-base">Emily Johnson</Button>
              </Tooltip>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="h-1 w-full bg-white mt-8 md:w-3/3 opacity-20 justify-center items-center"
          variants={itemVariants}
        ></motion.div>

        <motion.div
          className="flex flex-col items-center mt-7 md:flex-row md:justify-between md:items-center font-sans max-w-7xl mx-auto px-4 lg:px-8"
          variants={containerVariants}
        >
          <motion.div
            className="mb-6 md:mb-0 md:mr-6 lg:mr-10"
            variants={itemVariants}
          >
            <img
              className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-112 2xl:w-128 max-w-full h-auto"
              src="/graduated student with diploma.png"
              alt="Graduated student with diploma"
            />
          </motion.div>
          <motion.div
            className="flex flex-col items-start text-left w-full md:w-auto gap-2"
            variants={itemVariants}
          >
            <span className="text-amber-500 text-sm sm:text-base md:text-lg font-semibold mb-3 md:mb-4 kanit-regular">
              Life At Springdale:
            </span>
            <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl kanit-regular">
              Student Council:
              <br />
              President: Amy Parker, Grade 12
              <br />
              Vice President: Rajiv Mehta, Grade 11
              <br />
              Secretary: Lisa Wong, Grade 10
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 mt-7 md:flex-row md:justify-between md:items-start font-sans max-w-7xl mx-auto px-4 lg:px-8"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col items-start text-left w-full md:w-1/2 lg:w-5/12 gap-2"
            variants={itemVariants}
          >
            <span className="text-amber-500 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3 kanit-regular">
              Activities:
            </span>
            <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl kanit-regular">
              Extracurricular Activities: Music, Drama, Art, Sports, Robotics.
              <br />
              <br />
              Clubs and Societies: Literary Society, Environmental Club, Coding
              Club
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col items-start text-left w-full md:w-1/2 lg:w-5/12 gap-2"
            variants={itemVariants}
          >
            <span className="text-amber-500 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3 kanit-regular">
              Achievements:
            </span>
            <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl kanit-medium">
              John Smith - National Level Math Olympiad Winner
              <br />
              <br />
              Sarah Lee - Gold Medalist in State Swimming Championship
              <br />
              <br />
              Tech Innovators Club - Winners of Inter-School Robotics
              Competition
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer/>
    </>
  );
};

export default TeamSection;
