import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";

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
  const [selectedTourType, setSelectedTourType] = React.useState<string | null>(
    null
  );
  const [selectedDestination, setSelectedDestination] = React.useState<
    string | null
  >(null);

  return (
    <div className="h-[25%] w-full flex items-center justify-center font-[Inter]">
      <div className="bg-white/40 p-4 w-[70%]">
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
                  {selectedTourType || "Tour Type"}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2">
                <ul className="list-none m-0 p-0 font-[Inter]">
                  {["Adventure", "Relaxation", "Cultural", "Nature"].map(
                    (type) => (
                      <li
                        key={type}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                        onClick={() => setSelectedTourType(type)}
                      >
                        {type}
                      </li>
                    )
                  )}
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
                  {selectedDestination || "Destination"}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2">
                <ul className="list-none m-0 p-0 font-[Inter]">
                  {["Familia", "USTP", "Princetech", "SM Uptown"].map(
                    (destination) => (
                      <li
                        key={destination}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                        onClick={() => setSelectedDestination(destination)}
                      >
                        {destination}
                      </li>
                    )
                  )}
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
