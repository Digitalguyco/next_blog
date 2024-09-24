function AboutUs() {
  return (
    <>
      {/* Large Screens */}
      <div className=" 13inch:flex 3xxS:hidden  w-[85%] justify-between mt-[120px] gap-[60px] items-center">
        <div className="flex-col justify-center w-[45%] items-start gap-[20px] flex">
          <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">About Us</div>
          <div className="w-full">
            <span className="text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">Explore the rich tapestry of stories that define "</span>
            <span className="text-yellow-400 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">The Best of Us.</span>
            <span className="text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">
              " Our narrative is woven from the threads of exceptional individuals, innovative businesses, and vibrant communities across Africa and the diaspora. Join us on a journey of discovery as we celebrate the diverse and extraordinary facets
              of our shared identity. Together, let's elevate and showcase the best that emanates from our continent and beyond.
            </span>
          </div>
        </div>
        <div className=" w-[45%]">
          <img className="w-full" src={'Images/aboutUsblog.png'} alt="About Us" />
        </div>
      </div>
      {/* Small Screen */}
      <div className=" 13inch:hidden 3xxS:flex flex-col w-[90%] justify-between mt-[80px] gap-[70px] items-start">
        <div className="flex-col justify-center w-full items-start gap-[20px] flex">
          <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">About Us</div>
          <div className="w-full">
            <span className="text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">Explore the rich tapestry of stories that define "</span>
            <span className="text-yellow-400 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">The Best of Us.</span>
            <span className="text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">
              " Our narrative is woven from the threads of exceptional individuals, innovative businesses, and vibrant communities across Africa and the diaspora. Join us on a journey of discovery as we celebrate the diverse and extraordinary facets
              of our shared identity. Together, let's elevate and showcase the best that emanates from our continent and beyond.
            </span>
          </div>
        </div>
        <div className=" w-full">
          <img className="w-full" src={'Images/aboutUsblog.png'} alt="About Us" />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
