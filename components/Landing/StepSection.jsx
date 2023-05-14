import React from "react";
import { GoSignIn } from "react-icons/go";
import ArrowHigh from "./ArrowHigh";
import ArrowLow from "./ArrowLow";
import { IoFitnessSharp } from "react-icons/io5";
import { SlNote } from "react-icons/sl";

const StepSection = () => {
  return (
    <div id="blastStep" className="container mx-auto pt-20 rtl">
      <div className="font-bold text-4xl text-white text-center">
        <h1>همین الان شروع کن</h1>
      </div>
      <div className="flex md:flex-row md:gap-4 flex-col justify-center gap-32 items-center w-full pt-16">
        {/* first step */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 w-48 h-48 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                1
              </div>
              <div className="absolute flex justify-center items-center text-white">
                <GoSignIn size={50} />
              </div>
            </div>
          </div>
          <p className="text-white">ثبت نام</p>
        </div>
        {/* first arrow */}
        <div className="transform -rotate-90 md:rotate-0">
          <ArrowHigh />
        </div>
        {/* second step */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 w-48 h-48 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                2
              </div>
              <div className="absolute flex justify-center items-center text-white">
                <SlNote size={50} />
              </div>
            </div>
          </div>
          <p className="text-white">برنامه مطابق با شما</p>
        </div>
        <div className="transform -rotate-90 md:rotate-0 ">
          <ArrowLow />
        </div>

        {/* third step */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 w-48 h-48 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                3
              </div>
              <div className="absolute flex justify-center items-center text-white">
                <IoFitnessSharp size={50} />
              </div>
            </div>
          </div>
          <p className="text-white">فیتنس</p>
        </div>
      </div>
      <div className="flex justify-center pt-12">
        <button className="text-white group border-2 px-6 py-4 my-2 flex items-center rounded-bl-lg rounded-tr-lg hover:bg-pink-600 hover:border-pink-600 ">
          شروع کن!
        </button>
      </div>
    </div>
  );
};

export default StepSection;
