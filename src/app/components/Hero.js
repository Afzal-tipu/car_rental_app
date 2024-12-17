'use client'

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "../context/searchContext";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10"> hero </div>
      {searchActive ? (
        <div className="fixed top-[80px] w-full max-w-[1920px] mx-auto z-10 transition-all duration-150 ">
          <Search />
        </div>
      ) : ( 
        <div className="-mt-12  max-w-[1300px] w-full mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
}
