import React from "react";
import Volcano from "../assets/images/volcano.png";
import BikingGrass from "../assets/images/biking-grass.png";
import Boat from "../assets/images/boat.png";
import { Clock8 } from "lucide-react";
import { MapPinned } from "lucide-react";

const Destinations = () => {
  const packages = [
    {
      id: 1,
      image: Volcano,
      name: "Volcano Escapade",
      rating: 4.5,
      reviews: 25,
      price: 100,
      daysPosted: "2 days",
      location: "Albay, Bicol",
      description:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor siasd dasdt amet, Lorem ipsum dolor sit amet, Lorem ipdddd dddasdvv sffdfsum dolor sit amet,",
    },
    {
      id: 2,
      image: BikingGrass,
      name: "Nature Seeing",
      rating: 5.0,
      reviews: 19,
      price: 150,
      daysPosted: "5 days",
      location: "Bukidnon, Philippines",
      description:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor siasd dasdt amet, Lorem ipsum dolor sit amet, Lorem ipdddd dddasdvv sffdfsum dolor sit amet,",
    },
    {
      id: 3,
      image: Boat,
      name: "Island Hopping",
      rating: 4.7,
      reviews: 23,
      price: 120,
      daysPosted: "1 week",
      location: "Siargao Islands",
      description:
        "Lorem ipsum dolor sit amet, Lorem ipsum dolor siasd dasdt amet, Lorem ipsum dolor sit amet, Lorem ipdddd dddasdvv sffdfsum dolor sit amet,",
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <span key={`full-${index}`} className="text-[#F59E0B]">
              ★
            </span>
          ))}
        {halfStar && <span className="text-[#F59E0B]">☆</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <span key={`empty-${index}`} className="text-gray-300">
              ★
            </span>
          ))}
      </div>
    );
  };

  return (
    <div
      id="destinations"
      className="w-full min-h-screen flex flex-col items-center justify-center font-[Inter] gap-4 px-4"
    >
      <div className="w-full max-w-6xl font-bold text-4xl text-[#003233] items-start text-center md:text-left">
        <span className="text-base font-normal md:tracking-[10px] tracking-[8px]">
          CHOOSE YOUR DESTINATION
        </span>
        <br />
        TOP ECO-MAZING <span className="text-[#52996A]">DESTINATIONS</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl items-center justify-center">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="border border-gray-300 rounded-lg shadow-md"
          >
            <div className="overflow-hidden rounded-t-lg w-full h-56">
              <img
                src={pkg.image}
                alt="Package"
                className="w-full h-full rounded-t-md object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="p-6 gap-2 flex flex-col items-start justify-center">
              <div className="flex items-center gap-2">
                {renderStars(pkg.rating)}{" "}
                <span className="text-gray-600 text-xs">
                  {pkg.reviews} reviews
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#003233]">{pkg.name}</h2>
              <div className="text-lg font-semibold flex gap-2 items-center">
                <span className="text-[#52996A]">PHP {pkg.price}</span>
                <span className="text-gray-500 text-sm">/ Per person</span>
              </div>
              <div className="bg-gray-100 p-2 my-2 rounded-md text-sm text-gray-500 flex flex-wrap items-center gap-2 font-semibold">
                <span className="flex items-center gap-1">
                  <Clock8 className="w-4 h-auto" />
                  {pkg.daysPosted}
                </span>
                <span className="flex items-center gap-1">
                  <MapPinned className="w-4 h-auto" />
                  {pkg.location}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{pkg.description}</p>
              <button className="mt-4 px-4 py-2 w-full bg-[#A4CAB1] text-white rounded-lg hover:bg-[#52996A] cursor-pointer transition-colors duration-300">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations as React.ComponentType;
