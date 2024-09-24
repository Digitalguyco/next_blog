// Login.jsx
"use client";
import React, { useState, useEffect} from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { auth } from '../../../firebase/config';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

   // Check if the user is already logged in
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/c89ovt/yh789rf/admin'); // Redirect to admin if user is already logged in
      } else {
        setLoading(false); // Allow user to see the login page if not logged in
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/c89ovt/yh789rf/admin'); // Redirect to admin page on successful login
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="  bg-neutral-100">
      {/* <img className="w-[1440px] h-[1024px] left-0 top-0 absolute" src="https://via.placeholder.com/1440x1024" /> */}
      <Image width={70} height={60} className="w-full h-[1024px] "  src='/loginImg.png' alt="The Best Of Us" />
      <div className="h-[626.57px] px-2.5 py-[70px] left-[929px] top-[198px] absolute bg-neutral-100 rounded-[20px] flex-col justify-start items-center gap-10 inline-flex">
        <Image width={70} height={60} src='/bestofus.png' alt="The Best Of Us" />
        <div className="flex-col justify-start items-center gap-2.5 flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="text-[#001f3f] text-[32px] font-medium font-['Montserrat'] leading-9 tracking-tight">Welcome Back!</div>
          </div>
          <div className="w-[475px] text-center text-[#777777] text-lg font-normal font-['Roboto'] leading-[30px] tracking-tight">
            Please enter your details to Login
          </div>
        </div>
        <form onSubmit={handleLogin} className="h-[183px] flex-col justify-start items-center gap-5 flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch text-[#333333] text-sm font-normal font-['Montserrat']">Email Address</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[407px] px-5 py-2.5 rounded-[20px] border border-[#929292]"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch text-[#333333] text-sm font-normal font-['Montserrat']">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[407px] px-5 py-2.5 rounded-[20px] border border-[#929292]"
              placeholder="Enter Password"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button disabled={!(email) && !(password)} type="submit" className="px-[100px] py-[7px] disabled:bg-[#2ecc71]/50 bg-[#2ecc71] rounded-[20px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#001f3f] text-base font-medium font-['Montserrat'] leading-[25px] tracking-tight">Login</div>
          </button>
        </form>
      </div>
    </div>
  );
}
