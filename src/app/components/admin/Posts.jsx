"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import { db } from '../../../../firebase/config';
import { collection, query, getDocs, where, orderBy } from "firebase/firestore";
export default function Posts() {
    const [posts, setPosts] = useState([]);
    const PLACEHOLDER = "/article1.png "
    useEffect(() => {
        const fetchPosts = async () => {
          const q = query(collection(db, "posts"), where("status", "==", "published"), orderBy("createdAt", "desc"));
          const querySnapshot = await getDocs(q);
          const postsData = querySnapshot.docs.map(doc => doc.data());
          setPosts(postsData);
          console.log(postsData);
        };
    
        fetchPosts();
      }, []);
    

  return (
    <div className=" mt-12 flex-wrap overflow-auto justify-between ">
        {posts.length == 0 && <div>
            <h1>No posts...</h1>
            </div>}

    {posts.map((post, index) => (
            <div key={index} className="w-[400px] h-auto mb-6 mr-8 flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
              <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">
                {post.title}
              </div>
              <div className="justify-start items-center gap-2.5 flex">
                <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="product-loading">
                    <path id="Vector" d="M3.75 5.375L4.29086 4.22116C4.71034 3.32629 4.92007 2.87885 5.34519 2.62693C5.77031 2.375 6.31563 2.375 7.40625 2.375H11.3438C12.4344 2.375 12.9797 2.375 13.4048 2.62693C13.8299 2.87885 14.0397 3.32629 14.4591 4.22116L15 5.375" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round"/>
                    <path id="Vector_2" d="M3.75 8.57397V5.375H15V8.57397C15 10.9551 15 12.1456 14.2678 12.8853C13.5356 13.625 12.357 13.625 9.99997 13.625H8.75003C6.39298 13.625 5.21446 13.625 4.48223 12.8853C3.75 12.1456 3.75 10.9551 3.75 8.57397Z" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_3" d="M8.29688 6.09375H10.4531" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round"/>
                    </g>
                </svg>
                </div>
              </div>
            </div>
            <Image
              width={400}
              height={220.16}
              className="w-80 h-44 rounded-[20px]"
              src={post.img || PLACEHOLDER}
              alt="text_logo"
            />
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
                <div className="text-neutral-400 text-xs font-medium font-['Montserrat'] tracking-tight">
                  {post.createdAt}
                </div>
              </div>
              <div className="p-2.5 bg-emerald-50 rounded-[40px] justify-center items-center gap-[5px] flex">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="tick-02">
                    <path
                      id="Vector"
                      d="M2.91667 8.32812L4.95834 10.3698L11.0833 3.95312"
                      stroke="#11CA60"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <div className="text-green-500 text-xs font-normal font-['Montserrat'] tracking-tight">
                  Published
                </div>
              </div>
              <div className="justify-start items-center gap-2.5 flex">
                <div className="p-2.5 bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="more-horizontal">
                    <path id="Vector" d="M8.99693 9.16138H9.00368" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_2" d="M13.4999 9.16138H13.5066" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_3" d="M4.49986 9.16138H4.50659" stroke="#001F3F" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
                </div>
              </div>
            </div>
          </div>
    ))}
      
    </div>
  );
}
