'use client'
// import next image 
import Image from "next/image"

// import motion 
import { motion } from "framer-motion";

// import variants
import { fadeIn } from "../../../variants";

// import icons
import { FaRegHandshake } from "react-icons/fa6";
import { MdKey, MdOutlineKey } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";



export default function Why() {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[700px] mx-auto mb-2"
        >
          Our dedication to providing exceptional services set us apart from the
          competition. From the moment you engage with us, we strive to exceed
          your expectations in every interaction.
        </motion.p>

        {/*  ====== car image ====== */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 lg:mb-2"
        >
          <Image
            src={"/images/why/car.svg"}
            width={1060}
            height={420}
            alt="why image"
          />
        </motion.div>

        {/* ====== grid items ======= */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-4 lg:gap-y-0 lg:gap-x-[30px]"
        >
          {/* ======== item 1 ====== */}
          <div className="flex flex-col items-center text-center max-w-[160px] lg:max-w-none p-2 lg:p-0">
            <div>
              <MdKey className="text-[38px] text-accent mb-4" />
            </div>
            <h3 className="h3">Rent simply and quickly</h3>
            <p className="hidden lg:flex">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>

          {/* ======== item 2 ====== */}
          <div className="flex flex-col items-center text-center max-w-[160px] lg:max-w-none p-2 lg:p-0">
            <div>
              <IoMdTrendingUp className="text-[38px] text-accent mb-4" />
            </div>

            <h3 className="h3">Modern & well maintained vehicles</h3>
            <p className="hidden lg:flex">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>

          {/* ======== item 3 ====== */}
          <div className="flex flex-col items-center text-center max-w-[160px] lg:max-w-none p-2 lg:p-0">
            <div>
              <FaRegHandshake className="text-[38px] text-accent mb-4" />
            </div>
            <h3 className="h3">Prompt and flexible services</h3>
            <p className="hidden lg:flex">
              We prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
