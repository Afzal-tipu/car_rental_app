"use client";

import { useState } from "react";

// import headlessui
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

// import icons
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

//import react date
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";

// import react date range css
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


export default function DateSelection() {

  const [date, setDate] = useState ([
    {
      startDate: new Date(),
      endDate: null,
      key:'selection',
    },
  ]);

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* ======= Btn ======== */}
        <MenuButton className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8 ">
          <div>
            <div className=" flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2  xl:gap-y-0">
              <FaCalendarAlt className="text-accent text-xl" />
              <div className="uppercase font-bold text-[15px]">Select Date</div>
            </div>
            <div className="flex gap-x-3 items-center xl:ml-6 ">
              <div className="text-[13px] text-secondary">{format(date[0].startDate, "dd/MM/yyyy")}</div>

              <div className="text-accent text-[12px]">
                <FaArrowRightLong />
              </div>

              <div className="text-[13px] text-secondary">
                {date[0].endDate ? (
                  <div>{format(date[0].endDate, "dd/MM/yyyy")}</div>
                ) : (
                  <div>{format(date[0].startDate, "dd/MM/yyyy")}</div>
                )}
              </div>
            </div>
          </div>
        </MenuButton>

        {/* ======= items ======= */}
        
        <MenuItems className="dropdown-menu shadow-lg absolute -top-96 xl:top-[90px] left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 border-r rounded-[10px] overflow-hidden">
          <DateRange
            onChange={(item) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#f33e5b"]}
            minDate={addDays(new Date(), 0)}
          />
        </MenuItems>
      </div>
    </Menu>
  );

}
