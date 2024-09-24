
function Place() {
  return (
    <>
      <div className="flex w-[1200px] overflow-x-scroll  justify-between   items-center gap-[40px]">
        <div className="flex w-full  flex-grow justify-between  items-center gap-[40px]">
          <div className="flex flex-col w-[400px] flex-1 h-fit justify-between items-start">
            <img src={'Images/culture1.png'} className="w-full" alt="Culture" />
            <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">A cultural snapshot of a vibrant neighborhood, with colorful street markets, local art installations.</div>
          </div>
          <div className="flex flex-col w-[400px] flex-1 h-fit justify-between items-start">
            <img src={'Images/culture2.png'} className="w-full" alt="Culture" />
            <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">A panoramic shot of a lively cityscape, showcasing iconic landmarks and the energy of urban life.</div>
          </div>
          <div className="flex flex-col w-[400px] flex-1 h-fit justify-between items-start">
            <img src={'Images/culture3.png'} className="w-full" alt="Culture" />
            <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">
              A tranquil image of a nature retreat, featuring lush greenery, winding trails, and a peaceful atmosphere.
            </div>
          </div>
          <div className="flex flex-col w-[400px] flex-1 h-fit justify-between items-start">
            <img src={'Images/culture1.png'} className="w-full" alt="Culture" />
            <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">A cultural snapshot of a vibrant neighborhood, with colorful street markets, local art installations.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Place;
