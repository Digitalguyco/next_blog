/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client';
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { useRef } from "react";
import Section from "./utils/Section";
import TopArticles from "./components/TopArticle";
import Individuals from "./components/Individuals";
import Innovation from "./components/Innovation";
import Culture from "./components/Culture";
import Explore from "./components/Explore";
import AboutUs from "./components/AboutUs";
import Trending from "./components/Trending";
import People from "./components/Poeple";
import Place from "./components/Place";



export default function Main() {
  const stories = useRef(null);
  const about = useRef(null);
  const spotlight = useRef(null);
  const contact = useRef(null);
  


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };



  return (
    <>
    <Navbar scrollToSection={scrollToSection} />
    <div className="  mt-[80px] w-full flex flex-col items-center justify-center ">
        {/* Large screens */}
        <div className="hidden xl:flex w-[90%] 4xS:w-[75%] h-[551px]  gap-[90px]  justify-between items-center ">
          <div className="flex-col justify-center items-start gap-5 inline-flex">
            <div className="w-[680px]  text-[64px] font-semibold font-montserrat leading-[85px] tracking-wide ">
              <span className="text-sky-950 ">Discover the Extraordinary: </span>
              <span className="text-yellow-400 ">The Best of Us</span>
            </div>
            <div className="w-[606px] text-neutral-500 text-2xl font-normal font-roboto leading-10 tracking-tight">
              Explore inspiring stories of people, businesses, and innovations originating from Africa and the diaspora. Join us on a journey celebrating excellence, diversity, and success.
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-[10px]">
            <div className="flex justify-between items-center gap-[10px]">
              <img src='/image7.png' alt="People" />
              <img src='/image8.png' alt="People" />
            </div>
            <img src='/image2.png' alt="People" />
          </div>
        </div>
        {/* Small screens */}
        <div className=" 3xxS:flex xl:hidden mt-[50px] w-full flex justify-center ">
          <div className="flex-col w-[85%] justify-center items-start gap-5 flex">
            <div className="text-[50px] w-full font-semibold font-montserrat leading-[65px] tracking-wide">
              <span className="text-sky-950 ">Discover the Extraordinary: </span>
              <span className="text-yellow-400 ">The Best of Us</span>
            </div>
            <div className=" text-neutral-500 text-2xl font-normal font-roboto leading-10 tracking-tight">
              Explore inspiring stories of people, businesses, and innovations originating from Africa and the diaspora. Join us on a journey celebrating excellence, diversity, and success.
            </div>
            <div className="flex mt-[40px] w-full flex-col justify-between items-center gap-[10px]">
              <div className="flex justify-between w-full items-center gap-[10px]">
                <img className="w-[50%]" src='/image7.png' alt="People" />
                <img className="w-[50%]" src='/image8.png' alt="People" />
              </div>
              <div className="w-full">
                <img className="w-full" src='/image2.png' alt="People" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Space Nav Page */}
      <div className="w-full    mt-12  flex-col justify-start items-center flex">
      <Section>{[<TopArticles />, <Trending />, <People />, <Place />]}</Section>
      <div className="w-full   flex-col justify-start items-center flex" ref={spotlight}>
          <Individuals />
        </div>
        <div className="w-full   flex-col justify-start items-center flex" ref={stories}>
          <Innovation />
        </div>
        <Culture />
        <Explore />
        <div className="w-full   flex-col justify-start items-center flex" ref={about}>
          <AboutUs />
        </div>
      </div>
      

    <Footer />
    </>

  );
}
