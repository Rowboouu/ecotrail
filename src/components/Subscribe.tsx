import React from "react";
import Mountain from "../assets/images/girl-mountain.png";
import { Mail } from "lucide-react";

const Subscribe = () => {
  return (
    <div
      id="subscribe"
      className="w-screen h-[810px] bg-cover bg-center text-white font-[Inter] flex items-center justify-center"
      style={{ backgroundImage: `url(${Mountain})` }}
    >
      <div className="h-full flex flex-col justify-center items-center gap-16">
        <div className="text-[#003233] text-4xl font-bold text-center">
          Get updated to our latest offers
          <br />
          Subscribe to EcoTrail!
        </div>
        <div className="flex flex-col gap-3 w-full items-center justify-center">
          <div className="relative w-full">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#636A66]" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full h-[50px] rounded-4xl pl-12 pr-4 text-[#003233] bg-white"
            />
          </div>
          <button className="w-full bg-[#003233] text-white font-semibold py-3 px-6 rounded-4xl cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe as React.ComponentType;
