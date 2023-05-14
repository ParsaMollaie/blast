import Image from "next/image";
import React from "react";
// import { mobileImg } from "./images/mobile.png";

const CalculatorHeader = () => {
  return (
    <div className="rtl">
      <div className="md:bg-[url('../public/images/calcImg.jpg')] bg-center bg-cover bg-none min-h-[750px] flex justify-center items-center">
        <div className="px-0 md:px-8 flex flex-col-reverse md:flex-row text-center bg-gradient-to-r from-[#c026d3] to-[#db2777] text-black md:text-[#333] rounded-none md:rounded-[50px] w-full md:w-[750px] h-full md:h-[330px] py-24 md:py-0">
          <div className="md:mx-0 mx-auto self-end relative">
            <Image
              src={"/images/mobile.png"}
              alt="Picture of mobile"
              width={550}
              height={550}
            />
            <button className="md:hidden flex bottom-[40px] left-1/2 -translate-y-1/2 -translate-x-1/2 absolute text-black rounded-[50px] bg-white w-[125px] h-[30px] font-bold text-[20px]  justify-center">
              دانلود کنید
            </button>
          </div>
          <div className="px-3 flex flex-col gap-5 py-3 md:py-8  ">
            <h1 className="font-bold text-xl md:text-4xl text-right md:px-0 px-10 ">
              زندگی به سبک بلست!
            </h1>
            <p className="text-[12px] font-light md:text-[22px] text-right  mt-0 md:mt-5 md:px-0 px-16 ">
              بلست برای تناسب‌اندام، تغذیه سالم و پیش‌گیری از بیماری‌ها برنامه
              داره!
            </p>
            <button className="btn-outline-primary">شـروع کن!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorHeader;
