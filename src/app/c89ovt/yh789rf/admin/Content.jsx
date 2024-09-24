"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Posts from "../../../components/admin/Posts";
import Drafts from "../../../components/admin/Drafts";
import MediaLibrary from "../../../components/admin/MediaLibrary";

// c89ovt/yh789rf/admin


const ContentPage = () => {
    const [page, setPage] = useState(0);
    return (
            <div className=" m-12 flex-col w-full ">          
                <div className="w-[1120px] h-[85px] py-5 justify-between items-center inline-flex">
                    <div className="text-sky-950 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">Content Management</div>
                    <Link href="/c89ovt/yh789rf/admin/contentform"  className="px-[30px] py-2.5 cursor-pointer bg-green-500 rounded-[20px] justify-start items-center gap-2.5 flex">
                        <div className="text-sky-950 text-base font-medium font-['Montserrat'] leading-[25px] tracking-tight">New Post</div>
                    </Link>
                </div>




                {/* Nav */}
                <div className="w-full mt-11 h-[90px] pr-[50px] pt-[30px] border-b border-neutral-400 justify-start items-start gap-[80px] inline-flex">
                <div
                  onClick={() => {
                    setPage(0);
                  }}
                  className={`flex cursor-pointer gap-[10px] self-stretch text-[16px] font-montserrat font-normal justify-center items-center ${page == 0 ? "text-[#2ECC71]  border-b-[3px] border-b-[#2ECC71] " : "text-[#001F3F]"}`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.5117 4.15199L14.6798 2.98386C15.325 2.33871 16.371 2.33871 17.0162 2.98386C17.6612 3.629 17.6612 4.67498 17.0162 5.32012L15.848 6.48826M13.5117 4.15199L9.15016 8.51358C8.2791 9.38467 7.84354 9.82016 7.54696 10.3509C7.25038 10.8817 6.95199 12.1349 6.66666 13.3333C7.86506 13.048 9.11832 12.7496 9.64907 12.453C10.1798 12.1564 10.6153 11.7209 11.4864 10.8498L15.848 6.48826M13.5117 4.15199L15.848 6.48826"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C17.5 13.5355 17.5 15.3033 16.4017 16.4017C15.3033 17.5 13.5355 17.5 10 17.5C6.46447 17.5 4.6967 17.5 3.59835 16.4017C2.5 15.3033 2.5 13.5355 2.5 10C2.5 6.46447 2.5 4.6967 3.59835 3.59835C4.6967 2.5 6.46447 2.5 10 2.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span>Posts</span>
                </div>
                <div
                  onClick={() => {
                    setPage(1);
                  }}
                  className={`flex cursor-pointer gap-[10px] self-stretch text-[16px] font-montserrat font-normal justify-center items-center ${page == 1 ? "text-[#2ECC71]  border-b-[2px] border-b-[#2ECC71] " : "text-[#001F3F]"}`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.66666 15C1.66666 13.7163 1.66666 13.0744 1.9556 12.6029C2.11727 12.339 2.3391 12.1172 2.60293 11.9555C3.07444 11.6666 3.71629 11.6666 4.99999 11.6666C6.28369 11.6666 6.92554 11.6666 7.39705 11.9555C7.66088 12.1172 7.88271 12.339 8.04438 12.6029C8.33332 13.0744 8.33332 13.7163 8.33332 15C8.33332 16.2836 8.33332 16.9255 8.04438 17.397C7.88271 17.6609 7.66088 17.8827 7.39705 18.0444C6.92554 18.3333 6.28369 18.3333 4.99999 18.3333C3.71629 18.3333 3.07444 18.3333 2.60293 18.0444C2.3391 17.8827 2.11727 17.6609 1.9556 17.397C1.66666 16.9255 1.66666 16.2836 1.66666 15Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.6667 15C11.6667 13.7163 11.6667 13.0744 11.9556 12.6029C12.1172 12.339 12.3391 12.1172 12.6029 11.9555C13.0744 11.6666 13.7163 11.6666 15 11.6666C16.2837 11.6666 16.9256 11.6666 17.3971 11.9555C17.6609 12.1172 17.8827 12.339 18.0444 12.6029C18.3333 13.0744 18.3333 13.7163 18.3333 15C18.3333 16.2836 18.3333 16.9255 18.0444 17.397C17.8827 17.6609 17.6609 17.8827 17.3971 18.0444C16.9256 18.3333 16.2837 18.3333 15 18.3333C13.7163 18.3333 13.0744 18.3333 12.6029 18.0444C12.3391 17.8827 12.1172 17.6609 11.9556 17.397C11.6667 16.9255 11.6667 16.2836 11.6667 15Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M1.66666 4.99996C1.66666 3.71626 1.66666 3.07441 1.9556 2.6029C2.11727 2.33907 2.3391 2.11724 2.60293 1.95557C3.07444 1.66663 3.71629 1.66663 4.99999 1.66663C6.28369 1.66663 6.92554 1.66663 7.39705 1.95557C7.66088 2.11724 7.88271 2.33907 8.04438 2.6029C8.33332 3.07441 8.33332 3.71626 8.33332 4.99996C8.33332 6.28366 8.33332 6.92551 8.04438 7.39702C7.88271 7.66085 7.66088 7.88268 7.39705 8.04435C6.92554 8.33329 6.28369 8.33329 4.99999 8.33329C3.71629 8.33329 3.07444 8.33329 2.60293 8.04435C2.3391 7.88268 2.11727 7.66085 1.9556 7.39702C1.66666 6.92551 1.66666 6.28366 1.66666 4.99996Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.6667 4.99996C11.6667 3.71626 11.6667 3.07441 11.9556 2.6029C12.1172 2.33907 12.3391 2.11724 12.6029 1.95557C13.0744 1.66663 13.7163 1.66663 15 1.66663C16.2837 1.66663 16.9256 1.66663 17.3971 1.95557C17.6609 2.11724 17.8827 2.33907 18.0444 2.6029C18.3333 3.07441 18.3333 3.71626 18.3333 4.99996C18.3333 6.28366 18.3333 6.92551 18.0444 7.39702C17.8827 7.66085 17.6609 7.88268 17.3971 8.04435C16.9256 8.33329 16.2837 8.33329 15 8.33329C13.7163 8.33329 13.0744 8.33329 12.6029 8.04435C12.3391 7.88268 12.1172 7.66085 11.9556 7.39702C11.6667 6.92551 11.6667 6.28366 11.6667 4.99996Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>

                  <span>Drafts</span>
                </div>
                <div
                  onClick={() => {
                    setPage(2);
                  }}
                  className={`flex cursor-pointer gap-[10px] self-stretch text-[16px] font-montserrat font-normal justify-center items-center ${page == 2 ? "text-[#2ECC71]  border-b-[2px] border-b-[#2ECC71] " : "text-[#001F3F]"}`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 12.5C2.5 10.1592 2.5 8.98879 3.06177 8.14806C3.30497 7.78409 3.61747 7.47159 3.98143 7.22839C4.82217 6.66663 5.99257 6.66663 8.33333 6.66663H11.6667C14.0074 6.66663 15.1778 6.66663 16.0186 7.22839C16.3825 7.47159 16.695 7.78409 16.9382 8.14806C17.5 8.98879 17.5 10.1592 17.5 12.5C17.5 14.8407 17.5 16.0111 16.9382 16.8519C16.695 17.2158 16.3825 17.5283 16.0186 17.7715C15.1778 18.3333 14.0074 18.3333 11.6667 18.3333H8.33333C5.99257 18.3333 4.82217 18.3333 3.98143 17.7715C3.61747 17.5283 3.30497 17.2158 3.06177 16.8519C2.5 16.0111 2.5 14.8407 2.5 12.5Z"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.4167 13.75C10.4167 14.4404 9.857 15 9.16666 15C8.47633 15 7.91666 14.4404 7.91666 13.75C7.91666 13.0597 8.47633 12.5 9.16666 12.5C9.857 12.5 10.4167 13.0597 10.4167 13.75ZM10.4167 13.75V9.58337C10.4167 9.58337 10.75 11.0278 12.0833 11.25"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.8333 6.66663C15.8184 5.63348 15.7417 5.04773 15.3485 4.65478C14.8601 4.16663 14.074 4.16663 12.5018 4.16663H7.49819C5.92598 4.16663 5.13988 4.16663 4.65146 4.65478C4.2583 5.04773 4.18161 5.63348 4.16666 6.66663"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.1667 4.16663C14.1667 3.39006 14.1667 3.00178 14.0398 2.69548C13.8707 2.28711 13.5462 1.96265 13.1378 1.79349C12.8315 1.66663 12.4433 1.66663 11.6667 1.66663H8.33334C7.55677 1.66663 7.16849 1.66663 6.86219 1.79349C6.45382 1.96265 6.12936 2.28711 5.9602 2.69548C5.83334 3.00178 5.83334 3.39006 5.83334 4.16663"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span>Media Library</span>
                </div>
            </div>


            {/* content */}
            {page == 0 && <Posts/>}
            {page == 1 && <Drafts/>}
            {page == 2 && <MediaLibrary/>}


            

        </div>
    )
};

export default ContentPage;