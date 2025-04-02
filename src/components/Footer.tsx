import React from "react";
import Logo from "../assets/images/ecotrail_logo.png";
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Whatsapp from "../assets/images/whatsapp.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
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
    <div className="w-full bg-[#003233] text-white font-[Inter] flex items-center justify-center py-8">
      <div className="w-[90%] lg:w-[75%] grid grid-cols-2 2xl:grid-cols-6 gap-8 items-center">
        <div className="col-span-2 flex flex-col justify-between items-center text-center lg:text-left">
          <div
            className="w-full flex items-center gap-4 cursor-pointer justify-center lg:justify-start"
            onClick={() => scrollToSection("landing-page")}
          >
            <img src={Logo} alt="" className="h-10" />
            <div className="text-white text-lg font-semibold font-[Inter]">
              EcoTrail
            </div>
          </div>
          <div className="w-full flex flex-col text-white/50 text-xs mt-4 lg:mt-0">
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
            className="flex flex-col gap-2 justify-between text-center lg:text-left"
          >
            {column.map((link, linkIndex) => {
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
        <div className="flex flex-col items-center lg:items-start">
          <div className="font-bold mb-2">Connect With Us</div>
          <div className="flex flex-row w-full gap-4 justify-center lg:justify-start">
            <img src={Facebook} alt="" className="h-6 cursor-pointer" />
            <img src={Instagram} alt="" className="h-6 cursor-pointer" />
            <img src={Whatsapp} alt="" className="h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer as React.ComponentType;
