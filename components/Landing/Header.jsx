import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import headerImg from "../../public/images/calcImg.jpg";
import { TbReportAnalytics } from "react-icons/tb";

const Header = () => {
  return (
    <div className="rtl relative">
      <Image src={headerImg} className="h-screen w-full" />
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]"></div>
      <div className="flex justify-center items-center z-[2] absolute top-10 right-0 bottom-0 left-0">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="xl:text-5xl md:text-4xl text-3xl font-bold text-white text-center tracking-wide">
            استراتژی و با برنامه
          </h1>
          <h2 className="xl:text-4xl md:text-4xl sm:text-2xl text-lg font-light pt-1 text-white hidden sm:block">
            اندام ایده آل همین الان بساز
          </h2>
          <h2 className="md:text-2xl text-lg font-light tracking-tight text-slate-300 py-1">
            برنامه تمرین متناسب با خودت
          </h2>
          <p className=" py-1 text-xl text-slate-300 font-light hidden sm:block">
            اینجا ما بهت کمک میکنیم که به اندام ایده آل خودت برسی
          </p>
          <div className="grid lg:grid-cols-7 grid-cols-2 pt-4 lg:gap-4 md:gap-8 gap-4 rtl">
            <div className="lg:col-start-3 col-start-1">
              <button className="text-white group border-2 px-8 py-4 flex rounded-bl-lg rounded-tr-lg items-center hover:bg-pink-600 hover:border-pink-600 hover:duration-500 hover:rounded-br-lg hover:rounded-tl-lg hover:rounded-bl-none hover:rounded-tr-none ">
                دریافت برنامه{" "}
                <span className="group-hover:-rotate-90 duration-300">
                  <HiArrowNarrowLeft className="mr-3" />
                </span>
              </button>
            </div>
            <div>
              <button className="text-white group border-2 px-8 py-4 flex rounded-bl-lg rounded-tr-lg items-center hover:bg-pink-600 hover:border-pink-600 hover:duration-500 hover:rounded-br-lg hover:rounded-tl-lg hover:rounded-bl-none hover:rounded-tr-none ">
                خدمات{" "}
                <span className="text-pink-600 font-bold mr-1 group-hover:text-white">
                  بلست
                </span>{" "}
              </button>
            </div>
            <div className="lg:col-span-1 col-start-1 col-end-2 col-span-2">
              <button className="text-white border-2 px-8 py-4 flex rounded-bl-lg rounded-tr-lg items-center bg-pink-600 border-pink-600 hover:duration-500">
                آنالیز بدن{" "}
                <span className="text-white">
                  <TbReportAnalytics className="mr-3" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
