'use client'

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "../context/searchContext";

//next image
import Image from "next/image";

// import motion
import {motion, easeInOut} from 'framer-motion';

// import variants
import { fadeIn } from "/variants";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* ======== text and image wrapper ====== */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* ======= text ======= */}

          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore the Finest <span className="text-accent">Golbal</span>{" "}
              Offers
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10 "
            >
              Find your ideal ride for any advanture with our diverse range of
              affordable and depandable car rentals.
            </motion.p>
            {/* ========= btn ======== */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className=" flex items-center justify-center gap-x-4 xl:justify-start"
            >
              <button className="btn-cta">
                <img
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt="btn"
                />
              </button>

              <button className="btn-cta">
                <img
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt="btn"
                />
              </button>
            </motion.div>
          </div>

          {/* ======== image car ======= */}

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48 "
          >
            <Image
              src={"/images/hero/car.svg"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}

          className="fixed top-[80px] w-full max-w-[1920px] mx-auto z-10 transition-all duration-150"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12  max-w-[1300px] w-full mx-auto">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
}
