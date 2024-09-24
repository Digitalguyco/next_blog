/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
import ViewComment from "../utils/ViewComment";
import AddComment from "../utils/AddComment";
import { db } from '../../../firebase/config';
import { collection, query,  limit, getDocs, orderBy } from "firebase/firestore";
import Link from "next/link";
function TopArticles() {
  const [viewComments, setViewComments] = useState(false);
  const [addComments, setAddComments] = useState(false);
  const [posts, setPosts] = useState([]);
  const containerRef = useRef(null);
  const PLACEHOLDER = "/article1.png "
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100;
    }
  };
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
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(6));
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
      <div className="  pb-[40px] xl:w-[1220px] lg:w-[74%] md:flex hidden justify-start  items-start ">
        <div ref={containerRef} className="  h-fit relative overflow-x-scroll  items-center gap-[70px] inline-flex">
        {posts.map((post, index) => (
          <Link href={`/posts/${post.slug}`} key={index} className="flex-col w-[496px] justify-between items-start gap-[20px] flex">
            <img alt="Post" className="w-full rounded-md h-56 object-cover mb-4" src={post.img || PLACEHOLDER } />
            <div className=" flex w-full justify-between items-center">
              <h2 className="w-[370px] text-sky-950 text-2xl font-medium font-montserrat leading-9 tracking-tight">{post.title}</h2>
              <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex text-stone-500 text-sm font-normal font-montserrat tracking-tight whitespace-nowrap">{post.readTime}</div>
            </div>
            <div className="w-[95%]  text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">
            {getExcerpt(post.desc)}
            </div>
            <div className=" flex w-full gap-[20px] justify-start items-center">
              <div className="w-fit p-[10px] text-zinc-800 text-sm font-medium font-montserrat tracking-tight">{post.createdAt}</div>
              <div
                onClick={() => setViewComments(!viewComments)}
                className=" cursor-pointer text-sky-950 text-sm font-normal font-montserrat tracking-tight p-[10px] bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex"
              >
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
              <div
                onClick={() => {
                  setAddComments(!addComments);
                  setViewComments(false);
                }}
                className=" cursor-pointer w-fit p-[10px]"
              >
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
          </Link>
        ))}
        </div>
      </div>
      {/* Small Screen */}
      <div className="w-full">
        <div className=" w-[300px] md:w-[750px] lg:w-[960px] 1halfxS:w-[1050px]  overflow-x-scroll xl:hidden flex justify-start  items-start ">
          <div ref={containerRef} className="w-full    h-fit relative   items-center gap-[70px] flex">
            <div className="flex-col w-[496px] justify-between items-start gap-[20px] flex">
              <img alt="Post" className="w-full " src="/article1.png" />
              <div className=" flex w-full justify-between items-center">
                <h2 className="w-[370px] text-sky-950 text-2xl font-medium font-montserrat leading-9 tracking-tight">Tech Innovators: African Diaspora Changing the Game</h2>
                <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex text-stone-500 text-sm font-normal font-montserrat tracking-tight whitespace-nowrap">5 min read</div>
              </div>
              <div className="w-[95%]  text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">
                Explore the tech brilliance of the African diaspora, from Silicon Valley to emerging hubs. Discover inspiring stories shaping the future.
              </div>
              <div className=" flex w-full gap-[20px] justify-start items-center">
                <div className="w-fit p-[10px] text-zinc-800 text-sm font-medium font-montserrat tracking-tight">Jan 10, 2024</div>
                <div onClick={() => setViewComments(!viewComments)} className="text-sky-950 text-sm font-normal font-montserrat tracking-tight p-[10px] bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">
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
                <div
                  onClick={() => {
                    setAddComments(!addComments);
                    setViewComments(false);
                  }}
                  className=" cursor-pointer w-fit p-[10px]"
                >
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
            <div className="flex-col w-[496px] justify-between items-start gap-[20px] flex">
              <img alt="Post" className="w-full " src="/article2.png" />
              <div className=" flex w-full justify-between items-center">
                <h2 className="w-[370px] text-sky-950 text-2xl font-medium font-montserrat leading-9 tracking-tight">Afro-Fusion Cuisine: Culinary Delights Redefining Taste</h2>
                <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex text-stone-500 text-sm font-normal font-montserrat tracking-tight whitespace-nowrap">5 min read</div>
              </div>
              <div className="w-[97%]  text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">
                Dive into Afro-Fusion cuisine as chefs blend tradition with contemporary flair. Uncover delectable dishes taking the culinary scene by storm.{" "}
              </div>
              <div className=" flex w-full gap-[20px] justify-start items-center">
                <div className="w-fit p-[10px] text-zinc-800 text-sm font-medium font-montserrat tracking-tight">Jan 10, 2024</div>
                <div onClick={() => setViewComments(!viewComments)} className="text-sky-950 text-sm font-normal font-montserrat tracking-tight p-[10px] bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">
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
                <div
                  onClick={() => {
                    setAddComments(!addComments);
                    setViewComments(false);
                  }}
                  className=" cursor-pointer w-fit p-[10px]"
                >
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
            <div className="flex-col w-[496px] justify-between items-start gap-[20px] flex">
              <img alt="Post" className="w-full " src="/article1.png "/>
              <div className=" flex w-full justify-between items-center">
                <h2 className="w-[370px] text-sky-950 text-2xl font-medium font-montserrat leading-9 tracking-tight">Tech Innovators: African Diaspora Changing the Game</h2>
                <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex text-stone-500 text-sm font-normal font-montserrat tracking-tight whitespace-nowrap">5 min read</div>
              </div>
              <div className="w-[95%]  text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">
                Explore the tech brilliance of the African diaspora, from Silicon Valley to emerging hubs. Discover inspiring stories shaping the future.
              </div>
              <div className=" flex w-full gap-[20px] justify-start items-center">
                <div className="w-fit p-[10px] text-zinc-800 text-sm font-medium font-montserrat tracking-tight">Jan 10, 2024</div>
                <div onClick={() => setViewComments(!viewComments)} className="text-sky-950 text-sm font-normal font-montserrat tracking-tight p-[10px] bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">
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
                <div
                  onClick={() => {
                    setAddComments(!addComments);
                    setViewComments(false);
                  }}
                  className=" cursor-pointer w-fit p-[10px]"
                >
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
          </div>
        </div>
        <div className="absolute w-[92%]  xl:hidden  left-[20px]   top-[1580px]">
          <div className="flex  justify-between items-center">
            <div onClick={scrollLeft} className="p-[10px] cursor-pointer bg-[#001F3F] bg-opacity-10 rounded-[40px] justify-center items-center  flex">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7071 5.10673C12.0976 5.49726 12.0976 6.13042 11.7071 6.52095L6.41421 11.8138H20C20.5523 11.8138 21 12.2615 21 12.8138C21 13.3661 20.5523 13.8138 20 13.8138H6.41421L11.7071 19.1067C12.0976 19.4972 12.0976 20.1304 11.7071 20.5209C11.3166 20.9114 10.6834 20.9114 10.2929 20.5209L3.29289 13.5209C3.10536 13.3334 3 13.079 3 12.8138C3 12.5486 3.10536 12.2942 3.29289 12.1067L10.2929 5.10673C10.6834 4.71621 11.3166 4.71621 11.7071 5.10673Z"
                  fill="#001F3F"
                />
              </svg>
            </div>
            <div onClick={scrollRight} className="p-[10px] bg-[#001F3F] bg-opacity-[10%] rounded-[40px] justify-center items-center  cursor-pointer flex">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2929 5.10673C11.9024 5.49726 11.9024 6.13042 12.2929 6.52095L17.5858 11.8138H4C3.4477 11.8138 3 12.2615 3 12.8138C3 13.3661 3.4477 13.8138 4 13.8138H17.5858L12.2929 19.1067C11.9024 19.4972 11.9024 20.1304 12.2929 20.5209C12.6834 20.9114 13.3166 20.9114 13.7071 20.5209L20.7071 13.5209C20.8946 13.3334 21 13.079 21 12.8138C21 12.5486 20.8946 12.2942 20.7071 12.1067L13.7071 5.10673C13.3166 4.71621 12.6834 4.71621 12.2929 5.10673Z"
                  fill="#001F3F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {viewComments && <ViewComment viewComments={viewComments} setViewComments={setViewComments} />}
      {addComments && <AddComment addComments={addComments} setAddComments={setAddComments} />}
    </>
  );
}

export default TopArticles;
