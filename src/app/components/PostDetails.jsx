/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { db } from '../../../firebase/config';
import { collection, query, getDocs, where, doc, updateDoc, increment } from "firebase/firestore";
import Link from "next/link";
import AddComment from "../utils/Addcomment";
import ViewComment from "../utils/ViewComment";
import Footer from "./Footer";

function Post({params}) {
  const [hamburger, setHamburger] = useState(false);
  const [viewComments, setViewComments] = useState(false);
  const [addComments, setAddComments] = useState(false);
  const [post, setPost] = useState(null);
  const PLACEHOLDER = "/article1.png "

  useEffect(() => {
    const fetchPostData = async () => {
      const q = query(collection(db, "posts"), where("slug", "==", params.slug));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setPost(querySnapshot.docs[0].data());
      }
    };

    const incrementViewCount = async () => {
      const postRef = doc(db, 'posts', params.slug);
      await updateDoc(postRef, {
        views: increment(1),
      });
    };

    fetchPostData();
    incrementViewCount();
  }, [params.slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <>
        {/* Large screens */}
        <div className="w-full 3xxS:hidden 13inch:flex   h-[120px] px-[89px] py-[30px] justify-between items-center ">
          <Link href="/">
            <img width={70} height={60} src='/bestofus.png' alt="The Best Of Us" />
          </Link>
          <div className="h-[42px] w-[250px] 4xS:w-[350px] px-5 py-3 bg-zinc-100 bg-opacity-90 rounded-[40px] border border-neutral-400 justify-start items-center gap-2.5 flex">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7916 13.125L17.1666 16.5" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M15.6666 8.25C15.6666 4.52208 12.6446 1.5 8.91663 1.5C5.18871 1.5 2.16663 4.52208 2.16663 8.25C2.16663 11.978 5.18871 15 8.91663 15C12.6446 15 15.6666 11.978 15.6666 8.25Z"
                stroke="#939393"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>

            <input className="text-neutral-400 outline-none border-none w-full bg-transparent h-full text-sm font-normal " placeholder="Search Articles......." />
          </div>
          <div className="justify-start items-center gap-[50px] flex">
            <Link href="/">
              <div className=" text-sky-950  text-lg font-normal font-montserrat  tracking-tight">Stories</div>
            </Link>
            <Link href="/">
              <div className=" text-sky-950 text-lg font-normal font-montserrat  tracking-tight">About Us</div>
            </Link>
            <Link href="/">
              <div className=" text-sky-950 text-lg font-normal font-montserrat  tracking-tight">Spotlight</div>
            </Link>
            <Link href="/">
              <div className=" text-sky-950 text-lg font-normal font-montserrat  tracking-tight">Contact Us</div>
            </Link>
          </div>
          <Link href="/write">
            <button className="flex justify-between gap-[10px] items-center">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.2676 6.22798L22.0198 4.47578C22.9875 3.50807 24.5565 3.50807 25.5242 4.47578C26.4919 5.4435 26.4919 7.01247 25.5242 7.98018L23.772 9.73238M20.2676 6.22798L13.7252 12.7704C12.4187 14.077 11.7653 14.7302 11.3205 15.5264C10.8756 16.3225 10.428 18.2024 10 20C11.7976 19.572 13.6775 19.1244 14.4736 18.6795C15.2698 18.2346 15.923 17.5814 17.2296 16.2747L23.772 9.73238M20.2676 6.22798L23.772 9.73238"
                  stroke="#001F3F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.25 15C26.25 20.3032 26.25 22.955 24.6025 24.6025C22.955 26.25 20.3032 26.25 15 26.25C9.6967 26.25 7.04505 26.25 5.39752 24.6025C3.75 22.955 3.75 20.3032 3.75 15C3.75 9.6967 3.75 7.04505 5.39752 5.39752C7.04505 3.75 9.6967 3.75 15 3.75"
                  stroke="#001F3F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <div className="text-sky-950 text-lg font-normal font-montserrat  tracking-tight">Write</div>
            </button>
          </Link>
        </div>
        {/* Small screens */}
        <div className="w-full  3xxS:flex 13inch:hidden   h-[120px] px-[50px] py-[30px] justify-between items-center ">
          <img width={70} height={60} src='/bestofus.png' alt="The Best Of Us" />
          <svg
            onClick={() => {
              setHamburger(!hamburger);
            }}
            className="text-sky-950"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 5H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 19H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {hamburger && (
          <div className=" w-full  flex flex-col h-fit pb-[30px] ">
            <div className=" border-b-[0.7px] px-[89px]   py-[15px] border-neutral-300  ">
              <div className="h-[42px] w-full 820xxS:w-[700px] px-5 py-3 bg-zinc-100 bg-opacity-90 rounded-[40px] border border-neutral-400 justify-start items-center gap-2.5 flex">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7916 13.125L17.1666 16.5" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M15.6666 8.25C15.6666 4.52208 12.6446 1.5 8.91663 1.5C5.18871 1.5 2.16663 4.52208 2.16663 8.25C2.16663 11.978 5.18871 15 8.91663 15C12.6446 15 15.6666 11.978 15.6666 8.25Z"
                    stroke="#939393"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>

                <input className="text-neutral-400 outline-none border-none w-full bg-transparent h-full text-sm font-normal " placeholder="Search Articles......." />
              </div>
            </div>
            <Link href="/">
              <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300  text-lg font-normal font-montserrat  tracking-tight">Stories</div>
            </Link>
            <Link href="/">
              <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 text-lg font-normal font-montserrat  tracking-tight">About Us</div>
            </Link>
            <Link href="/">
              <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 text-lg font-normal font-montserrat  tracking-tight">Spotlight</div>
            </Link>
            <Link href="/">
              <div className="text-sky-950 border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 text-lg font-normal font-montserrat  tracking-tight">Contact Us</div>
            </Link>

            <div className=" border-b-[0.7px] px-[89px] py-[15px] border-neutral-300 ">
              {" "}
              <Link href="/write">
                <button className="flex justify-between gap-[10px] items-center">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.2676 6.22798L22.0198 4.47578C22.9875 3.50807 24.5565 3.50807 25.5242 4.47578C26.4919 5.4435 26.4919 7.01247 25.5242 7.98018L23.772 9.73238M20.2676 6.22798L13.7252 12.7704C12.4187 14.077 11.7653 14.7302 11.3205 15.5264C10.8756 16.3225 10.428 18.2024 10 20C11.7976 19.572 13.6775 19.1244 14.4736 18.6795C15.2698 18.2346 15.923 17.5814 17.2296 16.2747L23.772 9.73238M20.2676 6.22798L23.772 9.73238"
                      stroke="#001F3F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.25 15C26.25 20.3032 26.25 22.955 24.6025 24.6025C22.955 26.25 20.3032 26.25 15 26.25C9.6967 26.25 7.04505 26.25 5.39752 24.6025C3.75 22.955 3.75 20.3032 3.75 15C3.75 9.6967 3.75 7.04505 5.39752 5.39752C7.04505 3.75 9.6967 3.75 15 3.75"
                      stroke="#001F3F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="text-sky-950 text-lg font-normal font-montserrat  tracking-tight">Write</div>
                </button>
              </Link>
            </div>
          </div>
        )}
      </>
      {/* Large Screens */}
      <div className="w-full mt-[100px] flex justify-center items-center  ">
        <div className=" 3xxS:w-[85%] 820xxS:w-[80%] gap-[100px] flex-col flex items-center justify-center ">
          <div className=" 3xxS:w-full 10inch:w-[70%] flex justify-between flex-col gap-[30px]">
            <div className=" flex w-full  gap-[20px] justify-start items-center">
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
            <h2 className="  text-sky-950 text-[40px]  font-medium font-montserrat leading-[60px] tracking-tight">{post.title}</h2>

            <img alt="Post" src={post.img || PLACEHOLDER} />
            <div className="  text-neutral-500 text-xl font-normal font-['Roboto'] leading-[35px] tracking-tight">
             {post.desc}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {viewComments && <ViewComment viewComments={viewComments} setViewComments={setViewComments} postSlug={params.slug} comments={post.comments} />}
      {/* {addComments && <AddComment addComments={addComments} setAddComments={setAddComments} />} */}
    </>
  );
}

export default Post;
