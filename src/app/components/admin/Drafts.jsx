"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "../../../../firebase/config";
import { collection, query, getDocs, where, orderBy } from "firebase/firestore";

export default function Drafts() {
  const [posts, setPosts] = useState([]);
  const PLACEHOLDER = "/article1.png ";
  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(
        collection(db, "posts"),
        where("status", "==", "draft"),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map((doc) => doc.data());
      setPosts(postsData);
      console.log(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div className=" mt-12 flex-wrap overflow-auto justify-between ">
      {posts.length == 0 && (
        <div>
          <h1>No posts...</h1>
        </div>
      )}

      {posts.map((post, index) => (
        <div
          key={index}
          className="w-[400px] h-auto mb-6 mr-8 flex-col justify-start items-start gap-5 inline-flex"
        >
          <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
            <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">
              {post.title}
            </div>
            <div className="justify-start items-center gap-2.5 flex">
              <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="product-loading">
                    <path
                      id="Vector"
                      d="M3.75 5.375L4.29086 4.22116C4.71034 3.32629 4.92007 2.87885 5.34519 2.62693C5.77031 2.375 6.31563 2.375 7.40625 2.375H11.3438C12.4344 2.375 12.9797 2.375 13.4048 2.62693C13.8299 2.87885 14.0397 3.32629 14.4591 4.22116L15 5.375"
                      stroke="#001F3F"
                      stroke-width="1.125"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector_2"
                      d="M3.75 8.57397V5.375H15V8.57397C15 10.9551 15 12.1456 14.2678 12.8853C13.5356 13.625 12.357 13.625 9.99997 13.625H8.75003C6.39298 13.625 5.21446 13.625 4.48223 12.8853C3.75 12.1456 3.75 10.9551 3.75 8.57397Z"
                      stroke="#001F3F"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M8.29688 6.09375H10.4531"
                      stroke="#001F3F"
                      stroke-width="1.125"
                      stroke-linecap="round"
                    />
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
            <div className="p-2.5 bg-[#f9f0e2] rounded-[40px] justify-center items-center gap-[5px] flex">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="time-quarter">
                  <path
                    id="Vector"
                    d="M1.16667 8.91138C1.24995 9.16069 1.34764 9.40318 1.4587 9.63774M2.40653 11.0967C2.59093 11.311 2.78892 11.5128 2.99914 11.7005M5.25001 12.9947C4.98881 12.9105 4.73493 12.8094 4.48958 12.6927"
                    stroke="#CA8011"
                    stroke-width="0.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M7 8.03638C7.48323 8.03638 7.875 7.64461 7.875 7.16138C7.875 6.67814 7.48323 6.28638 7 6.28638C6.51677 6.28638 6.125 6.67814 6.125 7.16138M7 8.03638C6.51677 8.03638 6.125 7.64461 6.125 7.16138M7 8.03638V9.49471M6.125 7.16138H3.5"
                    stroke="#CA8011"
                    stroke-width="0.875"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector_3"
                    d="M7.00001 12.9948C10.2216 12.9948 12.8333 10.3831 12.8333 7.16146C12.8333 3.9398 10.2216 1.32812 7.00001 1.32812C3.77834 1.32812 1.16667 3.9398 1.16667 7.16146"
                    stroke="#CA8011"
                    stroke-width="0.875"
                    stroke-linecap="round"
                  />
                </g>
              </svg>

              <div className="text-[#ca8011]  text-xs font-normal font-['Montserrat'] tracking-tight">
                Pending
              </div>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
              <div className="p-2.5 bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="more-horizontal">
                    <path
                      id="Vector"
                      d="M8.99693 9.16138H9.00368"
                      stroke="#001F3F"
                      stroke-width="1.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M13.4999 9.16138H13.5066"
                      stroke="#001F3F"
                      stroke-width="1.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M4.49986 9.16138H4.50659"
                      stroke="#001F3F"
                      stroke-width="1.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
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
