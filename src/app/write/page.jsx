"use client";
import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from '../../../firebase/config';
import { collection, query, where, doc, setDoc, getDocs, } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const WritePage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("draft");
  const [category, setCategory] = useState("others");
  const [addButton, setAddButton] = useState(false);
  const [isthereImageinProcess, setIsthereImageInProcess] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      setIsthereImageInProcess(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
          setImageUploaded(true);
          setIsthereImageInProcess(false);
        }
      );
    };

    file && upload();
  }, [file]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleSubmit = async () => {
    try {
      const querySnapshot = await getDocs(query(collection(db, "posts"), where("title", "==", title)));

      if (!querySnapshot.empty) {
        alert("A post with the same title already exists. Please choose a different title.");
        return;
      }

      const newPost = {
        title: title,
        desc: value,
        img: media,
        slug: slugify(title),
        category: category,
        status: status,
        createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: calculateReadingTime(value),
        views: 0,
        comments: [],
        commentsCount: 0,
      };

      await setDoc(doc(db, "posts", slugify(title)), newPost);

      setTitle('');
      setValue('');
      setMedia('');
      setFile(null);

      alert('Posted Successfully 🎉');
      router.push('/');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting post. Please try again later.");
    }
  };

  const handleButtonDisabled = () => {
    return !(value.length > 3 && title.length > 3 &&  !(isthereImageinProcess));
  };
  return (
    <>
      <div className=" px-[89px] py-[30px] w-full">
        <Link href="/">
          <img width={70} height={60} src='/bestofus.png' className="" alt="The Best Of Us" />
        </Link>
      </div>
      <div className="13inch:flex 3xxS:hidden flex justify-center items-center w-full">
        <div className="p-[50px] flex flex-col w-[85%] mt-[10px] ">
          <input
            type="text"
            className="outline-sky-950 bg-transparent placeholder:text-neutral-400 placeholder:text-[30px] text-[32px] text-[#001F3F] font-medium font-montserrat tracking-tight w-full h-[100px] px-[38px] py-[33px] rounded-[20px] border border-neutral-400 justify-start items-center flex"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <select
            className="mt-4 bg-transparent border border-neutral-400 rounded-[20px] px-[20px] py-[10px]"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="business">Business</option>
            <option value="innovation">Innovation</option>
            <option value="others">Others</option>
          </select>
          <div className="w-full outline-sky-950 flex h-[428px] mt-6 p-[40px] rounded-[20px] border gap-[10px] border-neutral-400 justify-start">
            {addButton ? (
              <svg onClick={() => setAddButton(false)} width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0491 21.2L13.6499 12.8M13.6508 21.2L22.0499 12.8" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31.8501 17C31.8501 9.26801 25.582 3 17.8501 3C10.1181 3 3.8501 9.26801 3.8501 17C3.8501 24.7319 10.1181 31 17.8501 31C25.582 31 31.8501 24.7319 31.8501 17Z" stroke="#333333" strokeWidth="1.5" />
              </svg>
            ) : (
              <svg onClick={() => setAddButton(true)} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 11.6667V23.3333M23.3334 17.5H11.6667" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 32.0833C25.5542 32.0833 32.0834 25.5542 32.0834 17.5C32.0834 9.44585 25.5542 2.91667 17.5 2.91667C9.44587 2.91667 2.91669 9.44585 2.91669 17.5C2.91669 25.5542 9.44587 32.0833 17.5 32.0833Z" stroke="#333333" strokeWidth="1.5" />
              </svg>
            )}
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            {addButton && (
              <div className="flex gap-[25px] ml-[10px] h-[36px] justify-between items-center">
                <label htmlFor="image">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#2ECC71" />
                    <path d="M15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16Z" stroke="#2ECC71" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 23L13.5858 19.4142C14.3668 18.6332 15.6332 18.6332 16.4142 19.4142L17 20L21.5858 15.4142C22.3668 14.6332 23.6332 14.6332 24.4142 15.4142L26 17" stroke="#2ECC71" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 18C23.5523 18 24 17.5523 24 17C24 16.4477 23.5523 16 23 16C22.4477 16 22 16.4477 22 17C22 17.5523 22.4477 18 23 18Z" stroke="#2ECC71" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25 19C25.5523 19 26 18.5523 26 18C26 17.4477 25.5523 17 25 17C24.4477 17 24 17.4477 24 18C24 18.5523 24.4477 19 25 19Z" stroke="#2ECC71" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
              </div>
            )}
            <textarea
              id="desc"
              className="outline-sky-950 bg-transparent placeholder:text-neutral-400 placeholder:text-[30px] text-[30px] text-[#001F3F] font-medium font-montserrat tracking-tight w-full h-full px-[38px] py-[33px] rounded-[20px] border-none justify-start items-center flex"
              placeholder="Content here"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </div>
          <button
            onClick={handleSubmit}
            className={`mt-[56px] mb-[89px] flex justify-center text-center items-center w-[200px] h-[67px] text-white text-[25px] font-montserrat font-medium rounded-[20px] ${handleButtonDisabled() ? "bg-gray-500 cursor-not-allowed" : "bg-sky-950 cursor-pointer"}`}
            disabled={handleButtonDisabled()}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default WritePage;
