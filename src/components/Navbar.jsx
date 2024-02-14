import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { styles } from "../styles";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "app__navbar" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <NavLink // Use NavLink instead of Link
          to='/'
          className='flex items-center w-9 h-9 rounded-lg bg-white justify-center font-bold shadow-md gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="blue-gradient_text">AM</p>
        </NavLink>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {/* Use NavLink components directly with specified styles */}
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
          >
            About
          </NavLink>
          <NavLink
            to='/works'
            className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
          >
            Works
          </NavLink>
          <NavLink
            to='/testimonials'
            className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
          >
            Testimonials
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
          >
            Projects
          </NavLink>
          <NavLink
            to='/blog'
            className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
          >
            Blog
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
          >
            Contact
          </NavLink>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl app__navbar`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {/* Use NavLink components directly with specified styles */}
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Home");
                }}
              >
                Home
              </NavLink>
              <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("About");
                }}
              >
                About
              </NavLink>
              <NavLink
                to='/works'
                className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Works");
                }}
              >
                Works
              </NavLink>
              <NavLink
                to='/testimonials'
                className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Testimonials");
                }}
              >
                Testimonials
              </NavLink>
              <NavLink
                to='/projects'
                className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Projects");
                }}
              >
                Projects
              </NavLink>
              <NavLink
                to='/blog'
                className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Blog");
                }}
              >
                Blog
              </NavLink>
              <NavLink
                to='/contact'
                className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Contact");
                }}
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





