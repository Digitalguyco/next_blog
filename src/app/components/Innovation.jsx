/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { db } from '../../../firebase/config';
import { collection, query,  limit, getDocs, orderBy, where} from "firebase/firestore";
function Innovation() {
  const [posts, setPosts] = useState([]);
  const PLACEHOLDER = 'Images/innovation2.png'
  // Function to extract an excerpt from the full description
  const getExcerpt = (desc) => {
    const maxLength = 150; // Define the max length for the excerpt
    if (desc.length <= maxLength) {
      return desc;
    }
    return desc.substring(0, maxLength) + '...';
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"),  where("category", '==', 'innovation'), orderBy("createdAt", "desc"),limit(6));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map(doc => doc.data());
      setPosts(postsData);
      console.log(postsData);
    };

    fetchPosts();
  }, []);
  return (
    <>
      {/* Large Screens */}
      <div className="flex w-full items-center justify-center mt-[120px]">
        <div className=" 13inch:flex 3xxS:hidden flex-col 13inch:w-[85%] justify-between  gap-[70px] items-start">
          <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">Innovate Today, Shape Tomorrow</div>
          <div className="flex w-full flex-grow flex-col justify-between items-start gap-[40px]">
          {posts.map((post, index) => (
            <Link key={index} href={`/posts/${post.slug}`}>
              <div className="flex  13inch:gap-[70px] 3xS:space-x-96 flex-1 justify-between items-center">
                <div className="flex cursor-pointer  flex-col items-start gap-[10px] ">
                  <div className="p-2.5 bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center  text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight flex">{post.readTime}</div>

                  <div className="text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">{post.title}</div>
                  <div className="w-[757px]  text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">
                  {getExcerpt(post.desc)}
                  </div>
                  <div className=" flex w-full gap-[20px] justify-start items-center">
                    <div className="w-fit p-[10px] text-zinc-800 text-sm font-medium font-montserrat tracking-tight">{post.createdAt}</div>
                    <div className="text-sky-950 text-sm font-normal font-montserrat tracking-tight p-[10px] bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10.125H12M6 6.375H9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M4.57411 14.25C3.59902 14.1541 2.86856 13.8612 2.37868 13.3713C1.5 12.4927 1.5 11.0784 1.5 8.25V7.875C1.5 5.04657 1.5 3.63236 2.37868 2.75368C3.25736 1.875 4.67157 1.875 7.5 1.875H10.5C13.3284 1.875 14.7427 1.875 15.6213 2.75368C16.5 3.63236 16.5 5.04657 16.5 7.875V8.25C16.5 11.0784 16.5 12.4927 15.6213 13.3713C14.7427 14.25 13.3284 14.25 10.5 14.25C10.0796 14.2594 9.74482 14.2913 9.41595 14.3663C8.51715 14.5732 7.68487 15.0331 6.8624 15.4342C5.69047 16.0056 5.1045 16.2914 4.73677 16.0238C4.03327 15.4999 4.7209 13.8764 4.875 13.125"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                        />
                      </svg>
                      {post.commentsCount} Comments
                    </div>
                    <div className="w-fit p-[10px]">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 4.5H16.5M13.5 1.5V7.5" stroke="#001F3F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M4.57411 14.625C3.59903 14.5291 2.86856 14.2362 2.37868 13.7463C1.5 12.8677 1.5 11.4534 1.5 8.625V8.25C1.5 5.42157 1.5 4.00736 2.37868 3.12868C3.25736 2.25 4.67157 2.25 7.5 2.25H8.625M4.875 13.5C4.72091 14.2514 4.03327 15.8749 4.73677 16.3988C5.1045 16.6664 5.69047 16.3806 6.8624 15.8092C7.68487 15.4081 8.51715 14.9482 9.41595 14.7413C9.74482 14.6663 10.0796 14.6344 10.5 14.625C13.3284 14.625 14.7427 14.625 15.6213 13.7463C16.4602 12.9073 16.4982 11.5802 16.4999 9"
                          stroke="#001F3F"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-full  ">
                  <img className="h-44 w-full rounded-[20px]" src={post.img || PLACEHOLDER }  alt="innovation" />
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className=" 13inch:hidden 3xxS:flex flex-col w-[90%] justify-between mt-[80px] gap-[70px] items-start">
        <div className="text-sky-950 text-[34px] font-semibold leading-[55px] font-['Montserrat'] tracking-tight">Innovate Today, Shape Tomorrow</div>
        <Link onClick={() => window.scrollTo(0, 0)} href="/post">
          <div className="flex w-full flex-col justify-between items-start gap-[20px]">
            <div className="p-2.5 bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center  text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight flex">5 min read</div>
            <img className="w-full" src={'Images/innovation1.png'} alt="innovation" />
            <div className="text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">QuantumTech Solutions</div>
            <div className="w-full text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">
              QuantumTech Solutions, a trailblazer in the realm of quantum computing, invites you to delve into the intricate world where classical computing limitations cease to exist. Explore the quantum realm, where computing takes a quantum leap
              into unprecedented possibilities, reshaping the future of technology.
            </div>
            <div className=" flex w-full gap-[20px] justify-start items-center">
              <div className="w-fit p-[10px] text-zinc-800 text-sm font-medium font-montserrat tracking-tight">Jan 10, 2024</div>
              <div className=" cursor-pointer text-sky-950 text-sm font-normal font-montserrat tracking-tight p-[10px] bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10.125H12M6 6.375H9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M4.57411 14.25C3.59902 14.1541 2.86856 13.8612 2.37868 13.3713C1.5 12.4927 1.5 11.0784 1.5 8.25V7.875C1.5 5.04657 1.5 3.63236 2.37868 2.75368C3.25736 1.875 4.67157 1.875 7.5 1.875H10.5C13.3284 1.875 14.7427 1.875 15.6213 2.75368C16.5 3.63236 16.5 5.04657 16.5 7.875V8.25C16.5 11.0784 16.5 12.4927 15.6213 13.3713C14.7427 14.25 13.3284 14.25 10.5 14.25C10.0796 14.2594 9.74482 14.2913 9.41595 14.3663C8.51715 14.5732 7.68487 15.0331 6.8624 15.4342C5.69047 16.0056 5.1045 16.2914 4.73677 16.0238C4.03327 15.4999 4.7209 13.8764 4.875 13.125"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
                20 Comments
              </div>
              <div className="w-fit p-[10px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 4.5H16.5M13.5 1.5V7.5" stroke="#001F3F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M4.57411 14.625C3.59903 14.5291 2.86856 14.2362 2.37868 13.7463C1.5 12.8677 1.5 11.4534 1.5 8.625V8.25C1.5 5.42157 1.5 4.00736 2.37868 3.12868C3.25736 2.25 4.67157 2.25 7.5 2.25H8.625M4.875 13.5C4.72091 14.2514 4.03327 15.8749 4.73677 16.3988C5.1045 16.6664 5.69047 16.3806 6.8624 15.8092C7.68487 15.4081 8.51715 14.9482 9.41595 14.7413C9.74482 14.6663 10.0796 14.6344 10.5 14.625C13.3284 14.625 14.7427 14.625 15.6213 13.7463C16.4602 12.9073 16.4982 11.5802 16.4999 9"
                    stroke="#001F3F"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <Link onClick={() => window.scrollTo(0, 0)} href="/post">
          <div className="flex w-full flex-col justify-between items-start gap-[20px]">
            <div className="p-2.5 bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center  text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight flex">5 min read</div>
            <img className="w-full" src={'Images/innovation2.png'} alt="innovation" />
            <div className="text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">SpaceFront Explorations</div>
            <div className="w-full text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">
              SpaceFront Explorations transcends the earthly bounds, venturing into the cosmic expanses of space. Immerse yourself in the awe-inspiring odyssey of space exploration, where each discovery opens new frontiers and fuels our collective
              fascination with the cosmos.{" "}
            </div>
            <div className=" flex w-full gap-[20px] justify-start items-center">
              <div className="w-fit p-[10px] text-zinc-800 text-sm font-medium font-montserrat tracking-tight">Jan 10, 2024</div>
              <div className=" cursor-pointer text-sky-950 text-sm font-normal font-montserrat tracking-tight p-[10px] bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10.125H12M6 6.375H9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M4.57411 14.25C3.59902 14.1541 2.86856 13.8612 2.37868 13.3713C1.5 12.4927 1.5 11.0784 1.5 8.25V7.875C1.5 5.04657 1.5 3.63236 2.37868 2.75368C3.25736 1.875 4.67157 1.875 7.5 1.875H10.5C13.3284 1.875 14.7427 1.875 15.6213 2.75368C16.5 3.63236 16.5 5.04657 16.5 7.875V8.25C16.5 11.0784 16.5 12.4927 15.6213 13.3713C14.7427 14.25 13.3284 14.25 10.5 14.25C10.0796 14.2594 9.74482 14.2913 9.41595 14.3663C8.51715 14.5732 7.68487 15.0331 6.8624 15.4342C5.69047 16.0056 5.1045 16.2914 4.73677 16.0238C4.03327 15.4999 4.7209 13.8764 4.875 13.125"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
                20 Comments
              </div>
              <div className="w-fit p-[10px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 4.5H16.5M13.5 1.5V7.5" stroke="#001F3F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M4.57411 14.625C3.59903 14.5291 2.86856 14.2362 2.37868 13.7463C1.5 12.8677 1.5 11.4534 1.5 8.625V8.25C1.5 5.42157 1.5 4.00736 2.37868 3.12868C3.25736 2.25 4.67157 2.25 7.5 2.25H8.625M4.875 13.5C4.72091 14.2514 4.03327 15.8749 4.73677 16.3988C5.1045 16.6664 5.69047 16.3806 6.8624 15.8092C7.68487 15.4081 8.51715 14.9482 9.41595 14.7413C9.74482 14.6663 10.0796 14.6344 10.5 14.625C13.3284 14.625 14.7427 14.625 15.6213 13.7463C16.4602 12.9073 16.4982 11.5802 16.4999 9"
                    stroke="#001F3F"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>
        <Link onClick={() => window.scrollTo(0, 0)} href="/post">
          <div className="flex w-full flex-col justify-between items-start gap-[20px]">
            <div className="p-2.5 bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center  text-stone-500 text-sm font-normal font-['Montserrat'] tracking-tight flex">5 min read</div>
            <img className="w-full" src={'Images/innovation3.png'} alt="innovation" />
            <div className="text-sky-950 text-2xl font-medium font-['Montserrat'] leading-9 tracking-tight">BioGen Innovations</div>
            <div className="w-full text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">
              BioGen Innovations stands at the forefront of biotechnological advancements, unraveling the mysteries of genetics to usher in a new era of healthcare. Join us in exploring the genetic frontiers, where breakthroughs in biotech promise
              transformative changes in the way we perceive and treat health.{" "}
            </div>
            <div className=" flex w-full gap-[20px] justify-start items-center">
              <div className="w-fit p-[10px] text-zinc-800 text-sm font-medium font-montserrat tracking-tight">Jan 10, 2024</div>
              <div className=" cursor-pointer text-sky-950 text-sm font-normal font-montserrat tracking-tight p-[10px] bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10.125H12M6 6.375H9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M4.57411 14.25C3.59902 14.1541 2.86856 13.8612 2.37868 13.3713C1.5 12.4927 1.5 11.0784 1.5 8.25V7.875C1.5 5.04657 1.5 3.63236 2.37868 2.75368C3.25736 1.875 4.67157 1.875 7.5 1.875H10.5C13.3284 1.875 14.7427 1.875 15.6213 2.75368C16.5 3.63236 16.5 5.04657 16.5 7.875V8.25C16.5 11.0784 16.5 12.4927 15.6213 13.3713C14.7427 14.25 13.3284 14.25 10.5 14.25C10.0796 14.2594 9.74482 14.2913 9.41595 14.3663C8.51715 14.5732 7.68487 15.0331 6.8624 15.4342C5.69047 16.0056 5.1045 16.2914 4.73677 16.0238C4.03327 15.4999 4.7209 13.8764 4.875 13.125"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
                20 Comments
              </div>
              <div className="w-fit p-[10px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 4.5H16.5M13.5 1.5V7.5" stroke="#001F3F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M4.57411 14.625C3.59903 14.5291 2.86856 14.2362 2.37868 13.7463C1.5 12.8677 1.5 11.4534 1.5 8.625V8.25C1.5 5.42157 1.5 4.00736 2.37868 3.12868C3.25736 2.25 4.67157 2.25 7.5 2.25H8.625M4.875 13.5C4.72091 14.2514 4.03327 15.8749 4.73677 16.3988C5.1045 16.6664 5.69047 16.3806 6.8624 15.8092C7.68487 15.4081 8.51715 14.9482 9.41595 14.7413C9.74482 14.6663 10.0796 14.6344 10.5 14.625C13.3284 14.625 14.7427 14.625 15.6213 13.7463C16.4602 12.9073 16.4982 11.5802 16.4999 9"
                    stroke="#001F3F"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Innovation;
