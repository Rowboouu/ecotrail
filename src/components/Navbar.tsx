import React from "react";
import Logo from "../assets/images/ecotrail_logo.png";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen h-[10%]">
      <nav className="flex justify-between items-center px-4 py-3 mx-[230px] tracking-wider">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" className="h-10" />
          <div className="text-white text-lg font-semibold font-[Inter] cursor-pointer">
            EcoTrail
          </div>
        </div>
        <div className="flex text-white font-light gap-x-8 font-[Inter]">
          <div className="cursor-pointer">Home</div>
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
          <div className="cursor-pointer">Contact</div>
        </div>
        <button className="bg-[#003233] text-white font-semibold py-2 px-6 rounded-4xl cursor-pointer">
          Book Now
        </button>
      </nav>
    </div>
  );
};

export default Navbar as React.ComponentType;
