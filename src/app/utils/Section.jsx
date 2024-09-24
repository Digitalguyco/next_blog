import { useState } from "react";


function Section({ children }) {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const menu = [
    {
      name: "Top Articles",
      path: "/toparticles",
      title: "Top Articles",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 15V9C18 6.17157 18 4.75736 17.1213 3.87868C16.2426 3 14.8284 3 12 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M6 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 16H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 8H19C20.4142 8 21.1213 8 21.5607 8.43934C22 8.87868 22 9.58579 22 11V19C22 20.1046 21.1046 21 20 21C18.8954 21 18 20.1046 18 19V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Trending",

      path: "",
      title: "Trending",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.9634 13.1335L13.9075 11.0043C13.7636 10.7079 13.3796 10.4236 13.0556 10.3691L11.1418 10.0485C9.918 9.8429 9.63 8.9476 10.5119 8.0645L11.9997 6.5644C12.2517 6.3103 12.3897 5.8204 12.3117 5.4695L11.8858 3.6125C11.5498 2.1426 12.3237 1.574 13.6136 2.3422L15.4074 3.4129C15.7313 3.6065 16.2653 3.6065 16.5952 3.4129L18.389 2.3422C19.6729 1.574 20.4528 2.1487 20.1168 3.6125L19.6909 5.4695C19.6129 5.8204 19.7509 6.3103 20.0029 6.5644L21.4907 8.0645C22.3666 8.9476 22.0846 9.8429 20.8608 10.0485L18.947 10.3691C18.629 10.4236 18.2451 10.7079 18.1011 11.0043L17.0452 13.1335C16.4692 14.2888 15.5333 14.2888 14.9634 13.1335Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M2 22L10 14M8 22L13 17M4 14L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "People",

      path: "/individual",
      title: "People",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.774 18C21.5233 18 22.1193 17.5285 22.6545 16.8691C23.7499 15.5194 21.9513 14.4408 21.2654 13.9126C20.568 13.3756 19.7894 13.0714 19 13M18 11C19.3807 11 20.5 9.88071 20.5 8.5C20.5 7.11929 19.3807 6 18 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M3.22596 18C2.47666 18 1.88067 17.5285 1.34555 16.8691C0.250087 15.5194 2.04867 14.4408 2.73465 13.9126C3.43197 13.3756 4.21058 13.0714 5 13M5.5 11C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.0838 15.1112C7.06203 15.743 4.38299 17.0331 6.0147 18.6474C6.81178 19.436 7.69952 20 8.81563 20H15.1844C16.3005 20 17.1882 19.436 17.9853 18.6474C19.617 17.0331 16.938 15.743 15.9162 15.1112C13.5201 13.6296 10.4799 13.6296 8.0838 15.1112Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: "Places",

      path: "/place",
      title: "Places",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];
  //   const handleMenuItemClick = (index) => {
  //     setActiveMenuItem(index); // Set active menu item index
  //   };
  return (
    <>
      <div className="flex-col xl:w-[1302px]  w-[85%] justify-start  items-start  gap-[90px] flex">
        <div className=" w-full gap-[100px] lg:gap-[50px] whitespace-nowrap    h-[90px] xl:overflow-x-hidden  overflow-x-scroll px-[50px] pt-[30px] border-b border-b-neutral-400 justify-between items-center flex">
          {menu.map((item, id) => (
            <div
              title={item.title}
              path={item.path}
              className={`justify-center  flex items-center gap-[10px] text-lg font-normal font-montserrat tracking-tight ${activeMenuItem === id ? "text-green-500 border-b-green-500 border-b w-fit pb-[30px] " : " pb-[30px] text-sky-950"}`}
              key={id}
              onClick={() => {
                setActiveMenuItem(id);
              }}
            >
              {" "}
              {item.icon} {item.name}{" "}
            </div>
          ))}
        </div>
        <main>{children && children[activeMenuItem]} </main>
      </div>
    </>
  );
}

export default Section;
