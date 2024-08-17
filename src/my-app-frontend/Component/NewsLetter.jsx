import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";

export const NewsLetter = () => {
  const mail = "customer@akafta-inc-com"
  return (
    <div className=" w-full py-6 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <p className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {" "}
            Customer Service: {mail}{" "}
          </p>
          <p className="p"> <FaWhatsappSquare/> +234 8147462662 </p>
        </div>
        <div className="my-4">
          <div className=" flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-[black]">
              {" "}
              Subsrcibe {" "}
            </button>
          </div>
          <p>
            {" "}
            We can about your Data.Read our{" "}
            <span className=" text-[#00df9a]"> privacy policy.</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
