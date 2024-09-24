import Link from "next/link";

const Individuals = () => {
    return (
        <>
          <div className=" flex flex-col w-[85%] justify-between mt-[120px] gap-[60px] items-start">
            <div className="flex-col justify-center items-start gap-5 flex">
              <div className="text-sky-950 3xxS:text-[32px] 7xxS:text-4xl 3xxS:w-full leading-[50px] font-semibold font-['Montserrat'] tracking-tight">Celebrating Exceptional Individuals</div>
              <div className=" 1xS:w-[721px] 3xxS:w-full text-neutral-500 text-2xl font-normal font-['Roboto'] leading-10 tracking-tight">
                Explore the remarkable stories of individuals making a difference. From entrepreneurs and artists to community leaders, discover the inspiring journeys that define The Best of Us.
              </div>
            </div>
            <div className="flex w-full overflow-x-scroll justify-between items-center gap-[40px]">
              <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <img src={'Images/ada.png'} alt="people" />
                <div className="px-8 py-7  bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
                  <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
                  <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>
    
                  <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                    Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.
                  </div>
                </div>
              </div>
              <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <img src={'Images/kwame.png'} alt="people" />
                <div className="px-8 py-7 bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
                  <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Kwame Osei</div>
                  <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Tech Innovator</div>
    
                  <div className="w-[380px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                    Kwame is a leading figure in the tech industry, pioneering innovations that drive positive change. His work focuses on leveraging technology for social impact.{" "}
                  </div>
                </div>
              </div>
              <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <img src={'Images/ada2.png'} alt="people" />
                <div className="px-8 py-7 bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
                  <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
                  <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>
    
                  <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                    Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.
                  </div>
                </div>
              </div>
              <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <img src={'Images/ada.png'} alt="people" />
                <div className="px-8 py-7 bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
                  <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
                  <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>
    
                  <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                    Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full flex justify-end">
              <Link href="/journey">
                <div className="px-[30px] py-[15px] rounded-[20px] border border-green-500 justify-center items-center  gap-2.5 inline-flex text-sky-950 text-xl font-medium font-['Montserrat'] leading-[25px] tracking-tight">
                  Explore Their Journeys{" "}
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5 15.1133H5.5" stroke="#001F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.25 21.3633C19.25 21.3633 25.5 16.7603 25.5 15.1133C25.5 13.4663 19.25 8.86328 19.25 8.86328" stroke="#001F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </>
      );
};

export default Individuals;
