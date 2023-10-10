import React from "react";
import samdp from "../assets/images/newbooking/sam.svg";
import ibiza from "../assets/images/newbooking/ibiza.svg";
import jhon from "../assets/images/newbooking/jhon.svg";
import location from "../assets/images/newbooking/location.svg";
import iconroute from "../assets/images/newbooking/ic_route.svg";
import van from "../assets/images/newbooking/van.svg";
import suv from "../assets/images/newbooking/suv.svg";

export default function NewBookings() {
  return (
    <>
  <div className="newBookings">
   
    <h1 className="text-white text-[20px] leading-[32px] font-bold tracking-[-0.4px]">New Bookings</h1>

 
      <div className="cards mt-4  grid grid-cols-3 grid-rows-2 gap-x-[12rem] gap-y-[2rem]">
        <div className="card1 bg-white w-[347px] h-[277px] border border-transparent rounded-xl py-6 px-6 ">
          <div className="heading flex items-center justify-between ">
            <div className="profile flex items-start justify-between">
              <img src={samdp} alt="" />
              <div className="driverInfo flex flex-col items-start  pt-1 pl-2 gap-2 text-[10px] leading-3 font-semibold">
                <span className="driName ">Sam Weaving</span>
                <span className="driId">**** **** **** 2345</span>
              </div>
              <div className="location flex items-center pl-24">
                <img src={location} alt="" className="w-[9px] h-[9px]"/>
                <span className="pl-1  text-[10px] font-medium">Poland</span>
              </div>
            </div>
          </div>

          <div className="bookingInfo max-w-[220px] grid grid-cols-2 gap-0 text-[10px] leading-3">
            <div className="date grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Date</span>
              <span className="font-semibold text-black">4 Sept 2023</span>
            </div>

            <div className="vehicle grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Vehicle Type</span>
              <span className="font-semibold text-black">Air Mini</span>
            </div>

            <div className="time grid grid-cols-1 pb-6 ">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Time</span>
              <span className="font-semibold text-black">10:00 AM</span>
            </div>

            <div className="price grid grid-cols-1 pb-6">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Total</span>
              <span className="font-semibold text-black">$100</span>
            </div>
          </div>

        
<div className="relative">
          <div className=" tofrom flex gap-2">
            <img src={iconroute} alt="" />

            <div className="flex flex-col justify-between gap-2">
              <span>Gorzow</span>
              <span>Berlin Airport</span>
            </div>
            </div>

            <div className="carIcon absolute top-[-3rem] left-36">
              <span className="hover-badge relative m-20">
                <span className=" relative right-4 top-2 z-10 text-white font-bold text-[10px] leading-[10px] " >Assign Driver</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="87"
                  height="49"
                  viewBox="0 0 87 49"
                  fill="none"
                  className="absolute top-0 left-[-1.5rem]"
                >
                  <path
                    d="M0 7.02832C0 3.14669 3.14668 0 7.02831 0H79.9717C83.8533 0 87 3.14668 87 7.02831V35.0769C87 38.9586 83.8533 42.1053 79.9717 42.1053H57.8825C52.8312 42.1053 48.0498 44.385 44.8698 48.3096C44.1642 49.1803 42.8358 49.1803 42.1302 48.3096C38.9502 44.385 34.1688 42.1053 29.1175 42.1053H7.02832C3.14669 42.1053 0 38.9586 0 35.077V7.02832Z"
                    fill="#E92928"
                  />
                </svg>
              </span>
              <img src={van} alt="" className="h-[72px] w-[202px]" />
            </div>
            </div>
        </div>
        <div className="card2 bg-white w-[347px] h-[277px] border border-transparent rounded-xl py-6 px-6 ">
          <div className="heading flex items-center justify-between ">
            <div className="profile flex items-start justify-between">
              <img src={ibiza} alt="" />
              <div className="driverInfo flex flex-col items-start  pt-1 pl-2 gap-2 text-[10px] leading-3 font-semibold">
                <span className="driName ">Ibiza Froster</span>
                <span className="driId">**** **** **** 2345</span>
              </div>
              <div className="location flex items-center pl-24">
                <img src={location} alt="" className="w-[9px] h-[9px]"/>
                <span className="pl-1  text-[10px] font-medium">Poland</span>
              </div>
            </div>
          </div>

          <div className="bookingInfo max-w-[220px] grid grid-cols-2 gap-0 text-[10px] leading-3">
            <div className="date grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Date</span>
              <span className="font-semibold text-black">4 Sept 2023</span>
            </div>

            <div className="vehicle grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Vehicle Type</span>
              <span className="font-semibold text-black">Air Mini</span>
            </div>

            <div className="time grid grid-cols-1 pb-6 ">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Time</span>
              <span className="font-semibold text-black">10:00 AM</span>
            </div>

            <div className="price grid grid-cols-1 pb-6">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Total</span>
              <span className="font-semibold text-black">$100</span>
            </div>
          </div>

        
<div className="relative">
          <div className=" tofrom flex gap-2">
            <img src={iconroute} alt="" />

            <div className="flex flex-col justify-between gap-2">
              <span>Gorzow</span>
              <span>Berlin Airport</span>
            </div>
            </div>

            <div className="carIcon absolute top-[-3rem] left-36">
              <span className="hover-badge relative m-20">
                <span className=" relative right-4 top-2 z-10 text-white font-bold text-[10px] leading-[10px] " >Assign Driver</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="87"
                  height="49"
                  viewBox="0 0 87 49"
                  fill="none"
                  className="absolute top-0 left-[-1.5rem]"
                >
                  <path
                    d="M0 7.02832C0 3.14669 3.14668 0 7.02831 0H79.9717C83.8533 0 87 3.14668 87 7.02831V35.0769C87 38.9586 83.8533 42.1053 79.9717 42.1053H57.8825C52.8312 42.1053 48.0498 44.385 44.8698 48.3096C44.1642 49.1803 42.8358 49.1803 42.1302 48.3096C38.9502 44.385 34.1688 42.1053 29.1175 42.1053H7.02832C3.14669 42.1053 0 38.9586 0 35.077V7.02832Z"
                    fill="#E92928"
                  />
                </svg>
              </span>
              <img src={suv} alt="" className="h-[70px] w-[195px]" />
            </div>
            </div>
        </div>
        <div className="card3 bg-white w-[347px] h-[277px] border border-transparent rounded-xl py-6 px-6 ">
          <div className="heading flex items-center justify-between ">
            <div className="profile flex items-start justify-between">
              <img src={jhon} alt="" />
              <div className="driverInfo flex flex-col items-start  pt-1 pl-2 gap-2 text-[10px] leading-3 font-semibold">
                <span className="driName ">John Doe</span>
                <span className="driId">**** **** **** 2345</span>
              </div>
              <div className="location flex items-center pl-24">
                <img src={location} alt="" className="w-[9px] h-[9px]"/>
                <span className="pl-1  text-[10px] font-medium">Poland</span>
              </div>
            </div>
          </div>

          <div className="bookingInfo max-w-[220px] grid grid-cols-2 gap-0 text-[10px] leading-3">
            <div className="date grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Date</span>
              <span className="font-semibold text-black">4 Sept 2023</span>
            </div>

            <div className="vehicle grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Vehicle Type</span>
              <span className="font-semibold text-black">Air Mini</span>
            </div>

            <div className="time grid grid-cols-1 pb-6 ">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Time</span>
              <span className="font-semibold text-black">10:00 AM</span>
            </div>

            <div className="price grid grid-cols-1 pb-6">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Total</span>
              <span className="font-semibold text-black">$100</span>
            </div>
          </div>

        
<div className="relative">
          <div className=" tofrom flex gap-2">
            <img src={iconroute} alt="" />

            <div className="flex flex-col justify-between gap-2">
              <span>Gorzow</span>
              <span>Berlin Airport</span>
            </div>
            </div>

            <div className="carIcon absolute top-[-3rem] left-36">
              <span className="hover-badge relative m-20">
                <span className=" relative right-4 top-2 z-10 text-white font-bold text-[10px] leading-[10px] " >Assign Driver</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="87"
                  height="49"
                  viewBox="0 0 87 49"
                  fill="none"
                  className="absolute top-0 left-[-1.5rem]"
                >
                  <path
                    d="M0 7.02832C0 3.14669 3.14668 0 7.02831 0H79.9717C83.8533 0 87 3.14668 87 7.02831V35.0769C87 38.9586 83.8533 42.1053 79.9717 42.1053H57.8825C52.8312 42.1053 48.0498 44.385 44.8698 48.3096C44.1642 49.1803 42.8358 49.1803 42.1302 48.3096C38.9502 44.385 34.1688 42.1053 29.1175 42.1053H7.02832C3.14669 42.1053 0 38.9586 0 35.077V7.02832Z"
                    fill="#E92928"
                  />
                </svg>
              </span>
              <img src={van} alt="" className="h-[72px] w-[202px]" />
            </div>
            </div>
        </div>
        <div className="card4 bg-white w-[347px] h-[277px] border border-transparent rounded-xl py-6 px-6 ">
          <div className="heading flex items-center justify-between ">
            <div className="profile flex items-start justify-between">
              <img src={samdp} alt="" />
              <div className="driverInfo flex flex-col items-start  pt-1 pl-2 gap-2 text-[10px] leading-3 font-semibold">
                <span className="driName ">Sam Weaving</span>
                <span className="driId">**** **** **** 2345</span>
              </div>
              <div className="location flex items-center pl-24">
                <img src={location} alt="" className="w-[9px] h-[9px]"/>
                <span className="pl-1  text-[10px] font-medium">Poland</span>
              </div>
            </div>
          </div>

          <div className="bookingInfo max-w-[220px] grid grid-cols-2 gap-0 text-[10px] leading-3">
            <div className="date grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Date</span>
              <span className="font-semibold text-black">4 Sept 2023</span>
            </div>

            <div className="vehicle grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Vehicle Type</span>
              <span className="font-semibold text-black">Air Mini</span>
            </div>

            <div className="time grid grid-cols-1 pb-6 ">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Time</span>
              <span className="font-semibold text-black">10:00 AM</span>
            </div>

            <div className="price grid grid-cols-1 pb-6">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Total</span>
              <span className="font-semibold text-black">$100</span>
            </div>
          </div>

        
<div className="relative">
          <div className=" tofrom flex gap-2">
            <img src={iconroute} alt="" />

            <div className="flex flex-col justify-between gap-2">
              <span>Gorzow</span>
              <span>Berlin Airport</span>
            </div>
            </div>

            <div className="carIcon absolute top-[-3rem] left-36">
              <span className="hover-badge relative m-20">
                <span className=" relative right-4 top-2 z-10 text-white font-bold text-[10px] leading-[10px] " >Assign Driver</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="87"
                  height="49"
                  viewBox="0 0 87 49"
                  fill="none"
                  className="absolute top-0 left-[-1.5rem]"
                >
                  <path
                    d="M0 7.02832C0 3.14669 3.14668 0 7.02831 0H79.9717C83.8533 0 87 3.14668 87 7.02831V35.0769C87 38.9586 83.8533 42.1053 79.9717 42.1053H57.8825C52.8312 42.1053 48.0498 44.385 44.8698 48.3096C44.1642 49.1803 42.8358 49.1803 42.1302 48.3096C38.9502 44.385 34.1688 42.1053 29.1175 42.1053H7.02832C3.14669 42.1053 0 38.9586 0 35.077V7.02832Z"
                    fill="#E92928"
                  />
                </svg>
              </span>
              <img src={van} alt="" className="h-[72px] w-[202px]" />
            </div>
            </div>
        </div>
        <div className="card5 bg-white w-[347px] h-[277px] border border-transparent rounded-xl py-6 px-6 ">
          <div className="heading flex items-center justify-between ">
            <div className="profile flex items-start justify-between">
              <img src={ibiza} alt="" />
              <div className="driverInfo flex flex-col items-start  pt-1 pl-2 gap-2 text-[10px] leading-3 font-semibold">
                <span className="driName ">Ibiza Froster</span>
                <span className="driId">**** **** **** 2345</span>
              </div>
              <div className="location flex items-center pl-24">
                <img src={location} alt="" className="w-[9px] h-[9px]"/>
                <span className="pl-1  text-[10px] font-medium">Poland</span>
              </div>
            </div>
          </div>

          <div className="bookingInfo max-w-[220px] grid grid-cols-2 gap-0 text-[10px] leading-3">
            <div className="date grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Date</span>
              <span className="font-semibold text-black">4 Sept 2023</span>
            </div>

            <div className="vehicle grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Vehicle Type</span>
              <span className="font-semibold text-black">Air Mini</span>
            </div>

            <div className="time grid grid-cols-1 pb-6 ">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Time</span>
              <span className="font-semibold text-black">10:00 AM</span>
            </div>

            <div className="price grid grid-cols-1 pb-6">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Total</span>
              <span className="font-semibold text-black">$100</span>
            </div>
          </div>

        
<div className="relative">
          <div className=" tofrom flex gap-2">
            <img src={iconroute} alt="" />

            <div className="flex flex-col justify-between gap-2">
              <span>Gorzow</span>
              <span>Berlin Airport</span>
            </div>
            </div>

            <div className="carIcon absolute top-[-3rem] left-36">
              <span className="hover-badge relative m-20">
                <span className=" relative right-4 top-2 z-10 text-white font-bold text-[10px] leading-[10px] " >Assign Driver</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="87"
                  height="49"
                  viewBox="0 0 87 49"
                  fill="none"
                  className="absolute top-0 left-[-1.5rem]"
                >
                  <path
                    d="M0 7.02832C0 3.14669 3.14668 0 7.02831 0H79.9717C83.8533 0 87 3.14668 87 7.02831V35.0769C87 38.9586 83.8533 42.1053 79.9717 42.1053H57.8825C52.8312 42.1053 48.0498 44.385 44.8698 48.3096C44.1642 49.1803 42.8358 49.1803 42.1302 48.3096C38.9502 44.385 34.1688 42.1053 29.1175 42.1053H7.02832C3.14669 42.1053 0 38.9586 0 35.077V7.02832Z"
                    fill="#E92928"
                  />
                </svg>
              </span>
              <img src={suv} alt="" className="h-[70px] w-[195px]" />
            </div>
            </div>
        </div>
        <div className="card6 bg-white w-[347px] h-[277px] border border-transparent rounded-xl py-6 px-6 ">
          <div className="heading flex items-center justify-between ">
            <div className="profile flex items-start justify-between">
              <img src={jhon} alt="" />
              <div className="driverInfo flex flex-col items-start  pt-1 pl-2 gap-2 text-[10px] leading-3 font-semibold">
                <span className="driName ">John Doe</span>
                <span className="driId">**** **** **** 2345</span>
              </div>
              <div className="location flex items-center pl-24">
                <img src={location} alt="" className="w-[9px] h-[9px]"/>
                <span className="pl-1  text-[10px] font-medium">Poland</span>
              </div>
            </div>
          </div>

          <div className="bookingInfo max-w-[220px] grid grid-cols-2 gap-0 text-[10px] leading-3">
            <div className="date grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Date</span>
              <span className="font-semibold text-black">4 Sept 2023</span>
            </div>

            <div className="vehicle grid grid-cols-1 pt-6 pb-3">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Vehicle Type</span>
              <span className="font-semibold text-black">Air Mini</span>
            </div>

            <div className="time grid grid-cols-1 pb-6 ">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Time</span>
              <span className="font-semibold text-black">10:00 AM</span>
            </div>

            <div className="price grid grid-cols-1 pb-6">
              <span className="font-normal text-[#8A8A8D] pb-2 ">Total</span>
              <span className="font-semibold text-black">$100</span>
            </div>
          </div>

        
<div className="relative">
          <div className=" tofrom flex gap-2">
            <img src={iconroute} alt="" />

            <div className="flex flex-col justify-between gap-2">
              <span>Gorzow</span>
              <span>Berlin Airport</span>
            </div>
            </div>

            <div className="carIcon absolute top-[-3rem] left-36">
              <span className="hover-badge relative m-20">
                <span className=" relative right-4 top-2 z-10 text-white font-bold text-[10px] leading-[10px] " >Assign Driver</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="87"
                  height="49"
                  viewBox="0 0 87 49"
                  fill="none"
                  className="absolute top-0 left-[-1.5rem]"
                >
                  <path
                    d="M0 7.02832C0 3.14669 3.14668 0 7.02831 0H79.9717C83.8533 0 87 3.14668 87 7.02831V35.0769C87 38.9586 83.8533 42.1053 79.9717 42.1053H57.8825C52.8312 42.1053 48.0498 44.385 44.8698 48.3096C44.1642 49.1803 42.8358 49.1803 42.1302 48.3096C38.9502 44.385 34.1688 42.1053 29.1175 42.1053H7.02832C3.14669 42.1053 0 38.9586 0 35.077V7.02832Z"
                    fill="#E92928"
                  />
                </svg>
              </span>
              <img src={van} alt="" className="h-[72px] w-[202px]" />
            </div>
            </div>
        </div>

      </div>

      </div>
    </>
  );
}
