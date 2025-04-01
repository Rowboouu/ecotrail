import React from "react";
import Logo from "../assets/images/ecotrail_logo.png";
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Whatsapp from "../assets/images/whatsapp.png";

const Footer = () => {
  const links = [
    [
      "About Us",
      "How it works",
      "Meet the team",
      "Partnerships",
      "Blog & News",
    ],
    [
      "Explore",
      "Eco-Friendly Tours",
      "Destinations",
      "Projects",
      "Travel Tips",
    ],
    [
      "Get Involved",
      "Volunteer Opportunities",
      "Partner with Us",
      "Donate",
      "Community",
    ],
  ];

  return (
    <div className="w-screen h-[412px] bg-[#003233] text-white font-[Inter] flex items-center justify-center">
      <div className="w-[75%] h-[50%] grid grid-cols-6 items-center justify-center">
        <div className="h-full col-span-2 flex flex-col justify-between items-center">
          <div className="w-full flex items-center gap-4">
            <img src={Logo} alt="" className="h-10" />
            <div className="text-white text-lg font-semibold font-[Inter] cursor-pointer">
              EcoTrail
            </div>
          </div>
          <div className="w-full flex flex-col text-white/50 text-xs">
            <span>@2025 EcoTrail. All rights reserved</span>
            <span>
              <a href="" className="underline underline-offset-3">
                Terms of Service
              </a>{" "}
              ||{" "}
              <a href="" className="underline underline-offset-3">
                Privacy Policy
              </a>
            </span>
          </div>
        </div>
        {links.map((column, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 h-full justify-between col-span-1"
          >
            {column.map((link, linkIndex) => {
              {
                /*const href = `/${link.toLowerCase().replace(/\s+/g, "-")}`;*/
              }
              const href = "";
              return (
                <a
                  key={linkIndex}
                  href={href}
                  className={`text-white/80 hover:text-white ${
                    linkIndex === 0 ? "font-bold" : ""
                  }`}
                >
                  {link}
                </a>
              );
            })}
          </div>
        ))}
        <div className="grid grid-rows-5 h-full">
          <div className="font-bold">Connect With Us</div>
          <div className="flex flex-row w-full gap-4">
            <img src={Facebook} alt="" className="h-6" />
            <img src={Instagram} alt="" className="h-6" />
            <img src={Whatsapp} alt="" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer as React.ComponentType;
