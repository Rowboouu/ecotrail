import React from "react";
import welcomeImage from "../assets/images/welcome.png";
import Navbar from "../components/Navbar";
import TourSearch from "@/components/TourSearch";

const LandingPage = () => {
  return (
    <div
      id="landing-page"
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${welcomeImage})` }}
    >
      {/* Make Navbar a running header */}
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 w-full md:h-[75%] h-[65%] font-[Inter] px-8 md:px-0 pt-16">
        <div className="hidden md:block col-span-2"></div>
        <div className="col-span-1 md:col-span-3 h-full flex items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="font-bold text-3xl md:text-4xl text-[#003233]">
              Discover Sustainable Travel
              <br className="hidden md:block" /> Adventures with EcoTrail
            </div>
            <div className="font-normal text-sm md:text-lg text-[#003233]">
              Explore eco-friendly destinations and make an impact.
              <br className="hidden md:block" />
              Travel responsibly, leave a positive footprint with EcoTrail!
            </div>
            <div className="mt-2">
              <button className="bg-[#003233] text-white font-semibold py-3 px-8 md:py-4 md:px-12 rounded-4xl cursor-pointer hover:bg-[#005f4f] transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <TourSearch />
    </div>
  );
};

export default LandingPage as React.ComponentType;
