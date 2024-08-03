import React, { useEffect, useRef } from "react";
import Home from "./Home";
import { Carousel } from "@material-tailwind/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Avatar } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const img = imgRef.current;
    const carousel = carouselRef.current;

    gsap.fromTo(
      text,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      img,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      carousel,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: carousel,
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <>
      <Home />
      <div
        ref={sectionRef}
        className="flex justify-center items-center flex-col text-center px-4 py-8 md:py-12 lg:py-16 md:flex-row lg:flex-row "
      >
        <div
          ref={textRef}
          className="flex flex-col items-center text-center text-lg  mb-4 md:mb-6 lg:mb-8 max-w-2xl"
        >
          <p className="font-extrabold mb-2 sm:text-xl md:text-2xl lg:text-3xl  md:mb-4">
            Welcome to Springdale Public School, where your CHILD grows
          </p>
          <p className="mb-6 md:mb-8">
            "We nurture young minds for a brighter future."
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-2 md:mt-4">
            <button className="bg-black text-white px-6 py-2 rounded-3xl w-auto text-base md:text-lg">
              Contact Us!
            </button>
            <button className="text-black w-auto text-base md:text-lg">
              About Us!
            </button>
          </div>
        </div>

        <img
          ref={imgRef}
          src="Group 7523.svg"
          alt="PODAR logo"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        />
      </div>
      <div className="flex text-center text-lg font-semibold justify-center mb-6 sm:text-xl md:text-2xl lg:text-3xl">
        <p>A Glimpse of Events and activities we conduct</p>
      </div>

      <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
        <div
          ref={carouselRef}
          className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
        >
          <div className="aspect-square md:aspect-[16/9]">
            <Carousel className="rounded-xl h-full">
              <img
                src="/Annuall sports day.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="/Science Exhibition.jpeg"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="/Fest.jpeg"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="bg-[#130E0B] py-8 md:py-12 gap-4 lg:py-16 mt-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row md:flex-row items-start justify-between gap-8 font-poppins">
            <div className="w-full md:w-1/2">
              <p className="text-amber-500 font-bold text-xs md:text-base mb-2">
                History:
              </p>
              <p className="text-white font-bold text-xl sm:text-lg md:text-xl lg:text-3xl leading-tight">
                Founded in 1985, Springdale Public School has been dedicated to
                providing quality education and holistic development to
                students.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain"
                src="/black box.png"
                alt="Black box illustration"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row items-start justify-between gap-10 font-poppins">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain"
                src="/vision.png"
                alt="Black box illustration"
              />
            </div>

            <div className="w-full mt-7 md:w-1/2">
              <p className="text-amber-500 font-bold text-xs md:text-base mb-2">
                Vision:
              </p>
              <p className="text-white font-bold text-xl sm:text-lg md:text-xl lg:text-3xl leading-tight">
                To create a learning environment that fosters academic
                excellence, critical thinking, and ethical values.
              </p>
            </div>
          </div>
          <div className="flex flex-col  sm:flex-row mt-7 md:flex-row items-start justify-between gap-8 font-poppins">
            <div className="w-full md:w-1/2">
              <p className="text-amber-500 font-bold text-xs md:text-base mb-2">
              Mission:
              </p>
              <p className="text-white font-bold text-xl sm:text-lg md:text-xl lg:text-3xl leading-tight">
              To empower students with the knowledge, skills, and values needed to thrive in a dynamic world
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain"
                src="/Mission.png"
                alt="Black box illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
