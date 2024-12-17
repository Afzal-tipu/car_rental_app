'use client'

import { useState } from "react";

// import headlessui
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

// import icons
import { FaMapMarkerAlt } from "react-icons/fa";

//location data
const locations = [
  'Main Street 123, United States',
  'Business Avenue 456, Canada',
  'Park Road 789, United Kingdom'
];


export default function LocationSelection() {

  const [location, setLocation] = useState('Select Location')
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* ======= Btn ======== */}
        <MenuButton className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8 ">
          <div className="w-full h-16 flex justify-center xl:justify-start items-center xl:border-r xl:border-black/10 ">
            <div className="flex flex-col">
              <div className=" flex flex-col xl:flex-row xl:gap-x-2 gap-y-2  xl:gap-y-0 justify-center xl:justify-start items-center ">
                <FaMapMarkerAlt className="text-accent text-xl" />
                <div className="uppercase font-bold text-[15px]">
                  Select Location
                </div>
              </div>

              <div className="uppercase font-medium text-secondary text-[13px] text-center xl:ml-6 xl:text-left ">
                {location}
              </div>
            </div>
          </div>
        </MenuButton>

        {/* ======= items ======= */}
        
        <MenuItems className="dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full   bg-white menuItemDark max-w-[332px] py-6 rounded-[10px] border-r ">
          {locations.map((location, index) => {
            return (
              <div
                onClick={() => setLocation(location)}
                key={index}
                className="px-2 py-4 xl:pl-10 cursor-pointer text-[13px] dark:text-white uppercase hover:bg-gray-100 menuHoverDark"
              >
                {location}
              </div>
            );
          })}
        </MenuItems>
      </div>
    </Menu>
  );
}
