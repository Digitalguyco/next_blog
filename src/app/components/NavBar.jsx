'use client';
import React, {useState} from "react";

import Image from "next/image";
import Link from 'next/link';


const Navbar = ({ scrollToSection, stories, about, spotlight, contact }) => {
  const [hamburger, setHamburger] = useState(false);

    return (

    <>
      {/* Large screens */}
      <div className="w-full  hidden xl:flex   h-[120px] px-[89px] py-[30px] justify-between items-center ">
        <Link href="/">
          <Image width={70} height={60} src='/bestofus.png' alt="The Best Of Us" />
        </Link>
        <div className="h-[42px] w-[250px] 4xS:w-[350px] px-5 py-3 bg-zinc-100 bg-opacity-90 rounded-[40px] border border-neutral-400 justify-start items-center gap-2.5 flex">
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7916 13.125L17.1666 16.5" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M15.6666 8.25C15.6666 4.52208 12.6446 1.5 8.91663 1.5C5.18871 1.5 2.16663 4.52208 2.16663 8.25C2.16663 11.978 5.18871 15 8.91663 15C12.6446 15 15.6666 11.978 15.6666 8.25Z"
              stroke="#939393"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          <input className="text-neutral-400 outline-none border-none w-full bg-transparent h-full text-sm font-normal " placeholder="Search Articles......." />
        </div>
        <div className="justify-start items-center gap-[50px] flex">
          <div  className=" cursor-pointer text-sky-950  text-lg font-normal font-montserrat  tracking-tight">
            Stories
          </div>
          <div  className=" cursor-pointer text-sky-950 text-lg font-normal font-montserrat  tracking-tight">
            About Us
          </div>
          <div  className=" cursor-pointer text-sky-950 text-lg font-normal font-montserrat  tracking-tight">
            Spotlight
          </div>
          <div  className=" cursor-pointer text-sky-950 text-lg font-normal font-montserrat  tracking-tight">
            Contact Us
          </div>
        </div>
        <Link href="/write">
          <button className="flex justify-between gap-[10px] items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.2676 6.22798L22.0198 4.47578C22.9875 3.50807 24.5565 3.50807 25.5242 4.47578C26.4919 5.4435 26.4919 7.01247 25.5242 7.98018L23.772 9.73238M20.2676 6.22798L13.7252 12.7704C12.4187 14.077 11.7653 14.7302 11.3205 15.5264C10.8756 16.3225 10.428 18.2024 10 20C11.7976 19.572 13.6775 19.1244 14.4736 18.6795C15.2698 18.2346 15.923 17.5814 17.2296 16.2747L23.772 9.73238M20.2676 6.22798L23.772 9.73238"
                stroke="#001F3F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.25 15C26.25 20.3032 26.25 22.955 24.6025 24.6025C22.955 26.25 20.3032 26.25 15 26.25C9.6967 26.25 7.04505 26.25 5.39752 24.6025C3.75 22.955 3.75 20.3032 3.75 15C3.75 9.6967 3.75 7.04505 5.39752 5.39752C7.04505 3.75 9.6967 3.75 15 3.75"
                stroke="#001F3F"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <div className="text-sky-950 text-lg font-normal font-montserrat  tracking-tight">Write</div>
          </button>
        </Link>
      </div>

         {/* Small screens */}
         <div className="w-full  flex xl:hidden   h-[120px] px-[50px] py-[30px] justify-between items-center ">
        <Image width={70} height={60} src='/bestofus.png' alt="The Best Of Us" />
        <svg
          onClick={() => {
            setHamburger(!hamburger);
          }}
          className="text-sky-950"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 5H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 19H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {hamburger && (
        <div className=" w-full  flex flex-col h-fit pb-[30px] ">
          <div className=" border-b-[0.7px] px-[89px]   py-[15px] border-neutral-300  ">
            <div className="h-[42px] w-full 820xxS:w-[700px] px-5 py-3 bg-zinc-100 bg-opacity-90 rounded-[40px] border border-neutral-400 justify-start items-center gap-2.5 flex">
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7916 13.125L17.1666 16.5" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M15.6666 8.25C15.6666 4.52208 12.6446 1.5 8.91663 1.5C5.18871 1.5 2.16663 4.52208 2.16663 8.25C2.16663 11.978 5.18871 15 8.91663 15C12.6446 15 15.6666 11.978 15.6666 8.25Z"
                  stroke="#939393"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>

              <input className="text-neutral-400 outline-none border-none w-full bg-transparent h-full text-sm font-normal " placeholder="Search Articles......." />
            </div>
          </div>

          <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300  text-lg font-normal font-montserrat  tracking-tight">Stories</div>
          <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 text-lg font-normal font-montserrat  tracking-tight">About Us</div>
          <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 text-lg font-normal font-montserrat  tracking-tight">Spotlight</div>
          <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 text-lg font-normal font-montserrat  tracking-tight">Contact Us</div>
          <div className=" border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 ">
            {" "}
            <Link href="/write">
              <button className="flex justify-between gap-[10px] items-center">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.2676 6.22798L22.0198 4.47578C22.9875 3.50807 24.5565 3.50807 25.5242 4.47578C26.4919 5.4435 26.4919 7.01247 25.5242 7.98018L23.772 9.73238M20.2676 6.22798L13.7252 12.7704C12.4187 14.077 11.7653 14.7302 11.3205 15.5264C10.8756 16.3225 10.428 18.2024 10 20C11.7976 19.572 13.6775 19.1244 14.4736 18.6795C15.2698 18.2346 15.923 17.5814 17.2296 16.2747L23.772 9.73238M20.2676 6.22798L23.772 9.73238"
                    stroke="#001F3F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.25 15C26.25 20.3032 26.25 22.955 24.6025 24.6025C22.955 26.25 20.3032 26.25 15 26.25C9.6967 26.25 7.04505 26.25 5.39752 24.6025C3.75 22.955 3.75 20.3032 3.75 15C3.75 9.6967 3.75 7.04505 5.39752 5.39752C7.04505 3.75 9.6967 3.75 15 3.75"
                    stroke="#001F3F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="text-sky-950 text-lg font-normal font-montserrat  tracking-tight">Write</div>
              </button>
            </Link>
          </div>
        </div>
      )}
      </>
    );
  };
  
  export default Navbar;