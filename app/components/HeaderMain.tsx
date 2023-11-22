import React from 'react';
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { MdOutlineComment } from "react-icons/md";
const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-4">
    <div className="container sm:flex justify-between items-center">
      <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
       Mine
      </div>

      <div className="w-full sm:w-[300px] md:w-[70%] relative">
        <input
          className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline
           outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-amber-600	 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          type="text"
          placeholder="Enter any product name..."
        />

        <BsSearch
          className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
          size={20}
        />
      </div>

      <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
        <BiUser />

        <div className="relative">
          <FiHeart />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>

        <div className="relative">
        <MdOutlineComment />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeaderMain;