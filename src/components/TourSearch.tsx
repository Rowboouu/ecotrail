import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { MapPin } from "lucide-react";
import { Sailboat } from "lucide-react";
import { Mountain } from "lucide-react";
import { TentTree } from "lucide-react";
import { TramFront } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const TourSearch = () => {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [selectedTourType, setSelectedTourType] = React.useState<{
    name: string;
    icon: React.ElementType;
  } | null>(null);
  const [selectedDestination, setSelectedDestination] = React.useState<{
    name: string;
    icon: React.ElementType;
  } | null>(null);

  return (
    <div className="h-[25%] w-full flex items-center justify-center font-[Inter] md:px-0 px-8">
      <div className="bg-white/40 p-4 w-full md:w-[75%]">
        <div className="grid grid-cols-2 md:grid-cols-5 bg-white gap-4">
          <div className="flex items-center justify-center">
            <Popover>
              <PopoverTrigger asChild className="w-full h-full">
                <Button
                  variant={"ghost"}
                  className={cn(
                    "justify-between text-left font-normal cursor-pointer",
                    !selectedTourType && "text-muted-foreground"
                  )}
                >
                  {selectedTourType ? (
                    <div className="flex items-center gap-2">
                      <selectedTourType.icon className="h-5 w-5 text-gray-500" />
                      {selectedTourType.name}
                    </div>
                  ) : (
                    "Tour Type"
                  )}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2">
                <ul className="list-none m-0 font-[Inter] divide-y-2">
                  {[
                    {
                      name: "Island Hopping",
                      type: "Nature/Water",
                      icon: Sailboat,
                    },
                    {
                      name: "Hiking / Escapade",
                      type: "Nature",
                      icon: Mountain,
                    },
                    {
                      name: "Camping / SightSeeing",
                      type: "Nature",
                      icon: TentTree,
                    },
                    {
                      name: "SightSeeing",
                      type: "Tourist Attractions",
                      icon: TramFront,
                    },
                  ].map((tour) => (
                    <li
                      key={tour.name}
                      className="cursor-pointer py-2 pl-2 pr-20 hover:bg-gray-100 flex items-center gap-2"
                      onClick={() =>
                        setSelectedTourType({
                          name: tour.name,
                          icon: tour.icon,
                        })
                      }
                    >
                      <tour.icon className="h-5 w-5 text-gray-500" />
                      <div className="flex flex-col">
                        <span className="font-medium">{tour.name}</span>
                        <span className="text-sm text-gray-500">
                          {tour.type}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center justify-center">
            <Popover>
              <PopoverTrigger asChild className="w-full h-full">
                <Button
                  variant={"ghost"}
                  className={cn(
                    "justify-between text-left font-normal cursor-pointer",
                    !selectedDestination && "text-muted-foreground"
                  )}
                >
                  {selectedDestination ? (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      {selectedDestination.name}
                    </div>
                  ) : (
                    "Destination"
                  )}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2">
                <ul className="list-none m-0 font-[Inter] divide-y-2">
                  {[
                    { name: "Davao City", country: "Philippines" },
                    { name: "Cebu City", country: "Philippines" },
                    { name: "Manila", country: "Philippines" },
                    { name: "Baguio City", country: "Philippines" },
                  ].map((destination) => (
                    <li
                      key={destination.name}
                      className="cursor-pointer py-2 pl-2 pr-20 hover:bg-gray-100 flex items-center gap-2"
                      onClick={() =>
                        setSelectedDestination({
                          name: destination.name,
                          icon: MapPin,
                        })
                      }
                    >
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div className="flex flex-col">
                        <span className="font-medium">{destination.name}</span>
                        <span className="text-sm text-gray-500">
                          {destination.country}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center justify-center">
            <Popover>
              <PopoverTrigger asChild className="w-full h-full">
                <Button
                  variant={"ghost"}
                  className={cn(
                    "justify-between text-left font-normal cursor-pointer",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  {startDate ? (
                    format(startDate, "PPP")
                  ) : (
                    <span>Start Date</span>
                  )}
                  <CalendarIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(date) => {
                    setStartDate(date);
                    document.body.click(); // Close the popover
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center justify-center">
            <Popover>
              <PopoverTrigger asChild className="w-full h-full">
                <Button
                  variant={"ghost"}
                  className={cn(
                    "justify-between text-left font-normal cursor-pointer",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  {endDate ? format(endDate, "PPP") : <span>End Date</span>}
                  <CalendarIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={(date) => {
                    setEndDate(date);
                    document.body.click(); // Close the popover
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <button className="bg-[#003233] text-white font-semibold py-4 px-6 cursor-pointer col-span-2 md:col-span-1 hover:bg-[#005f4f] transition-colors duration-300">
            FIND NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourSearch as React.ComponentType;
