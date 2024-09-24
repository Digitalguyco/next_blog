"use client";

import { useState } from "react";
import Link from "next/link";

function Journey() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <>
        {/* Large screens */}
        <div className="w-full 3xxS:hidden 13inch:flex   h-[120px] px-[89px] py-[30px] justify-between items-center ">
          <Link href="/">
            <img width={70} height={60} src={'Images/bestofus.png'} alt="The Best Of Us" />
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
            <Link href="/">
              <div className=" text-sky-950  text-lg font-normal font-montserrat  tracking-tight">Stories</div>
            </Link>
            <Link href="/">
              <div className=" text-sky-950 text-lg font-normal font-montserrat  tracking-tight">About Us</div>
            </Link>
            <Link href="/">
              <div className=" text-sky-950 text-lg font-normal font-montserrat  tracking-tight">Spotlight</div>
            </Link>
            <Link href="/">
              <div className=" text-sky-950 text-lg font-normal font-montserrat  tracking-tight">Contact Us</div>
            </Link>
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
        <div className="w-full  3xxS:flex 13inch:hidden   h-[120px] px-[50px] py-[30px] justify-between items-center ">
          <img width={70} height={60} src={'Images/bestofus.png'} alt="The Best Of Us" />
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
            <Link href="/">
              <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300  text-lg font-normal font-montserrat  tracking-tight">Stories</div>
            </Link>
            <Link href="/">
              <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 text-lg font-normal font-montserrat  tracking-tight">About Us</div>
            </Link>
            <Link href="/">
              <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 text-lg font-normal font-montserrat  tracking-tight">Spotlight</div>
            </Link>
            <Link href="/">
              <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 text-lg font-normal font-montserrat  tracking-tight">Contact Us</div>
            </Link>

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
      {/* Large Screens */}
      <div className="13inch:flex 3xxS:hidden w-full mt-[123px] flex justify-center items-center  ">
        <div className="w-[85%] 4xxS:max-w-[75%] gap-[100px] flex-col flex justify-between items-center">
          <div className="flex gap-[50px] justify-between items-center ">
            <div className=" gap-[15px] flex flex-col items-start">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
              <div className="text-sky-950 text-xl font-normal font-['Montserrat'] tracking-tight">
                Occupation: <span className="text-[#666666]">Renowned Environmentalist</span>
              </div>
              <div className="text-sky-950 text-xl font-normal font-['Montserrat'] tracking-tight">
                Passions: <span className="text-[#666666]">Protecting our planet, fostering sustainability</span>
              </div>
              <div className="text-sky-950 text-xl font-normal font-['Montserrat'] tracking-tight">
                Achievements: <span className="text-[#666666]">Led impactful initiatives, received numerous awards</span>
              </div>

              <div className=" w-[85%] text-[#787878] text-[20px] font-normal font-['Roboto'] leading-[35px] tracking-tight">
                From a small town with a big heart for nature, Adaku Nwosu has dedicated her life to environmental causes. Her journey is a testament to the impact one person can have on the world.{" "}
              </div>
            </div>
            <div className="flex gap-[10px] justify-between items-center">
              <div className="pt-10 w-[230px] h-[259.06px] bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <img className="w-[150px] h-[219.06px]" src={'Images/ada.png'} alt="people" />
              </div>
              <div className="flex gap-[10px] justify-between items-center flex-col">
                <div className="pt-10 w-[180px] h-[143.03px] bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-[100px] h-[103.03px]" src={'Images/small ada.png'} alt="people" />
                </div>
                <div className="pt-10 w-[180px] h-[143.03px] bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-[100px] h-[103.03px]" src={'Images/small ada.png'} alt="people" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[50px] justify-between items-center ">
            <div className="flex gap-[10px] justify-between items-center">
              <div className="flex gap-[10px] justify-between items-center flex-col">
                <div className="pt-10 w-[180px] h-[143.03px] bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-[100px] h-[103.03px]" src={'/Images/kwame1.png'} alt="people" />
                </div>
                <div className="pt-10 w-[180px] h-[143.03px] bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-[100px] h-[103.03px]" src={'/Images/kwame2.png'} alt="people" />
                </div>
              </div>
              <div className="pt-10 w-[230px] h-[259.06px] bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <img className="w-[150px] h-[219.06px]" src={'/Images/kwame.png'} alt="people" />
              </div>
            </div>
            <div className=" w-full gap-[15px] flex flex-col items-start">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Kwame Osei</div>
              <div className="text-sky-950 text-xl font-normal font-['Montserrat'] tracking-tight">
                Occupation: <span className="text-[#666666]">Renowned Environmentalist</span>
              </div>
              <div className="text-sky-950 text-xl font-normal font-['Montserrat'] tracking-tight">
                Passions: <span className="text-[#666666]">Protecting our planet, fostering sustainability</span>
              </div>
              <div className="text-sky-950 text-xl font-normal font-['Montserrat'] tracking-tight">
                Achievements: <span className="text-[#666666]">Led impactful initiatives, received numerous awards</span>
              </div>

              <div className=" w-full text-[#787878] text-[20px] font-normal font-['Roboto'] leading-[35px] tracking-tight">
                From a small town with a big heart for nature, Adaku Nwosu has dedicated her life to environmental causes. Her journey is a testament to the impact one person can have on the world.{" "}
              </div>
            </div>
          </div>
          <div className="flex gap-[50px] justify-between items-center ">
            <div className=" gap-[15px] flex flex-col items-start">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
              <div className="text-sky-950 text-xl font-normal font-['Montserrat'] tracking-tight">
                Occupation: <span className="text-[#666666]">Renowned Environmentalist</span>
              </div>
              <div className="text-sky-950 text-xl font-normal font-['Montserrat'] tracking-tight">
                Passions: <span className="text-[#666666]">Protecting our planet, fostering sustainability</span>
              </div>
              <div className="text-sky-950 text-xl font-normal font-['Montserrat'] tracking-tight">
                Achievements: <span className="text-[#666666]">Led impactful initiatives, received numerous awards</span>
              </div>

              <div className=" w-[85%] text-[#787878] text-[20px] font-normal font-['Roboto'] leading-[35px] tracking-tight">
                From a small town with a big heart for nature, Adaku Nwosu has dedicated her life to environmental causes. Her journey is a testament to the impact one person can have on the world.{" "}
              </div>
            </div>
            <div className="flex gap-[10px] justify-between items-center">
              <div className="pt-10 w-[230px] h-[259.06px] bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <img className="w-[150px] h-[219.06px]" src={'Images/ada2.png'} alt="people" />
              </div>
              <div className="flex gap-[10px] justify-between items-center flex-col">
                <div className="pt-10 w-[180px] h-[143.03px] bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-[90px] h-[103.03px]" src={'Images/ada2.png'} alt="people" />
                </div>
                <div className="pt-10 w-[180px] h-[143.03px] bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-[90px] h-[103.03px]" src={'Images/ada2.png'} alt="people" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className=" 13inch:hidden 3xxS:flex flex-col w-full justify-center mt-[80px] items-center">
        <div className="flex-col flex w-[90%] justify-between gap-[70px] items-start">
          <div className="flex flex-col gap-[50px] justify-between items-center ">
            <div className=" gap-[15px] flex flex-col items-start">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
              <div className="text-sky-950 text-xl w-full  leading-[35px] font-normal font-['Montserrat'] tracking-tight">
                Occupation: <span className="text-[#666666]">Renowned Environmentalist</span>
              </div>
              <div className="text-sky-950 text-xl w-full  leading-[35px] font-normal font-['Montserrat'] tracking-tight">
                Passions: <span className="text-[#666666]">Protecting our planet, fostering sustainability</span>
              </div>
              <div className="text-sky-950 text-xl w-full  leading-[35px] font-normal font-['Montserrat'] tracking-tight">
                Achievements: <span className="text-[#666666]">Led impactful initiatives, received numerous awards</span>
              </div>

              <div className=" w-full text-[#787878] text-[20px] font-normal font-['Roboto'] leading-[35px] tracking-tight">
                From a small town with a big heart for nature, Adaku Nwosu has dedicated her life to environmental causes. Her journey is a testament to the impact one person can have on the world.{" "}
              </div>
            </div>
            <div className="flex w-full gap-[10px] justify-between items-center">
              <div className="pt-10 w-full h-fit bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <img className="w-full" src={'Images/ada.png'} alt="people" />
              </div>
              <div className="flex gap-[10px] w-full h-fit justify-between items-center flex-col">
                <div className="pt-10 w-full h-fit bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-full" src={'Images/small ada.png'} alt="people" />
                </div>
                <div className="pt-10 w-full h-fit bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-full" src={'Images/small ada.png'} alt="people" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] justify-between items-center ">
            <div className=" gap-[15px] flex flex-col items-start">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Kwame Osei</div>
              <div className="text-sky-950 text-xl w-full  leading-[35px] font-normal font-['Montserrat'] tracking-tight">
                Occupation: <span className="text-[#666666]">Renowned Environmentalist</span>
              </div>
              <div className="text-sky-950 text-xl w-full  leading-[35px] font-normal font-['Montserrat'] tracking-tight">
                Passions: <span className="text-[#666666]">Protecting our planet, fostering sustainability</span>
              </div>
              <div className="text-sky-950 text-xl w-full  leading-[35px] font-normal font-['Montserrat'] tracking-tight">
                Achievements: <span className="text-[#666666]">Led impactful initiatives, received numerous awards</span>
              </div>

              <div className=" w-full text-[#787878] text-[20px] font-normal font-['Roboto'] leading-[35px] tracking-tight">
                From a small town with a big heart for nature, Adaku Nwosu has dedicated her life to environmental causes. Her journey is a testament to the impact one person can have on the world.{" "}
              </div>
            </div>
            <div className="flex w-full gap-[10px] justify-between items-center">
              <div className="pt-10 w-full h-fit bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <img className="w-full" src={'/Images/kwame.png'} alt="people" />
              </div>
              <div className="flex gap-[10px] w-full h-fit justify-between items-center flex-col">
                <div className="pt-10 w-full h-fit bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-[90%]" src={'/Images/kwame1.png'} alt="people" />
                </div>
                <div className="pt-10 w-full h-fit bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-[90%]" src={'/Images/kwame2.png'} alt="people" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] justify-between items-center ">
            <div className=" gap-[15px] flex flex-col items-start">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
              <div className="text-sky-950 text-xl w-full  leading-[35px] font-normal font-['Montserrat'] tracking-tight">
                Occupation: <span className="text-[#666666]">Renowned Environmentalist</span>
              </div>
              <div className="text-sky-950 text-xl w-full  leading-[35px] font-normal font-['Montserrat'] tracking-tight">
                Passions: <span className="text-[#666666]">Protecting our planet, fostering sustainability</span>
              </div>
              <div className="text-sky-950 text-xl w-full  leading-[35px] font-normal font-['Montserrat'] tracking-tight">
                Achievements: <span className="text-[#666666]">Led impactful initiatives, received numerous awards</span>
              </div>

              <div className=" w-full text-[#787878] text-[20px] font-normal font-['Roboto'] leading-[35px] tracking-tight">
                From a small town with a big heart for nature, Adaku Nwosu has dedicated her life to environmental causes. Her journey is a testament to the impact one person can have on the world.{" "}
              </div>
            </div>
            <div className="flex w-full gap-[10px] justify-between items-center">
              <div className="pt-10 w-full h-fit bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <img className="w-full" src={'Images/ada2.png'} alt="people" />
              </div>
              <div className="flex gap-[10px] w-full h-fit justify-between items-center flex-col">
                <div className="pt-10 w-full h-fit bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-[80%]" src={'Images/ada2.png'} alt="people" />
                </div>
                <div className="pt-10 w-full h-fit bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                  <img className="w-[80%]" src={'Images/ada2.png'} alt="people" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Journey;
