"use client";

import { useState } from "react";

// import headlessui
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

// import icons
import { FaRegClock } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

// hours data
const hours = [
  "10:00 AM",
  "12:00 AM",
  "14:00 PM",
  "13:00 PM",
  "14:00 PM",
  "15:00 PM",
  "16:00 PM",
  "17:00 PM",
];

export default function HoursSelection() {
  const [hour, setHour] = useState('10:00 AM')

    return (
      <Menu as="div" className="w-full h-full flex xl:flex-row">
        <div className="relative flex-1">
          {/* ======= Btn ======== */}
          <MenuButton className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8 ">
            <div className="uppercase font-medium text-center xl:ml-6 xl:text-left ">
              <div className=" flex flex-col xl:flex-row xl:gap-x-2 gap-y-2  xl:gap-y-0  xl:justify-start items-center">
                <FaRegClock className="text-accent text-xl" />
                <div className="uppercase font-bold text-[15px]">
                  Select Hours
                </div>
              </div>
              <div className="flex gap-x-3 items-center xl:ml-6 ">
                <div className="text-[13px] text-secondary">{hour}</div>

                <div className="text-accent text-[12px]">
                  <FaArrowRightLong />
                </div>

                <div className="text-[13px] text-secondary">{hour}</div>
              </div>
            </div>           
          </MenuButton>

          {/* ======= items ======= */}

          <MenuItems className="dropdown-menu shadow-lg absolute -top-[400px] xl:top-[90px] left-1/2 xl:left-12 z-30 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white menuItemDark max-w-[332px] py-6 rounded-[10px] border-r overflow-hidden ">
            {
              hours.map((hour,index) => {
                return(
                    <div
                    onClick={() => setHour(hour)} 
                    key={index}
                    className="cursor-pointer py-3 text-center hover:bg-gray-100 menuHoverDark "
                    >{hour}</div>
                )
              })
            }
          </MenuItems>
        </div>
      </Menu>
    );
}
