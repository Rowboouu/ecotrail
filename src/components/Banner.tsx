import React from "react";
import Island from "../assets/images/island-top-view.jpg";
import { Earth } from "lucide-react";
import { Handshake } from "lucide-react";
import { Luggage } from "lucide-react";
import { Sprout } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-screen h-[455px] py-8 flex items-center justify-center">
      <div
        className="w-screen h-[80%] bg-cover bg-center text-white font-[Inter] flex items-center justify-center"
        style={{ backgroundImage: `url(${Island})` }}
      >
        <div className="w-[70%] h-full grid grid-cols-4 justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <Earth className="h-32 w-32 mb-3" />
            <span className="text-4xl font-bold">100+</span>
            <span className="font-light">Eco-Friendly Tours</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Handshake className="h-32 w-32 mb-3" />
            <span className="text-4xl font-bold">30+</span>
            <span className="font-light">Worldwide Partners</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Luggage className="h-32 w-32 mb-3" />
            <span className="text-4xl font-bold">1000+</span>
            <span className="font-light">Happy Travelers</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Sprout className="h-32 w-32 mb-3" />
            <span className="text-4xl font-bold">10000+</span>
            <span className="font-light">Trees Planted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner as React.ComponentType;
