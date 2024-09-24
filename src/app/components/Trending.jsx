/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState, useEffect } from "react";
import { db } from '../../../firebase/config';
import { collection, query,  limit, getDocs, orderBy } from "firebase/firestore";
import Link from "next/link";
function Trending() {
  const [posts, setPosts] = useState([]);
  const PLACEHOLDER = 'Images/categories.png'
  const getExcerpt = (desc) => {
    const maxLength = 150; // Define the max length for the excerpt
    if (desc.length <= maxLength) {
      return desc;
    }
    return desc.substring(0, maxLength) + '...';
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("views", "desc"), limit(6));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map(doc => doc.data());
      setPosts(postsData);
      console.log(postsData);
    };

    fetchPosts();
  }, []);
  return (
    <>
      {/* Large Screen */}
      <div className="  pb-[40px] 14inch:w-[1220px] 3xS:w-[74%] 14inch:flex 3xxS:hidden justify-start  items-start ">
        <div className="  h-fit relative overflow-x-scroll  items-center gap-[40px] inline-flex">
          {posts.map((post, index) => (
            <Link href={`/posts/${post.slug}`} key={index}  className="flex-col w-[496px] rounded-[20px] h-fit px-6 pt-6 pb-8 bg-zinc-200 shadow justify-between items-start gap-[20px] flex">
            <img alt="Post" className="w-full rounded-[20px] h-56 object-cover " src={post.img || PLACEHOLDER }  />
            <div className=" gap-[12px] w-[400px] flex-col justify-between items-start flex">
              <div className="self-stretch text-sky-950 text-sm font-normal font-['Montserrat'] leading-tight">{post.category}</div>
              <div className=" flex flex-col justify-between items-start gap-[12px]">
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <div className=" text-zinc-800 text-[24px] font-semibold font-['Roboto'] leading-[32px]">{post.title}</div>
                  <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33325 21L17.3333 11M17.3333 11H7.33325M17.3333 11V21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className="self-stretch text-neutral-400 text-sm font-normal font-['Montserrat'] leading-normal">{getExcerpt(post.desc)}</div>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
      {/* Small Screen */}
      <div className="w-full">
        <div className=" 3xxS:w-[300px] 4xxS:w-[380px] 5xxS:w-[450px] 6xxS:w-[510px] 7xxS:w-[650px] 820xxS:w-[750px] 10inch:w-[960px] 1halfxS:w-[1050px] 13inch:w-[1150px] overflow-x-scroll 14inch:hidden 3xxS:flex justify-start  items-start ">
          <div className="w-full    h-fit relative   items-center gap-[70px] flex">
            <div className="flex-col w-[496px] rounded-[20px] h-fit px-6 pt-6 pb-8 bg-zinc-200 shadow justify-between items-start gap-[20px] flex">
              <img alt="Post" className="w-full rounded-[20px]" src={'Images/categories.png'} />
              <div className=" gap-[12px] w-[400px] flex-col justify-between items-start flex">
                <div className="self-stretch text-sky-950 text-sm font-normal font-['Montserrat'] leading-tight">Design</div>
                <div className=" flex flex-col justify-between items-start gap-[12px]">
                  <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className=" text-zinc-800 text-[24px] font-semibold font-['Roboto'] leading-[32px]">UX review presentations</div>
                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33325 21L17.3333 11M17.3333 11H7.33325M17.3333 11V21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className="self-stretch text-neutral-400 text-sm font-normal font-['Montserrat'] leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                </div>{" "}
              </div>
              rounded-[20px]{" "}
            </div>
            <div className="flex-col w-[496px] rounded-[20px] h-fit px-6 pt-6 pb-8 bg-zinc-200 shadow justify-between items-start gap-[20px] flex">
              <img alt="Post" className="w-full rounded-[20px]" src={'Images/categories.png'} />
              <div className=" gap-[12px] w-[400px] flex-col justify-between items-start flex">
                <div className="self-stretch text-sky-950 text-sm font-normal font-['Montserrat'] leading-tight">Design</div>
                <div className=" flex flex-col justify-between items-start gap-[12px]">
                  <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className=" text-zinc-800 text-[24px] font-semibold font-['Roboto'] leading-[32px]">UX review presentations</div>
                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33325 21L17.3333 11M17.3333 11H7.33325M17.3333 11V21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className="self-stretch text-neutral-400 text-sm font-normal font-['Montserrat'] leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                </div>{" "}
              </div>
              rounded-[20px]{" "}
            </div>
            <div className="flex-col w-[496px] rounded-[20px] h-fit px-6 pt-6 pb-8 bg-zinc-200 shadow justify-between items-start gap-[20px] flex">
              <img alt="Post" className="w-full rounded-[20px]" src={'Images/categories.png'} />
              <div className=" gap-[12px] w-[400px] flex-col justify-between items-start flex">
                <div className="self-stretch text-sky-950 text-sm font-normal font-['Montserrat'] leading-tight">Design</div>
                <div className=" flex flex-col justify-between items-start gap-[12px]">
                  <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className=" text-zinc-800 text-[24px] font-semibold font-['Roboto'] leading-[32px]">UX review presentations</div>
                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33325 21L17.3333 11M17.3333 11H7.33325M17.3333 11V21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className="self-stretch text-neutral-400 text-sm font-normal font-['Montserrat'] leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="flex-col w-[496px] rounded-[20px] h-fit px-6 pt-6 pb-8 bg-zinc-200 shadow justify-between items-start gap-[20px] flex">
              <img alt="Post" className="w-full rounded-[20px]" src={'Images/categories.png'} />
              <div className=" gap-[12px] w-[400px] flex-col justify-between items-start flex">
                <div className="self-stretch text-sky-950 text-sm font-normal font-['Montserrat'] leading-tight">Design</div>
                <div className=" flex flex-col justify-between items-start gap-[12px]">
                  <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className=" text-zinc-800 text-[24px] font-semibold font-['Roboto'] leading-[32px]">UX review presentations</div>
                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33325 21L17.3333 11M17.3333 11H7.33325M17.3333 11V21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className="self-stretch text-neutral-400 text-sm font-normal font-['Montserrat'] leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="flex-col w-[496px] rounded-[20px] h-fit px-6 pt-6 pb-8 bg-zinc-200 shadow justify-between items-start gap-[20px] flex">
              <img alt="Post" className="w-full rounded-[20px]" src={'Images/categories.png'} />
              <div className=" gap-[12px] w-[400px] flex-col justify-between items-start flex">
                <div className="self-stretch text-sky-950 text-sm font-normal font-['Montserrat'] leading-tight">Design</div>
                <div className=" flex flex-col justify-between items-start gap-[12px]">
                  <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className=" text-zinc-800 text-[24px] font-semibold font-['Roboto'] leading-[32px]">UX review presentations</div>
                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33325 21L17.3333 11M17.3333 11H7.33325M17.3333 11V21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className="self-stretch text-neutral-400 text-sm font-normal font-['Montserrat'] leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trending;
