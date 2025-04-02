import React from "react";
import Logo from "../assets/images/ecotrail_logo.png";

const Credits = () => {
  return (
    <div className="w-full bg-black flex flex-col md:flex-row text-white/50 text-xs font-[Inter] px-4 md:px-8 py-2 items-center justify-between">
      <div className="flex flex-row gap-2 items-center mb-2 md:mb-0">
        <img src={Logo} alt="" className="h-5" />
        <span className="text-white">Ecotrail</span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-center md:text-left">
        <span>Developer: Brian James Concillo</span>
        <span>UI/UX Designer: Irish Paring</span>
      </div>
    </div>
  );
};

export default Credits as React.ComponentType;
