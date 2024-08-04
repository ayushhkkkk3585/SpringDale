import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "@material-tailwind/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <nav className="flex items-center">
            <Link to="/">
              <img
                className="h-6 w-auto sm:h-8 md:h-10  object-contain"
                src="/Logo.png"
                alt="Company Logo"
              />
            </Link>
          </nav>
          <div className="hidden md:flex list-none gap-4 ">
            <Button variant="gradient" color="teal" className="rounded-full">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="gradient" color="teal" className="rounded-full">
              <Link to="/faculty">Faculty</Link>
            </Button>
            <Button variant="gradient" color="teal" className="rounded-full">
              <Link to="/gallery">Gallery</Link>
            </Button>
            <Button variant="gradient" color="teal" className="rounded-full">
              <Link to="/contact">Contact Us!</Link>
            </Button>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden mt-4 text-black p-3 rounded-lg"
          >
            <ul className="list-none flex flex-col bg-[#F0EFEA] shadow-2xl rounded-lg p-4 gap-2">
              <Button variant="gradient" color="teal" className="rounded-full text-left">
                <Link to="/">Home</Link>
              </Button>
              <Button
                variant="gradient"
                color="teal"
                className="rounded-full text-left"
              >
                <Link to="/faculty">Faculty</Link>
              </Button>
              <Button
                variant="gradient"
                color="teal"
                className="rounded-full text-left"
              >
                <Link to="/gallery">Gallery</Link>
              </Button>
              <Button
                variant="gradient"
                color="teal"
                className="rounded-full text-left"
              >
                <Link to="/contact">Contact Us!</Link>
              </Button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
