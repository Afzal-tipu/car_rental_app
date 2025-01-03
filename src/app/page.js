import About from "./components/About";
import BackToTopBtn from "./components/BackToTopBtn";
import Cars from "./components/Cars";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Why from "./components/Why";

export default function Home() {
  return (
    
      <main className="max-w-[1920px] mx-auto relative overflow-hidden bg-white dark:bg-gray-950">
        <Header/>
        <Hero/>
        <Cars/>
        <About/>
        <Why/>
        <Testimonial/>
        <Cta/>
        <Footer/>
        <BackToTopBtn/>
        <div className="h-[1550px]"></div>
      </main>
   
  );
}
