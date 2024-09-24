"use client";
import Image from "next/image";
import Logo from '../../../../../public/logo.svg';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from '../../../../../firebase/config'
import { collection, query,  limit, getDocs, orderBy } from "firebase/firestore";
import Link from "next/link";

const Dashboard = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("views", "desc"));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map(doc => doc.data());
      setPosts(postsData);
      console.log(postsData);
    };

    fetchPosts();
  }, []);


    return(
        <div className=" m-12 flex-col w-full ">
        <div className="text-sky-950 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">Dashboard</div>
        

        {/* <div className="flex px-[10px] flex-grow justify-between items-center gap-[10px] mt-16">
          <div className="w-[267.50px] flex-1  h-[117px] px-5 py-[21px] rounded-[10px] shadow border border-neutral-200 justify-between items-center inline-flex">
            <div className="py-[5px] flex-col justify-start items-start gap-5 inline-flex">
              <div className="text-neutral-400 text-sm font-medium font-['Montserrat'] tracking-tight">Total Visitors</div>
              <div className="text-zinc-800 text-2xl font-medium font-['Roboto'] tracking-tight">45, 346</div>
            </div>
            <div className="p-2.5 bg-zinc-200 rounded-[100px] justify-center items-center gap-2.5 flex">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.98131 13.4013C4.80234 14.1033 1.71114 15.5367 3.59389 17.3305C4.51359 18.2066 5.53791 18.8333 6.82573 18.8333H14.1743C15.4621 18.8333 16.4864 18.2066 17.4061 17.3305C19.2888 15.5367 16.1977 14.1033 15.0187 13.4013C12.254 11.7551 8.74599 11.7551 5.98131 13.4013Z"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.25 5.91666C14.25 7.98772 12.5711 9.66666 10.5 9.66666C8.42893 9.66666 6.75 7.98772 6.75 5.91666C6.75 3.84559 8.42893 2.16666 10.5 2.16666C12.5711 2.16666 14.25 3.84559 14.25 5.91666Z"
                  stroke="#333333"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
          <div className="w-[267.50px] flex-1  h-[117px] px-5 py-[21px] rounded-[10px] shadow border border-neutral-200 justify-between items-center inline-flex">
            <div className="py-[5px] flex-col justify-start items-start gap-5 inline-flex">
              <div className="text-neutral-400 text-sm font-medium font-['Montserrat'] tracking-tight">Total Comments</div>
              <div className="text-zinc-800 text-2xl font-medium font-['Roboto'] tracking-tight">5, 346</div>
            </div>
            <div className="p-2.5 bg-zinc-200 rounded-[100px] justify-center items-center gap-2.5 flex">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66666 11.75H13.3333M6.66666 7.58334H10" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M5.08234 16.3333C3.99891 16.2268 3.18729 15.9013 2.64297 15.357C1.66666 14.3808 1.66666 12.8093 1.66666 9.66668V9.25001C1.66666 6.10731 1.66666 4.53597 2.64297 3.55965C3.61929 2.58334 5.19063 2.58334 8.33333 2.58334H11.6667C14.8093 2.58334 16.3807 2.58334 17.357 3.55965C18.3333 4.53597 18.3333 6.10731 18.3333 9.25001V9.66668C18.3333 12.8093 18.3333 14.3808 17.357 15.357C16.3807 16.3333 14.8093 16.3333 11.6667 16.3333C11.1996 16.3438 10.8276 16.3793 10.4622 16.4625C9.4635 16.6924 8.53875 17.2034 7.62489 17.6491C6.32274 18.284 5.67166 18.6015 5.26307 18.3043C4.48141 17.7221 5.24545 15.9183 5.41666 15.0833"
                  stroke="#333333"
                  stroke-width="1.25"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="w-[267.50px] flex-1  h-[117px] px-5 py-[21px] rounded-[10px] shadow border border-neutral-200 justify-between items-center inline-flex">
            <div className="py-[5px] flex-col justify-start items-start gap-5 inline-flex">
              <div className="text-neutral-400 text-sm font-medium font-['Montserrat'] tracking-tight">Returning Visitors</div>
              <div className="text-zinc-800 text-2xl font-medium font-['Roboto'] tracking-tight">15, 346</div>
            </div>
            <div className="p-2.5 bg-zinc-200 rounded-[100px] justify-center items-center gap-2.5 flex">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.98131 13.4013C4.80234 14.1033 1.71114 15.5367 3.59389 17.3305C4.51359 18.2066 5.53791 18.8333 6.82573 18.8333H14.1743C15.4621 18.8333 16.4864 18.2066 17.4061 17.3305C19.2888 15.5367 16.1977 14.1033 15.0187 13.4013C12.254 11.7551 8.74599 11.7551 5.98131 13.4013Z"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.25 5.91666C14.25 7.98772 12.5711 9.66666 10.5 9.66666C8.42893 9.66666 6.75 7.98772 6.75 5.91666C6.75 3.84559 8.42893 2.16666 10.5 2.16666C12.5711 2.16666 14.25 3.84559 14.25 5.91666Z"
                  stroke="#333333"
                  stroke-width="1.5"
                />
              </svg>
            </div>{" "}
          </div>
          <div className="w-[267.50px] flex-1 h-[117px] px-5 py-[21px] rounded-[10px] shadow border border-neutral-200 justify-between items-center inline-flex">
            <div className="py-[5px] flex-col justify-start items-start gap-5 inline-flex">
              <div className="text-neutral-400 text-sm font-medium font-['Montserrat'] tracking-tight">New Visitors</div>
              <div className="text-zinc-800 text-2xl font-medium font-['Roboto'] tracking-tight">5, 346</div>
            </div>
            <div className="p-2.5 bg-zinc-200 rounded-[100px] justify-center items-center gap-2.5 flex">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.98131 13.4013C4.80234 14.1033 1.71114 15.5367 3.59389 17.3305C4.51359 18.2066 5.53791 18.8333 6.82573 18.8333H14.1743C15.4621 18.8333 16.4864 18.2066 17.4061 17.3305C19.2888 15.5367 16.1977 14.1033 15.0187 13.4013C12.254 11.7551 8.74599 11.7551 5.98131 13.4013Z"
                  stroke="#333333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.25 5.91666C14.25 7.98772 12.5711 9.66666 10.5 9.66666C8.42893 9.66666 6.75 7.98772 6.75 5.91666C6.75 3.84559 8.42893 2.16666 10.5 2.16666C12.5711 2.16666 14.25 3.84559 14.25 5.91666Z"
                  stroke="#333333"
                  stroke-width="1.5"
                />
              </svg>
            </div>{" "}
          </div>
        </div> */}
        {/* Content */}
        
        <div className="w-full  h-fit p-[24px] shadow border border-gray-200  mt-10 gap-[16px]  rounded-lg  flex-col justify-start items-start  inline-flex">
          <div className="grow shrink justify-start items-start  inline-flex basis-0 text-sky-950 text-lg font-semibold font-['Montserrat'] leading-relaxed">Top Post</div>
          <div className="self-stretch h-px bg-neutral-200" />
          <div className=" flex justify-between items-center">
            <div className="flex  w-[150px] justify-between items-center flex-col">
              <div className="self-stretch h-11 text-neutral-500 text-xs font-normal font-['Montserrat'] leading-[18px] border-b-[#E7E7E7] border-solid  border-b-[1px] px-5 py-3 justify-center items-center  inline-flex">Rank</div>
              {posts.map((post, index)=> (
                <div key={index} className="self-stretch h-[72px] text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px] border-b-[#E7E7E7] border-solid  border-b-[1px] px-5 py-3 justify-center items-center  inline-flex">{index+1}</div>  
              ))}
            </div>
            <div className="flex justify-between items-center flex-col">
              <div className="self-stretch h-11 text-neutral-500 text-xs font-normal font-['Montserrat'] leading-[18px] border-b-[#E7E7E7] border-solid  border-b-[1px] px-5 py-3 justify-start items-start  inline-flex">Title</div>
              {posts.map((post, index)=> (

                <div key={index} className="self-stretch h-[72px] text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px] border-b-[#E7E7E7] border-solid  border-b-[1px] px-5 py-3 justify-start items-start  inline-flex">
               {post.title}
                </div>

              ))}
            </div>

            <div className="flex w-[200px]  justify-between items-center flex-col">
              <div className="self-stretch h-11 text-neutral-500 text-xs font-normal font-['Montserrat'] leading-[18px] border-b-[#E7E7E7] border-solid  border-b-[1px] px-5 py-3 justify-center items-center  inline-flex">Views</div>
          
              {posts.map((post, index)=> (
                <div key={index} className={`self-stretch h-[72px] ${post.views > 100 ? 'text-[#10B255]' : 'text-[#b21010]'} text-xs font-normal font-['Montserrat'] leading-[18px] border-b-[#E7E7E7] border-solid  border-b-[1px] px-5 py-3 justify-center item-center  flex`}>
                <div className="flex justify-between items-center">
                  {" "}
                  {post.views > 100 ? (
                     <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9116 9.39407L12.6678 3.4543L6.72613 4.20862L8.84745 6.32995L3.33256 11.8448L4.27537 12.7876L9.79025 7.27275L11.9116 9.39407Z" fill="#10B255" />
                  </svg> 
                  ):(
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.08843 6.84784L3.33221 12.7876L9.27387 12.0333L7.15255 9.91197L12.6674 4.39709L11.7246 3.45428L6.20975 8.96916L4.08843 6.84784Z" fill="#B21010" />
                  </svg>
                  )
                  
                  }
                 {" "}
                  {post.views}
                </div>
              </div>
              ))}
              
            </div>
            <div className="flex  justify-between w-[200px] items-center flex-col">
              <div className="self-stretch h-11 text-neutral-500 text-xs font-normal font-['Montserrat'] leading-[18px] border-b-[#E7E7E7] border-solid  border-b-[1px] px-5 py-3 justify-center items-center  inline-flex">Comments</div>
              {posts.map((post, index) => (
                 <div key={index} className="self-stretch h-[72px] text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px] border-b-[#E7E7E7] border-solid  border-b-[1px] px-5 py-3 justify-center items-center  inline-flex">{post.commentsCount}</div>
              ) )}
            </div>
          </div>
        </div>

        
    </div>
    )
};


export default Dashboard;