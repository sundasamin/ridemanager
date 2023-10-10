import React from "react";
import dashboard from "../assets/images/asideicons/dash.svg";
import drivermanagement from "../assets/images/asideicons/drivermanagement.svg";
import customermanagement from "../assets/images/asideicons/customermanagement.svg";
import pricing from "../assets/images/asideicons/pricingmanagement.svg";
import financial from "../assets/images/asideicons/financialreports.svg";

export default function Aside() {
  return (
    <>
      <div className="aside max-w-[173px] h-[903px] text-[12px] mx-5 pt-4 rounded-3xl text-[#A3AED0] font-semibold leading-normal  bg-white flex flex-col items-center content text-center">
        <div className="dashboard min-w-[173px] flex flex-col justify-center items-center border border-transparent py-[21px] px-[23px] hover:bg-[#E92928] hover:py-[21px] hover:px-[23px] rounded-3xl hover:text-white">
        <button className="pb-[17px] ">
            <img src={dashboard} alt="" className="h-6 w-6   " />
          </button>

          <span>Dashboard</span>
        </div>

        <div className="drimanagement min-w-[173px] flex flex-col justify-center items-center border border-transparent py-[21px] px-[12px] hover:bg-[#E92928] hover:py-[21px] hover:px-[12px] rounded-3xl hover:text-white">
          <button className="pb-[17px] ">
            <img src={drivermanagement} alt="" className="h-6 w-6 " />
          </button>
          <span>Driver Management</span>
        </div>

        <div className="custmanagement min-w-[173px] m-0 flex flex-col justify-center items-center border border-transparent py-[21px] px-[5px] hover:bg-[#E92928] hover:py-[21px] hover:px-[5px] rounded-3xl hover:text-white">
          <button className="pb-[17px] ">
            <img src={customermanagement} alt="" className="h-6 w-6  " />
          </button>
          <span >Customer Management</span>
        </div>

        <div className="pricing min-w-[173px] flex flex-col justify-center items-center border border-transparent py-[21px] px-[5px] hover:bg-[#E92928] hover:py-[21px] hover:px-[5px] rounded-3xl hover:text-white">
        <button className="pb-[17px] ">
            <img src={pricing} alt="" className="h-6 w-6" />
          </button>
          <span>Pricing Management</span>
        </div>

        <div className="financial min-w-[173px] flex flex-col justify-center items-center border border-transparent py-[21px] px-[23px] hover:bg-[#E92928] hover:py-[21px] hover:px-[23px] rounded-3xl hover:text-white">
        <button className="pb-[17px] ">
            <img src={financial} alt="" className="h-6 w-6" />
          </button>
          <span>Financial Reports</span>
        </div>
      </div>
    </>
  );
}
