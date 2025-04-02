import React from "react";

const Banner2 = () => {
  return (
    <div className="w-full h-[458px] py-8 flex items-center justify-center sm:h-auto">
      <div className="w-[90%] sm:w-[80%] lg:w-[75%] py-8 bg-[#003233] text-white font-[Inter] flex items-center justify-center rounded-3xl sm:h-auto">
        <div className="w-[90%] sm:w-[80%] lg:w-[60%] flex text-center text-lg sm:text-base lg:text-xl font-light">
          At EcoTrail, we take you on breathtaking adventures while actively
          preserving nature, ensuring that every journey leaves a positive
          impact on the planet.
        </div>
      </div>
    </div>
  );
};

export default Banner2 as React.ComponentType;
