import React from "react";
import Island from "../assets/images/island-top-view.jpg";
import Earth from "../assets/images/earth.png";
import Partner from "../assets/images/partner.png";
import Luggage from "../assets/images/luggage.png";
import Plant from "../assets/images/plant.png";

const Banner = () => {
  return (
    <div className="w-screen h-[455px] py-8 flex items-center justify-center">
      <div
        className="w-screen h-[80%] bg-cover bg-center text-white font-[Inter] flex items-center justify-center"
        style={{ backgroundImage: `url(${Island})` }}
      >
        <div className="w-[70%] h-full grid grid-cols-4 justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={Earth} className="h-20 w-20 mb-3" />
            <span className="text-4xl font-bold">100+</span>
            <span className="font-light">Eco-Friendly Tours</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={Partner} className="h-20 w-20 mb-3" />
            <span className="text-4xl font-bold">30+</span>
            <span className="font-light">Worldwide Partners</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={Luggage} className="h-20 w-20 mb-3" />
            <span className="text-4xl font-bold">1000+</span>
            <span className="font-light">Happy Travelers</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src={Plant} className="h-20 w-20 mb-3" />
            <span className="text-4xl font-bold">10000+</span>
            <span className="font-light">Trees Planted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner as React.ComponentType;
