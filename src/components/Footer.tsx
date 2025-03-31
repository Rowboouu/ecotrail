import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-[300px] bg-[#003233] py-8 flex items-center justify-center">
      <div className="w-[75%] h-[50%] bg-[#003233] text-white font-[Inter] flex items-center justify-center rounded-3xl">
        <div className="w-[60%] flex text-center text-xl font-light">
          At EcoTrail, we take you on breathtaking adventures while actively
          preserving nature, ensuring that every journey leaves a positive
          impact on the planet.
        </div>
      </div>
    </div>
  );
};

export default Footer as React.ComponentType;
