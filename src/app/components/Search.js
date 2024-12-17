'use client'

// search context
import { useContext } from "react";
import { SearchContext } from "../context/searchContext";

// import components

import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";


export default function Search() {
  const {searchActive} = useContext(SearchContext);

  return (
    <div
      className={`${
        searchActive
          ? "bg-white dark:bg-gray-800 rounded-none xl:h-[85px]"
          : "bg-white dark:bg-gray-800 rounded-[20px] py-6 xl:pr-4 xl:h-[95px]"
      } hidden xl:block w-full shadow-lg relative`}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection />

        {/* ======= btn ======= */}
        <div className="xl:h-full flex items-center px-6 xl:px-2">
          <button
            className={`${
              searchActive
                ? "btn btn-sm btn-accent xl:w-[164px]"
                : "btn btn-sm btn-accent xl:w-[184px]"
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
