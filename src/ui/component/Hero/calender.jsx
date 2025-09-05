import React, { useState, useRef } from "react";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // Default styles
import "react-date-range/dist/theme/default.css"; // Default theme
import { useClickAway } from "react-use"; // To close popover on outside click
import "../../../calender.css"; // Custom styles
import { CalendarDateRangeIcon} from '@heroicons/react/20/solid'

export default function PopoverDateRangePicker() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
  };

  useClickAway(popoverRef, () => setIsPopoverOpen(false)); // Close on outside click

  return (
    <div className="relative flex items-center w-full col-span-4 bg-white mx-auto">
      <label className="font-pop text-[16px] md:text-[18px]  lg:text-[20px] m-1">
        calender
      <CalendarDateRangeIcon className="size-4 ml-1 float-start mr-2 mt-[5px] lg:mt-[6px]  "/>
      
      <input
        type="text"
        placeholder="Date"
        value=
          {range[0].startDate
            ? `${format(range[0].startDate, "dd-MM-yyyy")} to ${
                range[0].endDate
                  ? format(range[0].endDate, "dd-MM-yyyy")
                  : "Select an end date"
              }`
            : "Select a range"} 

            onClick={() => setIsPopoverOpen((prev) => !prev)}

            className="outline-none font-pop m-2 mt-4 block bg-white w-full"     
        >
        </input>
        </label>

      {/* Popover */}
      {isPopoverOpen && (
        <div
          ref={popoverRef}
          className="absolute mt-2 z-50 w-[90vw] max-w-md bg-white shadow-lg rounded-lg p-4 border border-gray-200"
        >
          <DateRangePicker
            ranges={range}
            onChange={handleSelect}
            rangeColors={["#12A277"]}
            className="rounded-lg "
            staticRanges={[]} // Remove static ranges
            inputRanges={[]} // Remove input ranges
          />
        </div>
      )}
      
    </div>
  );
}
