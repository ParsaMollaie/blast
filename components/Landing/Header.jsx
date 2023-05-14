import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import headerImg from "../../public/images/land.jpg";

const Header = () => {
  return (
    <div className=" rtl relative">
      <Image src={headerImg} className="h-screen w-full" />
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]"></div>
      <div className="flex justify-center items-center  z-[2] absolute top-10 right-0 bottom-0 left-0">
        <div className="flex flex-col gap-6 text-center">
          <h1 className="text-3xl font-bold text-white text-center">
            استراتژی و با برنامه
          </h1>
          <h1 className="text-5xl font-bold text-white">
            اندام ایده آل همین الان بساز
          </h1>
          <h2 className="text-2xl font-bold text-white py-5">
            برنامه تمرین متناسب با خودت
          </h2>
          <p className="text-white py-4 text-xl">
            اینجا ما بهت کمک میکنیم که به اندام ایده آل خودت برسی
          </p>
          <div className=" flex justify-center gap-4">
            <Link href="/#blastStep">
              <button className="text-white group border-2 px-8 py-4 my-2 flex rounded-bl-lg rounded-tr-lg items-center hover:bg-pink-600 hover:border-pink-600 hover:rounded-br-lg hover:rounded-tl-lg hover:rounded-bl-none hover:rounded-tr-none ">
                دریافت برنامه{" "}
                <span className="group-hover:-rotate-90 duration-300">
                  <HiArrowNarrowLeft className="mr-3" />
                </span>
              </button>
            </Link>
            <Link href="/">
              <button className="text-white group border-2 px-8 py-4 my-2 flex rounded-bl-lg rounded-tr-lg items-center hover:bg-pink-600 hover:border-pink-600 hover:rounded-br-lg hover:rounded-tl-lg hover:rounded-bl-none hover:rounded-tr-none ">
                خدمات{" "}
                <span className="text-pink-600 font-bold mr-1 group-hover:text-white">
                  بلست
                </span>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
