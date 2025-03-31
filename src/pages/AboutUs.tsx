import React from "react";
import islandImage from "../assets/images/back-view-island-outdoors-tree-standing.png";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="w-screen h-screen flex items-center justify-center font-[Inter]"
    >
      <div className="grid grid-cols-2 w-[75%] items-center justify-center">
        <div className="flex flex-col gap-6 h-full items-start justify-center">
          <div className="font-bold text-4xl text-[#003233]">
            <span className="text-base font-normal tracking-[10px]">
              WITH ECOTRAIL,
            </span>
            <br />
            DISCOVER THE WORLD,
            <br /> <span className="text-[#52996A]">SUSTAINABLY</span>
          </div>
          <div className="font-normal text-lg text-[#636A66] w-[95%] text-left">
            <span className="font-bold">EcoTrail</span> is more than just a
            travel agency—we are a movement dedicated to sustainable tourism. We
            believe that exploring the world should go hand in hand with
            protecting it. Our eco-friendly tours take you to breathtaking
            destinations while ensuring that nature, wildlife, and local
            cultures thrive for generations to come.
          </div>
          <div className="mt-4">
            <button className="bg-[#003233] text-white font-semibold py-4 px-12 rounded-4xl cursor-pointer">
              About Us
            </button>
          </div>
        </div>
        <img src={islandImage} alt="back-view-island-outdoors-tree-standing" />
      </div>
    </div>
  );
};

export default AboutUs as React.ComponentType;
