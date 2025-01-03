'use client'
// import next image
import Image from "next/image";

// import motion 
import { motion } from "framer-motion";

//import variants
import { fadeIn } from "../../../variants";

export default function Cta() {
  return (
    <section className="section flex items-center bg-[#ffffff] dark:bg-gray-900 overflow-hidden" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row lg:items-center">
          {/* ===== text ======= */}
          <div className="flex-1 lg:ml-24 text-center md:text-left mb-12 md:mb-0 ">
            <div className="max-w-[520px] mx-auto order-2 lg:order-none">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Download our App now and hit the road with ease
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </motion.p>
              {/*  ====== btn ====== */}
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
                className="flex gap-x-4 items-center justify-center md:justify-start"
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
          </div>
          {/* ===== image ====== */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <Image
              src={"/images/cta/phone.svg"}
              width={320}
              height={640}
              alt="Phone"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
