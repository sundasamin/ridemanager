import React from "react";

import logo from "../assets/images/logo/logo.svg";
import search from "../assets/images/logo/search.svg";
import notification from "../assets/images/logo/notification.svg";
import userdp from "../assets/images/logo/userdp.svg";

export default function Header() {
  return (
    <>
      <header className="bg-[#E92928] py-1 pb-3 px-24  h-[98px] w-full text-xl font-medium text-white flex items-center justify-between">
      
        <div className="leftpart flex">
          <img src={logo} alt="logo"  />

          <div className="logo border-2 border-white rounded-lg px-1 py-0 m-0 text-[28px] font-normal text-center">AirDrive</div>
        </div>

        <div className="rightpart flex items-center ">
          <div className="sreachbox relative">
           
            <input type="text" placeholder="Tap to search" className=" bg-[#8B0E0E] w-[325px] h-[38px] mx-4 text-white placeholder-white placeholder:text-sm placeholder:font-medium font-medium text-base p-1  pl-8 border-2 border-transparent rounded-3xl focus:border-2 focus:outline-none  focus:border-gray-400 " />
            <button>  <img src={search} alt="" className="absolute top-2 left-6  " /> </button>
          </div>

          <div className="notificationArea relative">
            <span className="notificationCount"></span>

                      <a href="#"> 
                      <span className="dot text-[#E92928] text-[10px] leading-[20px] font-medium text-center   absolute top-0 left-3"> 1</span>
                      </a>        
                      <img src={notification} alt="" className=" w-7 h-7 mt-[6px]" />
          </div>

          <div className="admin flex ml-4">
            <div className="admName flex flex-col items-center mr-2 leading-3">
              <span className="text-base font-semibold"> John Doe</span>
              <span className="text-[9px] font-medium">Air Drive Admin</span>
            </div>
            <img src={userdp} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}
