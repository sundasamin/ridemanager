import React from "react";

export default function BookingDetails() {
  return (
    <>
      <div className="bookingDetails w-[1081px] pl-5 pr-1 h-[239px] bg-white border rounded-2xl mt-6 pt-3 ">
        <h1 className=" font-bold text-[17px] text-black">Booking Details</h1>

        <div className="custometable  grid grid-cols-8 grid-rows-1 gap-0 text-[10px] font-bold leading-[20px] justify-center">
          <div className="r1 grid grid-cols-1">
            <h1 className="font-medium text-[#A3AED0]">Customer Name</h1>
            <div className="flex gap-2">
              <input type="checkbox" className="accent-[#E92928]" />
              <label htmlFor="" className="mt-[.3rem]">
                John Doe
              </label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="accent-[#E92928] " checked />
              <label htmlFor="" className="mt-[.3rem]">
                John Doe
              </label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="accent-[#E92928] " checked />
              <label htmlFor="" className="mt-[.3rem]">
                John Doe
              </label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="accent-[#E92928] " checked />
              <label htmlFor="" className="mt-[.3rem]">
                John Doe
              </label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="accent-[#E92928]" />
              <label htmlFor="" className="mt-[.3rem]">
                John Doe
              </label>
            </div>
          </div>
          <div className="r2">
            <h1 className="font-medium text-[#A3AED0] mb-3">Date</h1>
            <div className="flex flex-col gap-[10px]">
              <span>04/09/23</span>
              <span>04/09/23</span>
              <span>04/09/23</span>
              <span>04/09/23</span>
              <span>04/09/23</span>
            </div>
          </div>

          <div className="r3">
            <h1 className="font-medium text-[#A3AED0] mb-3">Time</h1>
            <div className="flex flex-col gap-[10px]">
              <span>10:00 AM</span>
              <span>10:00 AM</span>
              <span>10:00 AM</span>
              <span>10:00 AM</span>
              <span>10:00 AM</span>
            </div>
          </div>
          <div className="r4">
            <h1 className="font-medium text-[#A3AED0] mb-3">Phone</h1>
            <div className="flex flex-col gap-[10px]">
              <span>+00 0000000</span>
              <span>+00 0000000</span>
              <span>+00 0000000</span>
              <span>+00 0000000</span>
              <span>+00 0000000</span>
            </div>
          </div>

          <div className="r5">
            <h1 className="font-medium text-[#A3AED0] mb-3">Pick-up</h1>
            <div className="flex flex-col gap-[10px]">
              <span>Warsaw Airport</span>
              <span>Warsaw Airport</span>
              <span>Warsaw Airport</span>
              <span>Warsaw Airport</span>
              <span>Warsaw Airport</span>
            </div>
          </div>

          <div className="r6">
            <h1 className="font-medium text-[#A3AED0] mb-3">Drop-off</h1>
            <div className="flex flex-col gap-[10px]">
              <span>Warsaw Airport</span>
              <span>Warsaw Airport</span>
              <span>Warsaw Airport</span>
              <span>Warsaw Airport</span>
              <span>Warsaw Airport</span>
            </div>
          </div>

          <div className="r7">
            <h1 className="font-medium text-[#A3AED0] mb-3">Vehicle type</h1>
            <div className="flex flex-col gap-[10px]">
              <span>Air Go</span>
              <span>Air Mini</span>
              <span>Air Business</span>
              <span>Air Go</span>
              <span>Air Go</span>
            </div>
          </div>

          <div className="r8">
            <h1 className="font-medium text-[#A3AED0] mb-3">Payement</h1>
            <div className="flex flex-col  font-bold text-white">
              <span className="bg-[#E52A24]  p-1 w-min  border rounded-md">
                Pending
              </span>
              <span className="bg-[#E52A24] p-1 w-min border rounded-md">
                Pending
              </span>

              <span className="bg-[#00B14F] p-1 w-min border rounded-md">
                Paid
              </span>

              <span className="bg-[#E52A24] p-1 border w-min rounded-md">
                Pending
              </span>

              <span className="bg-[#00B14F] p-1 border w-min rounded-md">
                Paid
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
