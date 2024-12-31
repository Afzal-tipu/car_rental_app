'use client'

//import next image
import Image from "next/image";

// import icons
import {
  MdOutlineMapsHomeWork,
  MdBuildCircle,
  MdDirectionsCar,
} from "react-icons/md";

// import count up
import CountUp  from "react-countup";

// import intersection observer
import { useInView } from "react-intersection-observer";

//import motion 
import { motion } from "framer-motion";

// import variants
import { fadeIn } from "../../../variants";


const About = () => {
const [ref, inView] = useInView({
  threshold: 0.5,
});

    return (
      <section className="section flex items-center" id="about" ref={ref}>
        <div className="container mx-auto mt-7">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-x-8">
            {/*  ========== image ======== */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="flex-1 mb-8 xl:mb-0 "
            >
              <Image
                className="rounded-[20px]"
                src={"/images/about/car01.png"}
                width={600}
                height={448}
                alt="about image"
              />
            </motion.div>

            {/* ========= text & stats==== */}
            <div className=" flex-1 flex items-center lg:justify-center">
              <div className="lg:max-w-[517px]">
                <motion.h2
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="h2 py-4"
                >
                  Car Services Simplified
                </motion.h2>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="description mb-[42px] max-w-md"
                >
                  Rent, choose and repair with ease. Our convenient locations,
                  diverse car types and reliable repair points ensure a seamless
                  car experience.
                </motion.p>

                {/* ====== stats ==============*/}
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="flex items-center gap-x-8 mb-12 "
                >
                  {/* ========car types ======== */}
                  <div className="flex flex-col w-[100px]">
                    <MdDirectionsCar className="text-5xl text-accent" />
                    <div className="text-3xl font-black mb-2">
                      {inView ? (
                        <CountUp start={0} end={50} duration={3} delay={0.5} />
                      ) : null}
                      +
                    </div>
                    <div className="text-[14px] uppercase font-semibold text-secondary">
                      car <br />
                      types
                    </div>
                  </div>

                  {/* ========car types ======== */}
                  <div className="flex flex-col w-[100px]">
                    <MdOutlineMapsHomeWork className="text-5xl text-accent" />
                    <div className="text-3xl font-black mb-2">
                      {inView ? (
                        <CountUp start={0} end={135} duration={3} delay={0.5} />
                      ) : null}
                      +
                    </div>
                    <div className="text-[14px] uppercase font-semibold text-secondary">
                      rental <br />
                      outlets
                    </div>
                  </div>

                  {/* ========car types ======== */}
                  <div className="flex flex-col w-[100px]">
                    <MdBuildCircle className="text-5xl text-accent" />
                    <div className="text-3xl font-black mb-2">
                      {inView ? (
                        <CountUp start={0} end={35} duration={3} delay={0.5} />
                      ) : null}
                      +
                    </div>
                    <div className="text-[14px] uppercase font-semibold text-secondary">
                      repair <br />
                      points
                    </div>
                  </div>
                </motion.div>
                <motion.button
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="bg-accent text-white rounded-[10px] uppercase font-semibold w-full max-w-[164px] h-14 tracking-[2px] text-[15px] hover:bg-accent-hover hidden lg:block"
                >
                  See all cars
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default About;