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
      className="w-screen h-screen flex items-center justify-center font-[Inter]"
    >
      <div className="w-[75%] flex flex-col gap-10">
        <div className="grid grid-cols-2">
          <div className="text-[#003233] text-4xl font-bold">
            Why Choose Eco Trail?
          </div>
          <div className="text-[#636A66] text-lg">
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
        <div className="grid grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-2 p-4 items-start">
              <img
                src={feature.img}
                alt=""
                className="h-20 object-scale-down"
              />
              <span className="text-[#003233] text-2xl font-bold">
                {feature.title}
              </span>
              <span className="text-[#636A66]">{feature.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose as React.ComponentType;
