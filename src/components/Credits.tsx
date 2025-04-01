import React from "react";
import Logo from "../assets/images/ecotrail_logo.png";

const Credits = () => {
  return (
    <div className="w-screen bg-black flex flex-row text-white/50 text-xs font-[Inter] px-8 py-1 items-center justify-between">
      <div className="flex flex-row gap-2 items-center">
        <img src={Logo} alt="" className="h-5" />
        <span className="text-white">Ecotrail</span>
      </div>
      <div className="flex flex-row gap-8">
        <span>Developer: Brian James Concillo</span>
        <span>UI/UX Designer: Irish Paring</span>
      </div>
    </div>
  );
};

export default Credits as React.ComponentType;
