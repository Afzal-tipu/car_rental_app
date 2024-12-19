'use client'

// import next Image
import Image from "next/image";

// import motion
import { motion } from "framer-motion";

//import variant
import { fadeIn } from "../../../variants";

export default function Brands() {
  return (
    <section
      className="flex flex-col items-center justify-center pt-8 lg:pt-16 lg:h-[200px] bg-white dark:bg-transparent"
    >
      <motion.div 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}    
            className="container mx-auto">
        {/* ======= brand wrapper ========  */}
        <div className="grid grid-cols-3 gap-6 place-items-center justify-center lg:flex lg:flex-wrap lg: gap-x-6 lg:justify-between">
          <div>
            <Image
              src={"/icons/brands/audi.svg"}
              width={60}
              height={60}
              alt="Audi"
            />
          </div>
          <div className="">
            <Image
              src={"/icons/brands/bmw.svg"}
              width={60}
              height={60}
              alt="BMW"
            />
          </div>
          <div>
            <Image
              src={"/icons/brands/ford.svg"}
              width={60}
              height={60}
              alt="FORD"
            />
          </div>
          <div>
            <Image
              src={"/icons/brands/mercedes.svg"}
              width={60}
              height={60}
              alt="MERCEDES"
            />
          </div>
          <div>
            <Image
              src={"/icons/brands/mazda.svg"}
              width={60}
              height={60}
              alt="MAZDA"
            />
          </div>
          <div>
            <Image
              src={"/icons/brands/skoda.svg"}
              width={60}
              height={60}
              alt="SKODA"
            />
          </div>
          <div>
            <Image src={"/icons/brands/vw.svg"} width={60} height={60} alt="VW" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
