'use client'

// search context
import { useContext } from "react";
import { SearchContext } from "../context/searchContext";

// import components

import LocationSelection from "./LocationSelection";


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
      <div className="xl:h-full flex items-center px-6 xl:px-0">
        <LocationSelection />
      </div>
    </div>
  );
}
