

function Culture() {
  return (
    <>
      {/* Large Screens */}
      <div className=" 13inch:flex 3xxS:hidden flex-col w-[85%] justify-between mt-[120px] gap-[70px] items-start">
        <div className=" flex flex-col justify-between items-start gap-[20px]">
          <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">Explore the Rich Tapestry of Places That Define Our World!</div>
          <div className="w-[85%] text-neutral-500 text-2xl font-normal font-['Roboto'] leading-10 tracking-tight">
            Explore our communities with the "Places" section. From bustling urban hotspots to serene natural wonders, discover diverse locales and unique stories. Join us on a virtual tour of extraordinary places shaping the essence of our world.
          </div>
        </div>
        <div className="flex w-full  flex-grow  items-center gap-[40px]">
          <div className="flex flex-col w-[390px] flex-1 h-fit justify-between items-start">
            <img src={'Images/culture1.png'} className="w-full" alt="Culture" />
            <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">A cultural snapshot of a vibrant neighborhood, with colorful street markets, local art installations.</div>
          </div>
          <div className="flex flex-col w-[390px] flex-1 h-fit justify-between items-start">
            <img src={'Images/culture2.png'} className="w-full" alt="Culture" />
            <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">A panoramic shot of a lively cityscape, showcasing iconic landmarks and the energy of urban life.</div>
          </div>
          <div className="flex flex-col w-[390px] flex-1 h-fit justify-between items-start">
            <img src={'Images/culture3.png'} className="w-full" alt="Culture" />
            <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">
              A tranquil image of a nature retreat, featuring lush greenery, winding trails, and a peaceful atmosphere.
            </div>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className=" 13inch:hidden 3xxS:flex flex-col w-[90%] justify-between mt-[80px] gap-[70px] items-start">
        <div className=" flex flex-col justify-between items-start gap-[20px]">
          <div className="text-sky-950 leading-[55px] text-[34px] font-semibold font-['Montserrat'] tracking-tight">Explore the Rich Tapestry of Places That Define Our World!</div>
          <div className="w-full text-neutral-500 text-2xl font-normal font-['Roboto'] leading-10 tracking-tight">
            {" "}
            Explore our communities with the "Places" section. From bustling urban hotspots to serene natural wonders, discover diverse locales and unique stories. Join us on a virtual tour of extraordinary places shaping the essence of our world.
          </div>
        </div>
        <div className="flex w-full flex-col  flex-grow justify-between  items-center gap-[40px]">
          <div className="flex flex-col w-full flex-1 h-fit justify-between items-start">
            <img src={'Images/culture1.png'} className="w-full" alt="Culture" />
            <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">A cultural snapshot of a vibrant neighborhood, with colorful street markets, local art installations.</div>
          </div>
          <div className="flex flex-col w-full flex-1 h-fit justify-between items-start">
            <img src={'Images/culture2.png'} className="w-full" alt="Culture" />
            <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">A panoramic shot of a lively cityscape, showcasing iconic landmarks and the energy of urban life.</div>
          </div>
          <div className="flex flex-col w-full flex-1 h-fit justify-between items-start">
            <img src={'Images/culture3.png'} className="w-full" alt="Culture" />
            <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">
              A tranquil image of a nature retreat, featuring lush greenery, winding trails, and a peaceful atmosphere.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Culture;
