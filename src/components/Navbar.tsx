import React, { useState, useEffect } from "react";
import Logo from "../assets/images/ecotrail_logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full py-1 fixed top-0 z-50 transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-[#003233]"
      }`}
    >
      <nav className="flex justify-between items-center px-4 py-3 lg:mx-[10%] tracking-wider">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("landing-page")}
        >
          <img src={Logo} alt="" className="h-10" />
          <div className="text-white text-lg font-semibold font-[Inter]">
            EcoTrail
          </div>
        </div>
        <div className="hidden lg:flex text-white font-light gap-x-8 font-[Inter]">
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("landing-page")}
          >
            Home
          </div>
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("about-us")}
          >
            About Us
          </div>
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("destinations")}
          >
            Destinations
          </div>
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("subscribe")}
          >
            Contact
          </div>
        </div>
        <button className="hidden lg:block bg-[#003233] text-white font-semibold py-2 px-6 rounded-4xl cursor-pointer hover:bg-[#005f4f] transition-colors duration-300">
          Book Now
        </button>
        <div
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </nav>
      <div
        className={`lg:hidden bg-[#003233] text-white font-light font-[Inter] flex flex-col gap-y-4 p-4 transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div
          className="cursor-pointer"
          onClick={() => {
            scrollToSection("landing-page");
            setIsMobileMenuOpen(false);
          }}
        >
          Home
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            scrollToSection("about-us");
            setIsMobileMenuOpen(false);
          }}
        >
          About Us
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            scrollToSection("destinations");
            setIsMobileMenuOpen(false);
          }}
        >
          Destinations
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            scrollToSection("subscribe");
            setIsMobileMenuOpen(false);
          }}
        >
          Contact
        </div>
        <button
          className="bg-white text-[#003233] font-semibold py-2 px-6 rounded-4xl cursor-pointer hover:bg-gray-400 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Navbar as React.ComponentType;
