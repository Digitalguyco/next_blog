import Image from "next/image";



export default function Home(){


    return(
        <>
        {/* Hero */}
    <div className="w-full h-[551px] py-auto flex justify-between items-center ">
            <div className="flex-col justify-center items-start gap-5 inline-flex">
                <div className="w-[680px]"><span className="text-sky-950 text-[64px] font-semibold font-['Montserrat'] leading-[85px] tracking-wide">Discover the Extraordinary: </span><span className="text-yellow-400 text-[64px] font-semibold font-['Montserrat'] leading-[85px] tracking-wide">The Best of Us</span></div>
                <div className="w-[606px] text-neutral-500 text-2xl font-normal font-['Roboto'] leading-10 tracking-tight">Explore inspiring stories of people, businesses, and innovations originating from Africa and the diaspora. Join us on a journey celebrating excellence, diversity, and success.</div>
            </div>
            <div className="h-[402px] justify-center items-center  flex-col">
                <div className="flex pb-3 ">
                    <Image className="rounded-[30px] mr-2" width={240} height={240} src="/image7.png" alt='HImage1'/>
                    <Image lassName="rounded-[30px]" width={240} height={160} src="/image8.png" alt='HImage2' />
                </div>
               
                <Image className="  rounded-[30px]" width={483} height={232}  src="/image2.png" alt='HImage3'/>
            </div>
    </div>

    {/* Space Nav Page */}
    <div className="w-full   mt-12 relative flex-col justify-start items-start inline-flex">
    <div className="flex-col justify-start items-start gap-[90px] inline-flex">
        <div className="w-full h-[90px] px-[50px] pt-[30px] border-b border-neutral-400 justify-between items-start inline-flex">
            <div className="h-[60px] flex-col justify-between items-start inline-flex">
                <div className="justify-center items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-green-500 text-lg font-normal font-['Montserrat'] tracking-tight">Top Articles</div>
                </div>
                <div className="w-[140px] h-0.5 relative bg-green-500 rounded-sm" />
            </div>
            <div className="justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative origin-top-left rotate-180" />
                <div className="text-sky-950 text-lg font-normal font-['Montserrat'] tracking-tight">Trending</div>
            </div>
            <div className="justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative" />
                <div className="text-sky-950 text-lg font-normal font-['Montserrat'] tracking-tight">People</div>
            </div>
            <div className="justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative" />
                <div className="text-sky-950 text-lg font-normal font-['Montserrat'] tracking-tight">Business</div>
            </div>
            <div className="justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative" />
                <div className="text-sky-950 text-lg font-normal font-['Montserrat'] tracking-tight">Innovation</div>
            </div>
            <div className="justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative" />
                <div className="text-sky-950 text-lg font-normal font-['Montserrat'] tracking-tight">Places</div>
            </div>
        </div>
        <div className="w-full overflow-x-auto justify-start items-center gap-[70px] inline-flex">
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <img className="w-[496px] h-[273px] rounded-[20px]" src="https://via.placeholder.com/496x273" />
                <div className="relative">
                    <div className="w-[496px] h-[72px] left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex">
                        <div className="w-[389px] text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight">5 min read</div>
                        </div>
                    </div>
                    <div className="w-[482px] h-[105px] left-0 top-[92px] absolute justify-start items-center gap-2.5 inline-flex">
                        <div className="w-[482px] text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">Explore the tech brilliance of the African diaspora, from Silicon Valley to emerging hubs. Discover inspiring stories shaping the future.</div>
                    </div>
                </div>
                <div className="justify-start items-center gap-5 inline-flex">
                    <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="text-zinc-800 text-sm font-medium font-['Montserrat'] tracking-tight">Jan  10, 2024</div>
                    </div>
                    <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-sky-950 text-sm font-normal font-['Montserrat'] tracking-tight">20 Comments</div>
                    </div>
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="w-[18px] h-[18px] relative" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <img className="w-[496px] h-[273px] rounded-[20px]" src="https://via.placeholder.com/496x273" />
                <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[389px] text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">Afro-Fusion Cuisine: Culinary Delights Redefining Taste</div>
                    <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight">3 min read</div>
                    </div>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[482px] text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">Dive into Afro-Fusion cuisine as chefs blend tradition with contemporary flair. Uncover delectable dishes taking the culinary scene by storm.</div>
                </div>
                <div className="justify-start items-center gap-5 inline-flex">
                    <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="text-zinc-800 text-sm font-medium font-['Montserrat'] tracking-tight">Jan  10, 2024</div>
                    </div>
                    <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-sky-950 text-sm font-normal font-['Montserrat'] tracking-tight">20 Comments</div>
                    </div>
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="w-[18px] h-[18px] relative" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <img className="w-[496px] h-[273px] rounded-[20px]" src="https://via.placeholder.com/496x273" />
                <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[389px] text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
                    <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight">5 min read</div>
                    </div>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[482px] text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">Explore the tech brilliance of the African diaspora, from Silicon Valley to emerging hubs. Discover inspiring stories shaping the future.</div>
                </div>
                <div className="justify-start items-center gap-5 inline-flex">
                    <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="text-zinc-800 text-sm font-medium font-['Montserrat'] tracking-tight">Jan  10, 2024</div>
                    </div>
                    <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-sky-950 text-sm font-normal font-['Montserrat'] tracking-tight">20 Comments</div>
                    </div>
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="w-[18px] h-[18px] relative" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
                <img className="w-[496px] h-[273px] rounded-[20px]" src="https://via.placeholder.com/496x273" />
                <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[389px] text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">Afro-Fusion Cuisine: Culinary Delights Redefining Taste</div>
                    <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight">3 min read</div>
                    </div>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[482px] text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">Dive into Afro-Fusion cuisine as chefs blend tradition with contemporary flair. Uncover delectable dishes taking the culinary scene by storm.</div>
                </div>
                <div className="justify-start items-center gap-5 inline-flex">
                    <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="text-zinc-800 text-sm font-medium font-['Montserrat'] tracking-tight">Jan  10, 2024</div>
                    </div>
                    <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="w-[18px] h-[18px] relative" />
                        <div className="text-sky-950 text-sm font-normal font-['Montserrat'] tracking-tight">20 Comments</div>
                    </div>
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="w-[18px] h-[18px] relative" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="justify-start items-center gap-[1194px] inline-flex">
        <div className="p-2.5 bg-sky-950 bg-opacity-10 rounded-[100px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
        </div>
        <div className="p-2.5 origin-top-left rotate-180 bg-sky-950 bg-opacity-10 rounded-[100px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
        </div>
    </div>
</div>


    {/* About */}

    <div className="w-full mt-28 flex-col overflow-x-auto justify-start items-start gap-[60px] inline-flex ">
    <div className="flex-col justify-center items-start gap-5 flex">
        <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">Celebrating Exceptional Individuals</div>
        <div className="w-[721px] text-neutral-500 text-2xl font-normal font-['Roboto'] leading-10 tracking-tight">Explore the remarkable stories of individuals making a difference. From entrepreneurs and artists to community leaders, discover the inspiring journeys that define The Best of Us.</div>
    </div>
    <div className="self-stretch h-[814.11px] flex-col justify-start items-start gap-[30px] flex">
        <div className="w-[1239px] justify-start items-center gap-10 inline-flex">
            <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
                <Image width={300} height={438.11}  src="/image11.png" alt="test" />
                <div className="px-8 py-7 bg-white flex-col justify-center items-center gap-2.5 flex">
                    <div className="flex-col justify-center items-start gap-[15px] flex">
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                            <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
                            <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>
                        </div>
                        <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.</div>
                    </div>
                </div>
            </div>
            <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
            <Image width={300} height={438.11}  src="/image11.png" alt="test" />
                <div className="px-[21px] py-[25px] bg-white flex-col justify-center items-center gap-2.5 flex">
                    <div className="flex-col justify-center items-start gap-[15px] flex">
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                            <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Kwame Osei</div>
                            <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Tech Innovator</div>
                        </div>
                        <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">Kwame is a leading figure in the tech industry, pioneering innovations that drive positive change. His work focuses on leveraging technology for social impact.</div>
                    </div>
                </div>
            </div>
            <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
            <Image width={300} height={438.11}  src="/image11.png" alt="test" />
                <div className="px-8 py-7 bg-white flex-col justify-center items-center gap-2.5 flex">
                    <div className="flex-col justify-center items-start gap-[15px] flex">
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                            <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
                            <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>
                        </div>
                        <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-[30px] py-[15px] rounded-[20px] border border-green-500 self-end  gap-2.5 inline-flex">
            <div className="text-sky-950 text-xl font-medium font-['Montserrat'] leading-[25px] tracking-tight">Explore Their Journeys</div>
            <div className="w-[30px] h-[30px] relative" />
        </div>
    </div>
</div>

    {/* innovation */}
    <div className="w-full h-auto mb-20 flex-col justify-start items-start gap-[70px] inline-flex mt-20">
    <div className="flex-col justify-center items-start gap-5 flex">
        <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">Innovate Today, Shape Tomorrow</div>
    </div>
    <div className="flex-col justify-end items-end gap-10 flex">
        <div className="flex-col justify-center items-start gap-[50px] flex">
            <div className="w-[1234px] justify-between items-center inline-flex">
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight">5 min read</div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">QuantumTech Solutions</div>
                    </div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-[757px] text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">QuantumTech Solutions, a trailblazer in the realm of quantum computing, invites you to delve into the intricate world where classical computing limitations cease to exist. Explore the quantum realm, where computing takes a quantum leap into unprecedented possibilities, reshaping the future of technology.</div>
                    </div>
                    <div className="justify-start items-center gap-5 inline-flex">
                        <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="text-zinc-800 text-sm font-medium font-['Montserrat'] tracking-tight">Jan  10, 2024</div>
                        </div>
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="w-[18px] h-[18px] relative" />
                            <div className="text-sky-950 text-sm font-normal font-['Montserrat'] tracking-tight">20 Comments</div>
                        </div>
                        <div className="justify-start items-center gap-2.5 flex">
                            <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                                <div className="w-[18px] h-[18px] relative" />
                            </div>
                        </div>
                    </div>
                </div>
                <Image className="rounded-[20px]" width={410} height={200} src="/image2.png"  alt="test"/>
            </div>
            <div className="w-[1234px] justify-between items-center inline-flex">
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight">2 min read</div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">SpaceFront Explorations</div>
                    </div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-[757px] text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">SpaceFront Explorations transcends the earthly bounds, venturing into the cosmic expanses of space. Immerse yourself in the awe-inspiring odyssey of space exploration, where each discovery opens new frontiers and fuels our collective fascination with the cosmos.</div>
                    </div>
                    <div className="justify-start items-center gap-5 inline-flex">
                        <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="text-zinc-800 text-sm font-medium font-['Montserrat'] tracking-tight">Jan  10, 2024</div>
                        </div>
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="w-[18px] h-[18px] relative" />
                            <div className="text-sky-950 text-sm font-normal font-['Montserrat'] tracking-tight">20 Comments</div>
                        </div>
                        <div className="justify-start items-center gap-2.5 flex">
                            <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                                <div className="w-[18px] h-[18px] relative" />
                            </div>
                        </div>
                    </div>
                </div>
                <Image className="rounded-[20px]" width={410} height={200} src="/image2.png"  alt="test"/>
            </div>
            <div className="w-[1234px] justify-between items-center inline-flex">
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight">2 min read</div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">BioGen Innovations</div>
                    </div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="w-[757px] text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">BioGen Innovations stands at the forefront of biotechnological advancements, unraveling the mysteries of genetics to usher in a new era of healthcare. Join us in exploring the genetic frontiers, where breakthroughs in biotech promise transformative changes in the way we perceive and treat health.</div>
                    </div>
                    <div className="justify-start items-center gap-5 inline-flex">
                        <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="text-zinc-800 text-sm font-medium font-['Montserrat'] tracking-tight">Jan  10, 2024</div>
                        </div>
                        <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                            <div className="w-[18px] h-[18px] relative" />
                            <div className="text-sky-950 text-sm font-normal font-['Montserrat'] tracking-tight">20 Comments</div>
                        </div>
                        <div className="justify-start items-center gap-2.5 flex">
                            <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                                <div className="w-[18px] h-[18px] relative" />
                            </div>
                        </div>
                    </div>
                </div>
                <Image className="rounded-[20px]" width={410} height={200} src="/image2.png"  alt="test"/>
            </div>
        </div>
    </div>
</div>

        


        {/* EXPLORE RICH */}
        <div className="w-full h-[651.09px] flex-col justify-start items-start gap-[60px] inline-flex">
    <div className="flex-col justify-center items-start gap-5 flex">
        <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">Explore the Rich Tapestry of Places That Define Our World!</div>
        <div className="w-[1146px] text-neutral-500 text-2xl font-normal font-['Roboto'] leading-10 tracking-tight">Explore our communities with the "Places" section. From bustling urban hotspots to serene natural wonders, discover diverse locales and unique stories. Join us on a virtual tour of extraordinary places shaping the essence of our world.</div>
    </div>
    <div className="flex-col justify-start items-start gap-10 flex">
        <div className="w-[90%] rounded-[20px] overflow-x-auto justify-start items-center gap-10 inline-flex">
            <div className="flex-col justify-start items-center inline-flex">
                <Image className=" rounded-[20px]" width={390} height={317.01} src="/image14.png" alt='test'/>
                <div className="self-stretch px-[17px] py-[19px] justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[352px] text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight">A cultural snapshot of a vibrant neighborhood, with colorful street markets, local art installations.</div>
                </div>
            </div>
            <div className="flex-col justify-start items-center inline-flex">
            <Image className=" rounded-[20px]" width={390} height={317.01} src="/image14.png" alt='test'/>
                <div className="self-stretch px-[17px] py-[19px] justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[339px] text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight">A panoramic shot of a lively cityscape, showcasing iconic landmarks and the energy of urban life.</div>
                </div>
            </div>
            <div className="flex-col justify-start items-center inline-flex">
            <Image className=" rounded-[20px]" width={390} height={317.01} src="/image14.png" alt='test'/>
                <div className="self-stretch px-[17px] py-[19px] justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[339px] text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight">A tranquil image of a nature retreat, featuring lush greenery, winding trails, and a peaceful atmosphere.</div>
                </div>
            </div>
            <div className="flex-col justify-start items-center inline-flex">
            <Image className=" rounded-[20px]" width={390} height={317.01} src="/image14.png" alt='test'/>
                <div className="self-stretch px-[17px] py-[19px] justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[339px] text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight">A panoramic shot of a lively cityscape, showcasing iconic landmarks and the energy of urban life.</div>
                </div>
            </div>
        </div>
    </div>
</div>



        {/* EXPLORE */}
        <div className="w-full h-[684px] flex-col justify-start items-start ">
    <div className="flex-col justify-center items-start gap-5 flex">
        <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">Explore Extraordinary Businesses</div>
        <div className="w-[667px] text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[35px] tracking-tight">Discover and celebrate remarkable businesses making waves in various industries.</div>
    </div>
    <div className="flex-col justify-between  mt-8">
        <div className="w-full overflow-x-auto overflow-y-hidden rounded-[20px] justify-start items-center gap-10 inline-flex">
            <div className="w-[612px] h-[490px] relative">
            <Image className="left-0 top-0 absolute rounded-[20px]" width={612} height={490} src="/image15.png" alt='inofopng'/>
                <div className=" pl-10 pr-[69px] py-3 left-0 top-[326px] absolute bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">EcoChic Boutique</div>
                        <div className="w-[490px] text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">Embrace sustainable fashion with EcoChic Boutique. From trendy attire to accessories, they redefine style while championing eco-friendly practices.</div>
                    </div>
                </div>
            </div>
            <div className="w-[612px] h-[490px] relative">
            <Image className="left-0 top-0 absolute rounded-[20px]" width={612} height={400} src="/image15.png" alt='inofopng'/>
                <div className=" pl-10 pr-[69px] py-3 left-0 top-[326px] absolute bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">GreenHarvest Farms</div>
                        <div className="w-[490px] text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">GreenHarvest Farms is committed to organic farming. Dive into their world of fresh produce, cultivating a healthier lifestyle for communities.</div>
                    </div>
                </div>
            </div>
            <div className="w-[612px] h-[490px] relative">
            <Image className="left-0 top-0 absolute rounded-[20px]" width={612} height={400} src="/image15.png" alt='inofopng'/>
                <div className=" pl-10 pr-[69px] py-3 left-0 top-[326px] absolute bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">GreenHarvest Farms</div>
                        <div className="w-[490px] text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">GreenHarvest Farms is committed to organic farming. Dive into their world of fresh produce, cultivating a healthier lifestyle for communities.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


          {/* about */}
    <div className="w-full h-[464px] justify-start items-center gap-[60px] inline-flex">
    <div className="flex-col justify-center items-start gap-5 inline-flex">
        <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">About Us</div>
        <div className="w-[626px]"><span className="text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">Explore the rich tapestry of stories that define "</span><span className="text-yellow-400 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">The Best of Us.</span><span className="text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">" Our narrative is woven from the threads of exceptional individuals, innovative businesses, and vibrant communities across Africa and the diaspora. Join us on a journey of discovery as we celebrate the diverse and extraordinary facets of our shared identity. Together, let's elevate and showcase the best that emanates from our continent and beyond.</span></div>
    </div>
    <Image  src={"/aboutimg.png"} width={550} height={366.67} alt="about_image" />
    </div>
    
    </>
    )

}