import React from "react";
import Ecology from "../assets/images/Ecology.png";
import Icon from "../assets/images/icon.png";
import Forest from "../assets/images/Forest.png";

const WhyChoose = () => {
  const features = [
    {
      img: Ecology,
      title: "Sustainable Travel Experiences",
      description:
        "We design eco-friendly tours that minimize environmental impact while maximizing adventure and discovery.",
    },
    {
      img: Icon,
      title: "Wildlife & Nature Conservation",
      description:
        "Every trip supports conservation efforts, from protecting endangered species to restoring natural habitats.",
    },
    {
      img: Forest,
      title: "Community Engagement & Eco-Education",
      description:
        "We partner with local communities to promote responsible tourism and educate travelers on preserving the planet.",
    },
  ];

  return (
    <div
      id="why-choose"
      className="w-full min-h-screen flex items-center justify-center font-[Inter] px-4 mb-4"
    >
      <div className="w-full max-w-[1200px] flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-[#003233] text-3xl md:text-4xl font-bold">
            Why Choose Eco Trail?
          </div>
          <div className="text-[#636A66] text-base md:text-lg">
            At <span className="font-bold">EcoTrail,</span> we create
            unforgettable travel experiences that protect and preserve nature.
            Our eco-friendly tours take you deep into breathtaking landscapes
            while ensuring sustainable practices that leave no trace. From
            guided nature hikes to wildlife conservation trips, we connect
            adventurers with the beauty of the Earth—{" "}
            <span className="font-bold">responsibly</span> and{" "}
            <span className="font-bold">ethically</span>.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-4 items-start bg-white shadow-md rounded-lg"
            >
              <img
                src={feature.img}
                alt=""
                className="h-16 md:h-20 object-scale-down"
              />
              <span className="text-[#003233] text-xl md:text-2xl font-bold">
                {feature.title}
              </span>
              <span className="text-[#636A66] text-sm md:text-base">
                {feature.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose as React.ComponentType;
