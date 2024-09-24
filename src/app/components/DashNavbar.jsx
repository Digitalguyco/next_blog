/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Logo from '../../../public/logo.svg';
import { signOut } from "firebase/auth";  // Import Firebase's signOut
import { useRouter } from "next/navigation";  // Import useRouter for redirection
import {auth} from '../../../firebase/config'// Make sure this is the correct path to your Firebase config

const DashNavBar = ({ setPage, page }) => {
  const router = useRouter();

  // Function to handle logout
  const handleLogout = async () => {
    console.log('first')
    try {
      await signOut(auth);  // Sign out the user
      router.push('/login');  // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="w-[280px]  flex-grow bg-sky-950  pt-8 flex-col justify-between items-center gap-[50px] inline-flex">
      <div className="w-[100px] h-[87.56px] relative">
        <div className="w-[129px] h-[111px] p-2.5 left-[-13px] top-[-9px] absolute bg-white bg-opacity-10 blur-[100px]" />
        <div className="left-0 top-0 absolute flex-col justify-start items-center gap-[0.47px] inline-flex">
          <Image alt="logo" width={71.09} height={71.09} src={Logo} />
          <div className="text-yellow-400 text-sm font-semibold font-['Montserrat'] tracking-tight">The Best of Us</div>
        </div>
      </div>
      <div className="self-stretch h-auto px-4 flex-col justify-start items-start gap-1 mb-auto flex">
        <div onClick={() => setPage(1)} className={`self-stretch cursor-pointer grow shrink basis-0 px-3 py-2 ${page === 1 && 'bg-gray-300 rounded-md'}  justify-start items-center gap-[105px] inline-flex`}>
          <div className="justify-start items-center gap-3 flex">
            <div className="w-6 h-6 relative" />
            <div className={`${page === 1 ? 'text-zinc-800' : 'text-neutral-100'} text-base font-medium font-['Montserrat'] leading-normal`}>Dashboard</div>
          </div>
        </div>
        <div onClick={() => setPage(2)} className={`self-stretch cursor-pointer grow shrink basis-0 px-3 py-2 ${page === 2 && 'bg-gray-300 rounded-md'}  justify-start items-center gap-[105px] inline-flex`}>
          <div className={"justify-start items-center cursor-pointer gap-3 flex"}>
            <div className="w-6 h-6 p-0.5 justify-center items-center flex">
              <div className="w-5 h-5 relative"></div>
            </div>
            <div className={`${page === 2 ? 'text-zinc-800' : 'text-neutral-100'} text-base font-medium font-['Montserrat'] leading-normal`}>Content Management</div>
          </div>
        </div>
      </div>

      {/* End */}
      <div className="flex mt-[150px] gap-[24px] py-[32px] px-[16px] justify-between items-center flex-col">
        <div className="w-[248px] px-[12px] py-[15px] h-[40px] flex justify-between items-center rounded-[6px]">
          <div className="flex w-full h-full items-center gap-[12px] justify-start">
            {/* <img src={avatar} alt="User" /> */}
            <div className="flex flex-col justify-between items-start">
              <span className="text-[14px] text-[#fff] font-montserrat font-medium leading-[20px]">Admin</span>
              <span className="text-[14px] text-[#939393] font-roboto font-normal leading-[20px]">admin@procto.com</span>
            </div>
          </div>
          {/* Logout Button */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleLogout} // Handle logout on click
            className="cursor-pointer" // Add cursor-pointer for better UX
          >
            <path
              d="M15.5 25.5H12.1667C11.7246 25.5 11.3007 25.3244 10.9882 25.0118C10.6756 24.6993 10.5 24.2754 10.5 23.8333V12.1667C10.5 11.7246 10.6756 11.3007 10.9882 10.9882C11.3007 10.6756 11.7246 10.5 12.1667 10.5H15.5M21.3333 22.1667L25.5 18M25.5 18L21.3333 13.8333M25.5 18H15.5"
              stroke="#F5F5F5"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DashNavBar;
