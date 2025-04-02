import React from "react";
import islandImage from "../assets/images/back-view-island-outdoors-tree-standing.png";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="w-full min-h-screen flex items-center justify-center font-[Inter] px-4"
    >
      <div className="flex flex-row w-full md:w-[75%] items-center justify-between gap-8">
        <div className="flex flex-col gap-6 h-full items-start justify-center w-1/2">
          <div className="font-bold text-3xl md:text-4xl text-[#003233]">
            <span className="text-sm md:text-base font-normal tracking-[5px] md:tracking-[10px]">
              WITH ECOTRAIL,
            </span>
            <br />
            DISCOVER THE WORLD,
            <br /> <span className="text-[#52996A]">SUSTAINABLY</span>
          </div>
          <div className="font-normal text-base md:text-lg text-[#636A66] w-full text-left">
            <span className="font-bold">EcoTrail</span> is more than just a
            travel agency—we are a movement dedicated to sustainable tourism. We
            believe that exploring the world should go hand in hand with
            protecting it. Our eco-friendly tours take you to breathtaking
            destinations while ensuring that nature, wildlife, and local
            cultures thrive for generations to come.
          </div>
          <div className="mt-4">
            <button className="bg-[#003233] text-white font-semibold py-3 px-8 md:py-4 md:px-12 rounded-4xl cursor-pointer hover:bg-[#005f4f] transition-colors duration-300">
              About Us
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <img
            src={islandImage}
            alt="back-view-island-outdoors-tree-standing"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs as React.ComponentType;
