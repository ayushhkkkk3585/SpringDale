import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "@material-tailwind/react";
import gsap from "gsap";
import { Link } from 'react-router-dom';

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
          <nav>
            <Link to="/">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
            />
            </Link>
          </nav>
          <div className="hidden md:flex list-none gap-4">
            <li> <Link to="/faculty">Faculty</Link></li>
            <li>About</li>
            <li>Schools</li>
            <li>Staff</li>
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
            className="md:hidden mt-4 bg-teal-400 text-black p-3 rounded-lg"
          >
            <ul className="list-none flex flex-col gap-2">
              <li>Faculty</li>
              <li>About</li>
              <li>Schools</li>
              <li>Staff</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
