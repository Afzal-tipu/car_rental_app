'use client'

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react"

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

// import icons
import { FaQuoteLeft } from "react-icons/fa";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn } from "../../../variants";

// import next image
import Image from "next/image";

// import data
import { testimonailData } from "../../../data";



export default function TestimonialSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className=" h-[450px] lg:h-[400px]"
      >
        {testimonailData.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center justify-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl font-medium max-w-[870px] mb-12 lg:text-4xl">
                  {person.message}
                </div>
                <Image
                  src={person.avatar}
                  width={64}
                  height={64}
                  alt="PersonAvatar"
                  className="mb-4"
                />
                <div className="text-lg font-medium">{person.name}</div>
                <div className="text-secondary">{person.job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
