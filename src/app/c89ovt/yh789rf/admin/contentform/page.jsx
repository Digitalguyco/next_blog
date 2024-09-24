"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ContentForm = () => {

    const router = useRouter();
    return(
        <div className="mx-32 mt-8 ">

            <div className="w-full h-[69px] py-5 flex-col justify-start items-start gap-[796px] inline-flex">
                <div><span className="text-neutral-400 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">Content Management / </span><span className="text-sky-950 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">New Post</span></div>
            </div>

            <div className="w-full mt-12 h-[100px] pl-[38px] pr-[970px] pt-7 pb-[33px] rounded-[20px] border border-neutral-400 justify-start items-center inline-flex">
                    <div className="text-neutral-400 text-[32px] font-medium font-['Montserrat'] tracking-tight">Title</div>
            </div>

            <div className="w-full mt-8 h-[428px] pl-[38px] pr-[818px] pt-7 pb-[362px] rounded-[20px] border border-neutral-400 justify-start items-center inline-flex">
                    <div className="self-stretch justify-start items-center gap-[25px] inline-flex">
                        <div className="justify-start items-center gap-2.5 flex">
                            <div className="p-2.5 rounded-[40px] border border-sky-950 justify-center items-center gap-2.5 flex">
                                <div className="w-[18px] h-[18px] relative" />
                            </div>
                        </div>
                        <div className="text-neutral-400 text-2xl font-normal font-['Montserrat'] tracking-tight">Add Story........</div>
                    </div>
                </div>

                <div className="w-full h-[45px] justify-end items-center gap-5 inline-flex mt-8">
                <div className="px-[30px] py-2.5 bg-red-500 mr-auto rounded-[20px] justify-start items-center gap-2.5 flex">
        <button onClick={ () =>  router.back()} className="text-white text-xl font-medium font-['Montserrat'] leading-[25px] tracking-tight">Cancle</button>
    </div>
    <div className="px-[30px] py-2.5 rounded-[20px] border border-green-500 justify-start items-center gap-2.5 flex">
        <div className="text-zinc-800 text-xl font-medium font-['Montserrat'] leading-[25px] tracking-tight">Save Draft</div>
    </div>
    <div className="px-[30px] py-2.5 bg-green-500 rounded-[20px] justify-start items-center gap-2.5 flex">
        <div className="text-sky-950 text-xl font-medium font-['Montserrat'] leading-[25px] tracking-tight">Publish</div>
    </div>
</div>


        </div>
    )
};

export default ContentForm;