import React from "react";
import Island from "../assets/images/island-top-view.jpg";
import Earth from "../assets/images/earth.png";
import Partner from "../assets/images/partner.png";
import Luggage from "../assets/images/luggage.png";
import Plant from "../assets/images/plant.png";

const Banner = () => {
  return (
    <div className="w-full h-auto py-8 flex items-center justify-center">
      <div
        className="w-full h-[80%] py-8 px-8 bg-cover bg-center text-white font-[Inter] flex items-center justify-center"
        style={{ backgroundImage: `url(${Island})` }}
      >
        <div className="w-full md:w-[75%] h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={Earth} className="h-16 w-16 sm:h-20 sm:w-20 mb-3" />
            <span className="text-2xl sm:text-4xl font-bold">100+</span>
            <span className="text-sm sm:text-base font-light">
              Eco-Friendly Tours
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={Partner} className="h-16 w-16 sm:h-20 sm:w-20 mb-3" />
            <span className="text-2xl sm:text-4xl font-bold">30+</span>
            <span className="text-sm sm:text-base font-light">
              Worldwide Partners
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={Luggage} className="h-16 w-16 sm:h-20 sm:w-20 mb-3" />
            <span className="text-2xl sm:text-4xl font-bold">1000+</span>
            <span className="text-sm sm:text-base font-light">
              Happy Travelers
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={Plant} className="h-16 w-16 sm:h-20 sm:w-20 mb-3" />
            <span className="text-2xl sm:text-4xl font-bold">10000+</span>
            <span className="text-sm sm:text-base font-light">
              Trees Planted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner as React.ComponentType;
