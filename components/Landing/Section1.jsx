import React from "react";
import researchImg from "../../public/images/research.png";
import fitnessImg from "../../public/images/fitness.png";
import increaseWieghtImg from "../../public/images/increasewieght.png";
import loseWieghtImg from "../../public/images/losewieght.png";
import muscleBuildingImg from "../../public/images/MuscleBuilding.png";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="container mx-auto pt-20 rtl">
      <div className="flex justify-around flex-col items-center w-full">
        <div className="flex flex-col justify-center gap-6 text-center text-white">
          <h2 className="font-bold md:text-5xl sm:text-3xl text-2xl ">
            با برنامه جلو برو
          </h2>
          <p className="sm:text-3xl text-xl">
            با <span className="text-pink-600 font-bold">بلست</span> شروع کن
          </p>
          <p className="font-light sm:text-base text-sm text-slate-300 tracking-wider">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-12 mt-14">
          <div className="flex flex-col items-center justify-center gap-4 bg-white md:w-52 md:h-60 sm:w-40 sm:h-52 w-32 h-40 rounded-2xl  shadow-lg shadow-slate-400/50">
            <Image
              src={loseWieghtImg}
              className="md:w-16 md:h-14 sm:w-12 sm:h-10 w-10 h-10"
            />
            <p className="text-black md:font-bold sm:font-medium">کاهش وزن</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-white md:w-52 md:h-60 sm:w-40 sm:h-52 w-32 h-40  rounded-2xl  shadow-lg shadow-slate-400/50">
            <Image
              src={increaseWieghtImg}
              className="md:w-16 md:h-14 sm:w-12 sm:h-10 w-10 h-10"
            />
            <p className="text-black md:font-bold sm:font-medium">افزایش وزن</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-white md:w-52 md:h-60 sm:w-40 sm:h-52 w-32 h-40 rounded-2xl  shadow-lg shadow-slate-400/50">
            <Image
              src={muscleBuildingImg}
              className="md:w-16 md:h-14 sm:w-12 sm:h-10 w-10 h-10"
            />
            <p className="text-black md:font-bold sm:font-medium">عضله سازی</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-white md:w-52 md:h-60 sm:w-40 sm:h-52 w-32 h-40 rounded-2xl  shadow-lg shadow-slate-400/50">
            <Image
              src={fitnessImg}
              className="md:w-16 md:h-14 sm:w-12 sm:h-10 w-10 h-10"
            />
            <p className="text-black md:font-bold sm:font-medium">فیتنس</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-white md:w-52 md:h-60 sm:w-40 sm:h-52 w-32 h-40 rounded-2xl  shadow-lg shadow-slate-400/50">
            <Image
              src={researchImg}
              className="md:w-16 md:h-14 sm:w-12 sm:h-10 w-10 h-10"
            />
            <p className="text-black md:font-bold sm:font-medium">آنالیز</p>
          </div>
        </div>
        {/* Cards */}
        {/* <div className="flex flex-col gap-20 pt-8 md:flex-row">
          <div className="w-44 h-64  mt-4 card">
            <div className="w-44 h-64 relative card2">
              <div className="p-4 absolute flex flex-col justify-center items-center group top-0 right-0 bottom-0 left-0 gap-4">
                <p className="text-white text-center block group-hover:hidden">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با صان را می طلبا
                </p>
                <p className="text-white hidden cursor-pointer group-hover:block">
                  <FaInstagram size={40} className="z-10" />
                </p>
                <button className="border px-4 py-4 rounded-full mt-3 text-white hidden group-hover:block group-hover:border-pink-600 group-hover:bg-pink-600">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>

          <div className="w-44 h-64  mt-4 card">
            <div className="w-44 h-64 relative card2">
              <div className="p-4 absolute flex flex-col justify-center items-center group top-0 right-0 bottom-0 left-0 gap-4">
                <p className="text-white text-center block group-hover:hidden">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با صان را می طلبا
                </p>
                <p className="text-white hidden cursor-pointer group-hover:block">
                  <FaInstagram size={40} className="z-10" />
                </p>
                <button className="border px-4 py-4 rounded-full mt-3 text-white hidden group-hover:block group-hover:border-pink-600 group-hover:bg-pink-600">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>

          <div className="w-44 h-64  mt-4 card">
            <div className="w-44 h-64 relative card2">
              <div className="p-4 absolute flex flex-col justify-center items-center group top-0 right-0 bottom-0 left-0 gap-4">
                <p className="text-white text-center block group-hover:hidden">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با صان را می طلبا
                </p>
                <p className="text-white hidden cursor-pointer group-hover:block">
                  <FaInstagram size={40} className="z-10" />
                </p>
                <button className="border px-4 py-4 rounded-full mt-3 text-white hidden group-hover:block group-hover:border-pink-600 group-hover:bg-pink-600">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>

          <div className="w-44 h-64  mt-4 card">
            <div className="w-44 h-64 relative card2">
              <div className="p-4 absolute flex flex-col justify-center items-center group top-0 right-0 bottom-0 left-0 gap-4">
                <p className="text-white text-center block group-hover:hidden">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با صان را می طلبا
                </p>
                <p className="text-white hidden cursor-pointer group-hover:block">
                  <FaInstagram size={40} className="z-10" />
                </p>
                <button className="border px-4 py-4 rounded-full mt-3 text-white hidden group-hover:block group-hover:border-pink-600 group-hover:bg-pink-600">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="flex md:flex-row flex-col justify-center items-center gap-36 py-9">
          <div className="shadow-xl shadow-slate-500/50 rounded-lg bg-white p-2 text-center flex flex-col items-center justify-center gap-5 w-44 h-44">
            <FcCalculator size={50} />
            <p className="text-xl">محاسبه گر</p>
          </div>
          <div className="shadow-xl shadow-slate-500/50 rounded-lg bg-white  p-2 text-center flex flex-col items-center justify-center gap-5 w-44 h-44">
            <FcLike size={50} />
            <p className="text-xl">فیتنس</p>
          </div>
          <div className="shadow-xl shadow-slate-500/50 rounded-lg bg-white p-2 text-center flex flex-col items-center justify-center gap-5 w-44 h-44">
            <FcCustomerSupport size={50} />
            <p className="text-xl">ارتباط با ما</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Section1;
