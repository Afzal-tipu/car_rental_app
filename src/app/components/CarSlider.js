'use client'

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';


// import next Image
import Image from 'next/image';

// icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

//import motion
import { motion } from 'framer-motion';

// import variants
import { fadeIn } from '/variants';

// import car data
import { carData } from '../../../data';





export default function CarSlider() {


  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1060: { slidesPerView: 3, spaceBetween: 15 },
        }}
      >
        {carData.map((cars, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0 shadow-md px-2 pb-2 rounded-[20px]">
                <Image src={cars.image} width={380} height={284} alt="" />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[14px] uppercase text-secondary">
                      {cars.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{cars.name}</h3>
                    <div className="text-accent font-semibold uppercase mb-10">
                      {cars.price}/day
                    </div>
                  </div>

                  {/* ======= stars ====== */}
                  <div className="text-accent flex gap-2 h-max mt-3">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>

                {/* ====== car info ==== */}
                <div className="flex gap-x-3 lg:gap-x-4 w-max mb-10">
                  {cars.info.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-2">
                          <Image
                            src={item.icons}
                            width={24}
                            height={24}
                            alt="icons"
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See Details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
        
           
         

     
