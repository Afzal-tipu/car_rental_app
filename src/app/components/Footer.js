'use client'
// react hook
import { useContext } from "react";

// import next image
import Image from "next/image";

// import icons
import { FaPhone, FaEnvelope } from "react-icons/fa6";

//import motion 
import { motion } from "framer-motion";

//import variants
import { fadeIn } from "../../../variants";

// import link /react scroll
import { Link } from "react-scroll";

// import context
import { SearchContext } from "../context/searchContext";
import Copyright from "./Copyright";


export default function Footer() {
  const {theme} = useContext(SearchContext);
  return (
    <footer className="pt-20 z-20 bg-white dark:bg-transparent" id="contact">
      <div className="container mx-auto mb-24">
        {/*  ====== grid ======= */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* ===== logo ====== */}
            <Link to="home" smooth={true} spy={true} className="cursor-pointer">
              {theme === "light" ? (
                <Image
                  src={"/icons/logoWhite.svg"}
                  width={200}
                  height={200}
                  alt="Logo Light"
                />
              ) : (
                <Image
                  src={"/icons/logoDark.svg"}
                  width={200}
                  height={200}
                  alt="Logo Dark"
                />
              )}
            </Link>
            {/*  ===== text ======= */}
            <div className="text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            {/*  ===== phone & email ======= */}
            <div className="flex flex-col gap-y-4 font-semibold">
              {/*  ===== phone ======= */}
              <div className="flex items-center gap-x-[15px]">
                <FaPhone />
                <div className="font-medium">(123)456-7890</div>
              </div>
              {/*  ===== email ======= */}
              <div className="flex items-center gap-x-[15px]">
                <FaEnvelope />
                <div className="font-medium">office@carland.com</div>
              </div>
            </div>

            {/*  ===== email ======= */}
          </div>
          {/*  ====== links ====== */}
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          {/*  ======= program ====== */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex gap-x-3">
              <div className="text-secondary">Mon - Fri:</div>
              <div className="font-semibold">09:00 AM - 09:00 PM</div>
            </div>
            <div className="flex gap-x-3">
              <div className="text-secondary">Sat:</div>
              <div className="font-semibold">09:00 AM - 06:00 PM</div>
            </div>
            <div className="flex gap-x-3">
              <div className="text-secondary">Sun:</div>
              <div className="font-semibold">Closed</div>
            </div>
          </div>
          {/*  ======= news letter ====== */}
          <div className="flex-1 ">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className="mb-2"> Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            {/* ===== form ===== */}
            <form className="flex gap-x-3 h-12">
              <input type="text" placeholder="Your email" className="outline-none bg-gray-100 dark:bg-gray-950 h-full border rounded-lg pl-4 focus:border-accent  "/>
              <button type="submit" className="btn btn-sm bg-accent h-12 w-24">Submit</button>
            </form>
          </div>
      
        </motion.div>
        <Copyright/>
      </div>
    </footer>
  );
}
