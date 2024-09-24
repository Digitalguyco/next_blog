import React, {  useState }  from "react";
import {  db } from '../../../firebase/config';
import { collection, query, where, doc, setDoc, getDocs, } from "firebase/firestore";
function Footer() {
  const date = new Date().getFullYear();
  const [email, setEmail] = useState("");
  
  const handleEmailSubmit = async () => {
    try {
      const querySnapshot = await getDocs(query(collection(db, "newsletter"), where("email", "==", email)));

      if (!querySnapshot.empty) {
        alert("This email is alreday subscribed to our NewsLetter");
        return;
      }

      const newEmail = {
        email: email,
      };

      await setDoc(doc(db, "newsletter", email ), newEmail);

      setEmail('');
      alert('You Have Successfully Subcribed to our NewsLetter 🎉');
    }catch (error) {
      console.error("Error Subcribing: ", error);
      alert("Error Subcribing Please try again later.");
    }
  };

  return (
    <>
      <div className=" px-[32px] flex justify-center flex-col items-center py-[49px] bg-[#001F3F] w-full mt-[100px] h-fit">
        {/* Large Screens */}
        <div className=" xl:flex hidden flex-col justify-center  items-center">
          <div className="flex gap-[100px] justify-between items-center">
            <div>
              <img src='/Logo With Shadow.png' alt="The Best Of Us" />
            </div>
            <div className=" w-[483px] gap-[20px] flex flex-col justify-between items-start">
              <h2 className=" font-montserrat font-semibold text-[34px] tracking-[1px] text-[#f5f5f5] ">Get In Touch</h2>
              <p className=" leading-[35px] font-roboto font-normal text-[18px] text-[#B4B4B4] ">
                Have questions, suggestions, or want to collaborate? Reach out to us. Your thoughts matter, and we're here to listen. Contact us for anything you need.
              </p>
              {/* Social Icons */}
              <div className="flex justify-between items-center gap-[20px] w-[280px]">
                <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.13636 7.95408C4.40304 7.95408 4.25 8.098 4.25 8.7874V10.0374C4.25 10.7269 4.40304 10.8708 5.13636 10.8708H6.90909V15.8708C6.90909 16.5602 7.06213 16.7041 7.79545 16.7041H9.56818C10.3015 16.7041 10.4545 16.5602 10.4545 15.8708V10.8708H12.445C13.0012 10.8708 13.1446 10.7691 13.2973 10.2664L13.6772 9.01638C13.9389 8.15515 13.7776 7.95408 12.8249 7.95408H10.4545V5.87077C10.4545 5.41053 10.8514 5.03743 11.3409 5.03743H13.8636C14.5969 5.03743 14.75 4.89354 14.75 4.2041V2.53743C14.75 1.84799 14.5969 1.7041 13.8636 1.7041H11.3409C8.89325 1.7041 6.90909 3.56958 6.90909 5.87077V7.95408H5.13636Z"
                      stroke="#001F3F"
                      strokeWidth="1.125"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.75 15.9541L8.4113 10.2928M8.4113 10.2928L2.75 2.4541H6.5L10.5887 8.1154M8.4113 10.2928L12.5 15.9541H16.25L10.5887 8.1154M16.25 2.4541L10.5887 8.1154"
                      stroke="#001F3F"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 7.7041V12.9541" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M8.75 9.9541V12.9541M8.75 9.9541C8.75 8.71143 9.75732 7.7041 11 7.7041C12.2427 7.7041 13.25 8.71143 13.25 9.9541V12.9541M8.75 9.9541V7.7041"
                      stroke="#001F3F"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path d="M5.75601 5.4541H5.74927" stroke="#001F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2.375 9.2041C2.375 5.84535 2.375 4.16597 3.41843 3.12253C4.46187 2.0791 6.14124 2.0791 9.5 2.0791C12.8587 2.0791 14.5381 2.0791 15.5816 3.12253C16.625 4.16597 16.625 5.84535 16.625 9.2041C16.625 12.5628 16.625 14.2422 15.5816 15.2857C14.5381 16.3291 12.8587 16.3291 9.5 16.3291C6.14124 16.3291 4.46187 16.3291 3.41843 15.2857C2.375 14.2422 2.375 12.5628 2.375 9.2041Z"
                      stroke="#001F3F"
                      stroke-width="1.125"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.375 9.2041C2.375 5.84535 2.375 4.16597 3.41843 3.12253C4.46187 2.0791 6.14124 2.0791 9.5 2.0791C12.8587 2.0791 14.5381 2.0791 15.5816 3.12253C16.625 4.16597 16.625 5.84535 16.625 9.2041C16.625 12.5628 16.625 14.2422 15.5816 15.2857C14.5381 16.3291 12.8587 16.3291 9.5 16.3291C6.14124 16.3291 4.46187 16.3291 3.41843 15.2857C2.375 14.2422 2.375 12.5628 2.375 9.2041Z"
                      stroke="#001F3F"
                      stroke-width="1.125"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.875 9.2041C12.875 11.0681 11.364 12.5791 9.5 12.5791C7.63604 12.5791 6.125 11.0681 6.125 9.2041C6.125 7.34014 7.63604 5.8291 9.5 5.8291C11.364 5.8291 12.875 7.34014 12.875 9.2041Z"
                      stroke="#001F3F"
                      stroke-width="1.125"
                    />
                    <path d="M13.6309 5.0791H13.6241" stroke="#001F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
                <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4.7041L7.18477 7.64183C9.0962 8.72485 9.9038 8.72485 11.8152 7.64183L17 4.7041" stroke="#001F3F" stroke-width="1.5" stroke-linejoin="round" />
                    <path
                      d="M2.01183 10.3108C2.06086 12.61 2.08537 13.7595 2.93372 14.6112C3.78206 15.4627 4.96275 15.4923 7.32412 15.5517C8.77948 15.5883 10.2205 15.5883 11.6759 15.5517C14.0373 15.4923 15.2179 15.4627 16.0663 14.6112C16.9147 13.7595 16.9392 12.61 16.9881 10.3108C17.004 9.57153 17.004 8.83668 16.9881 8.0974C16.9392 5.79825 16.9147 4.64867 16.0663 3.7971C15.2179 2.94552 14.0373 2.91586 11.6759 2.85653C10.2205 2.81996 8.77947 2.81996 7.32411 2.85652C4.96275 2.91585 3.78206 2.94551 2.93371 3.79709C2.08537 4.64866 2.06085 5.79824 2.01182 8.0974C1.99605 8.83668 1.99606 9.57153 2.01183 10.3108Z"
                      stroke="#001F3F"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.33321 9.1609C2.6222 7.92108 2.27889 6.90871 2.07188 5.88251C1.76571 4.36479 2.46636 2.88221 3.62703 1.93621C4.11759 1.53639 4.67992 1.67299 4.97 2.1934L5.62488 3.36829C6.14397 4.29953 6.4035 4.76515 6.35202 5.2588C6.30055 5.75245 5.95053 6.1545 5.25048 6.95861L3.33321 9.1609ZM3.33321 9.1609C4.77238 11.6703 7.03088 13.9301 9.5432 15.3709M9.5432 15.3709C10.783 16.0819 11.7954 16.4253 12.8216 16.6323C14.3393 16.9384 15.8219 16.2378 16.7679 15.0771C17.1677 14.5866 17.0311 14.0242 16.5107 13.7341L15.3358 13.0792C14.4045 12.5601 13.9389 12.3006 13.4453 12.3521C12.9516 12.4035 12.5496 12.7536 11.7455 13.4536L9.5432 15.3709Z"
                      stroke="#001F3F"
                      stroke-width="1.125"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.5 5.4541H10.1428C10.4459 5.4541 10.5974 5.4541 10.6916 5.54563C10.7857 5.63716 10.7857 5.78448 10.7857 6.0791C10.7857 6.66836 10.7857 6.96298 10.5974 7.14604C10.4542 7.28526 10.2447 7.3186 9.88587 7.32659C9.7019 7.33068 9.60988 7.33273 9.5549 7.38738C9.5 7.44202 9.5 7.52938 9.5 7.7041V8.57913C9.5 8.87373 9.5 9.02103 9.59412 9.1126C9.68832 9.2041 9.83982 9.2041 10.1428 9.2041H10.7857M14 5.4541V7.3291M14 7.3291H12.9072C12.6647 7.3291 12.5435 7.3291 12.4682 7.25588C12.3928 7.18266 12.3928 7.0648 12.3928 6.8291V5.4541M14 7.3291V9.2041"
                      stroke="#001F3F"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 3.43299C8.06675 3.35799 8.13613 3.28448 8.20805 3.21257C10.2193 1.20128 13.4803 1.20128 15.4915 3.21257C17.5028 5.22385 17.5028 8.48478 15.4915 10.4961C15.4196 10.568 15.3461 10.6374 15.2711 10.7041"
                      stroke="#001F3F"
                      stroke-width="1.125"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" w-[380px] px-[25px] py-[40px] gap-[34px] flex justify-between items-center flex-col rounded-[20px] bg-[#fff] bg-opacity-10 h-[350px]">
              <div className=" flex w-full flex-col justify-between gap-[30px] items-center">
                {" "}
                <div className=" gap-[10px] flex text-center flex-col justify-between items-center">
                  <h2 className=" font-montserrat font-semibold text-[24px] tracking-[1px] text-[#f5f5f5] ">Subscribe Now</h2>
                  <p className=" leading-[25px] font-roboto font-normal text-[14px] text-[#B4B4B4] ">Stay informed and inspired with our newsletter. Join us for a journey of discovery, celebrating the best of our community. Subscribe now! </p>
                </div>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className=" h-[47px] w-full bg-[#f5f5f5] placeholder:text-[#939393] placeholder:text-[14px] font-montserrat font-normal outline-[#001F3F] rounded-[20px] px-[25px] " placeholder="Enter Email" type="email" />
              </div>
              <button onClick={handleEmailSubmit} className=" h-[45px] w-full bg-[#2ECC71] text-[16px] text-[#001F3F] font-montserrat font-medium flex justify-center items-center  rounded-[20px]  ">Subscribe</button>
            </div>
          </div>
          <div className=" tracking-[0.9px] text-[14px] font-roboto font-[300] text-[#f5f5f5]">
            <p>Copyrights {date} | The Best of Us</p>
          </div>
        </div>
        {/* Small Screen */}
        <div className=" xl:hidden flex flex-col max-w-[80%] 7xxS:w-[450px]  justify-between  gap-[70px] items-start">
          <div>
          <img src='/Logo With Shadow.png' alt="The Best Of Us" />
          </div>
          <div className=" w-full gap-[20px] flex flex-col justify-between items-start">
            <h2 className=" font-montserrat font-semibold text-[34px] tracking-[1px] text-[#f5f5f5] ">Get In Touch</h2>
            <p className=" leading-[35px] font-roboto font-normal text-[18px] text-[#B4B4B4] ">Have questions, suggestions, or want to collaborate? Reach out to us. Your thoughts matter, and we're here to listen. Contact us for anything you need.</p>
            {/* Social Icons */}
            <div className="flex justify-between items-center gap-[20px] w-[280px]">
              <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.13636 7.95408C4.40304 7.95408 4.25 8.098 4.25 8.7874V10.0374C4.25 10.7269 4.40304 10.8708 5.13636 10.8708H6.90909V15.8708C6.90909 16.5602 7.06213 16.7041 7.79545 16.7041H9.56818C10.3015 16.7041 10.4545 16.5602 10.4545 15.8708V10.8708H12.445C13.0012 10.8708 13.1446 10.7691 13.2973 10.2664L13.6772 9.01638C13.9389 8.15515 13.7776 7.95408 12.8249 7.95408H10.4545V5.87077C10.4545 5.41053 10.8514 5.03743 11.3409 5.03743H13.8636C14.5969 5.03743 14.75 4.89354 14.75 4.2041V2.53743C14.75 1.84799 14.5969 1.7041 13.8636 1.7041H11.3409C8.89325 1.7041 6.90909 3.56958 6.90909 5.87077V7.95408H5.13636Z"
                    stroke="#001F3F"
                    strokeWidth="1.125"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.75 15.9541L8.4113 10.2928M8.4113 10.2928L2.75 2.4541H6.5L10.5887 8.1154M8.4113 10.2928L12.5 15.9541H16.25L10.5887 8.1154M16.25 2.4541L10.5887 8.1154"
                    stroke="#001F3F"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 7.7041V12.9541" stroke="#001F3F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M8.75 9.9541V12.9541M8.75 9.9541C8.75 8.71143 9.75732 7.7041 11 7.7041C12.2427 7.7041 13.25 8.71143 13.25 9.9541V12.9541M8.75 9.9541V7.7041"
                    stroke="#001F3F"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M5.75601 5.4541H5.74927" stroke="#001F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M2.375 9.2041C2.375 5.84535 2.375 4.16597 3.41843 3.12253C4.46187 2.0791 6.14124 2.0791 9.5 2.0791C12.8587 2.0791 14.5381 2.0791 15.5816 3.12253C16.625 4.16597 16.625 5.84535 16.625 9.2041C16.625 12.5628 16.625 14.2422 15.5816 15.2857C14.5381 16.3291 12.8587 16.3291 9.5 16.3291C6.14124 16.3291 4.46187 16.3291 3.41843 15.2857C2.375 14.2422 2.375 12.5628 2.375 9.2041Z"
                    stroke="#001F3F"
                    stroke-width="1.125"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.375 9.2041C2.375 5.84535 2.375 4.16597 3.41843 3.12253C4.46187 2.0791 6.14124 2.0791 9.5 2.0791C12.8587 2.0791 14.5381 2.0791 15.5816 3.12253C16.625 4.16597 16.625 5.84535 16.625 9.2041C16.625 12.5628 16.625 14.2422 15.5816 15.2857C14.5381 16.3291 12.8587 16.3291 9.5 16.3291C6.14124 16.3291 4.46187 16.3291 3.41843 15.2857C2.375 14.2422 2.375 12.5628 2.375 9.2041Z"
                    stroke="#001F3F"
                    stroke-width="1.125"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.875 9.2041C12.875 11.0681 11.364 12.5791 9.5 12.5791C7.63604 12.5791 6.125 11.0681 6.125 9.2041C6.125 7.34014 7.63604 5.8291 9.5 5.8291C11.364 5.8291 12.875 7.34014 12.875 9.2041Z"
                    stroke="#001F3F"
                    stroke-width="1.125"
                  />
                  <path d="M13.6309 5.0791H13.6241" stroke="#001F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4.7041L7.18477 7.64183C9.0962 8.72485 9.9038 8.72485 11.8152 7.64183L17 4.7041" stroke="#001F3F" stroke-width="1.5" stroke-linejoin="round" />
                  <path
                    d="M2.01183 10.3108C2.06086 12.61 2.08537 13.7595 2.93372 14.6112C3.78206 15.4627 4.96275 15.4923 7.32412 15.5517C8.77948 15.5883 10.2205 15.5883 11.6759 15.5517C14.0373 15.4923 15.2179 15.4627 16.0663 14.6112C16.9147 13.7595 16.9392 12.61 16.9881 10.3108C17.004 9.57153 17.004 8.83668 16.9881 8.0974C16.9392 5.79825 16.9147 4.64867 16.0663 3.7971C15.2179 2.94552 14.0373 2.91586 11.6759 2.85653C10.2205 2.81996 8.77947 2.81996 7.32411 2.85652C4.96275 2.91585 3.78206 2.94551 2.93371 3.79709C2.08537 4.64866 2.06085 5.79824 2.01182 8.0974C1.99605 8.83668 1.99606 9.57153 2.01183 10.3108Z"
                    stroke="#001F3F"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a className="w-[30px] flex justify-center items-center rounded-[40px] bg-[#f5f5f5] h-[30px] " href="/">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33321 9.1609C2.6222 7.92108 2.27889 6.90871 2.07188 5.88251C1.76571 4.36479 2.46636 2.88221 3.62703 1.93621C4.11759 1.53639 4.67992 1.67299 4.97 2.1934L5.62488 3.36829C6.14397 4.29953 6.4035 4.76515 6.35202 5.2588C6.30055 5.75245 5.95053 6.1545 5.25048 6.95861L3.33321 9.1609ZM3.33321 9.1609C4.77238 11.6703 7.03088 13.9301 9.5432 15.3709M9.5432 15.3709C10.783 16.0819 11.7954 16.4253 12.8216 16.6323C14.3393 16.9384 15.8219 16.2378 16.7679 15.0771C17.1677 14.5866 17.0311 14.0242 16.5107 13.7341L15.3358 13.0792C14.4045 12.5601 13.9389 12.3006 13.4453 12.3521C12.9516 12.4035 12.5496 12.7536 11.7455 13.4536L9.5432 15.3709Z"
                    stroke="#001F3F"
                    stroke-width="1.125"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.5 5.4541H10.1428C10.4459 5.4541 10.5974 5.4541 10.6916 5.54563C10.7857 5.63716 10.7857 5.78448 10.7857 6.0791C10.7857 6.66836 10.7857 6.96298 10.5974 7.14604C10.4542 7.28526 10.2447 7.3186 9.88587 7.32659C9.7019 7.33068 9.60988 7.33273 9.5549 7.38738C9.5 7.44202 9.5 7.52938 9.5 7.7041V8.57913C9.5 8.87373 9.5 9.02103 9.59412 9.1126C9.68832 9.2041 9.83982 9.2041 10.1428 9.2041H10.7857M14 5.4541V7.3291M14 7.3291H12.9072C12.6647 7.3291 12.5435 7.3291 12.4682 7.25588C12.3928 7.18266 12.3928 7.0648 12.3928 6.8291V5.4541M14 7.3291V9.2041"
                    stroke="#001F3F"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 3.43299C8.06675 3.35799 8.13613 3.28448 8.20805 3.21257C10.2193 1.20128 13.4803 1.20128 15.4915 3.21257C17.5028 5.22385 17.5028 8.48478 15.4915 10.4961C15.4196 10.568 15.3461 10.6374 15.2711 10.7041"
                    stroke="#001F3F"
                    stroke-width="1.125"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className=" w-full px-[25px] py-[40px] gap-[34px] flex justify-between items-center flex-col rounded-[20px] bg-[#fff] bg-opacity-10 h-[350px]">
            <div className=" flex w-full flex-col justify-between gap-[30px] items-center">
              {" "}
              <div className=" gap-[10px] flex text-center flex-col justify-between items-center">
                <h2 className=" font-montserrat font-semibold text-[24px] tracking-[1px] text-[#f5f5f5] ">Subscribe Now</h2>
                <p className=" leading-[25px] font-roboto font-normal text-[14px] text-[#B4B4B4] ">Stay informed and inspired with our newsletter. Join us for a journey of discovery, celebrating the best of our community. Subscribe now! </p>
              </div>
              <input className=" h-[47px] w-full bg-[#f5f5f5] placeholder:text-[#939393] placeholder:text-[14px] font-montserrat font-normal outline-[#001F3F] rounded-[20px] px-[25px] " placeholder="Enter Email" type="email" />
            </div>
            <button className=" h-[45px] w-full bg-[#2ECC71] text-[16px] text-[#001F3F] font-montserrat font-medium flex justify-center items-center  rounded-[20px]  ">Subscribe</button>
          </div>
          <div className=" w-full flex items-center tracking-[0.9px] text-[14px] font-roboto font-[300] text-[#f5f5f5]">
            <p>Copyrights {date} | The Best of Us</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
