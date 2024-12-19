'use client'

//import react hook
import react, { useState, useEffect } from "react";

// import icons
import { FaChevronUp } from "react-icons/fa";

//import link scroll
import { Link } from "react-scroll";


const BackToTopBtn = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 400){
                setIsActive(true);
            }
            else {
                setIsActive(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // clean up the event listeners
        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        } 
    });

    return (
      <Link 
       to="home"
       smooth={true}
       className={` ${
        !isActive && 'hidden'
       } fixed bg-accent w-12 h-12 right-12 bottom-11 z-10 cursor-pointer  border-2 border-white rounded-md flex items-center text-white justify-center hover:bg-accent-hover`}>
        <FaChevronUp className="text-2xl" />
      </Link>
    );
}
 
export default BackToTopBtn;