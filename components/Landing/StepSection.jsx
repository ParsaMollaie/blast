import React from "react";
import { GoSignIn } from "react-icons/go";
import ArrowHigh from "./ArrowHigh";
import ArrowLow from "./ArrowLow";
import { IoFitnessSharp } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { TbDeviceAnalytics, TbReportAnalytics } from "react-icons/tb";
import { enToFaNumber } from "utils/utils";

const StepSection = () => {
  return (
    <div id="blastStep" className="container mx-auto pt-20 py-2 rtl">
      <div className="font-bold flex flex-col gap-6 items-center text-center">
        <h2 className="md:text-4xl sm:text-3xl text-2xl text-white">
          همین الان شروع کن
        </h2>
        <p className="font-light text-slate-300 tracking-wider px-2 sm:px-0">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده
        </p>
      </div>
      {/* flex flex-row justify-center 2xl:gap-5 md:gap-4 gap-2 items-center w-full */}
      <div className="grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-7 2xl:gap-5 md:gap-4 gap-8 w-full pt-16">
        {/* first step */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 2xl:w-48 2xl:h-48 lg:w-40 lg:h-40 md:w-36 md:h-36 w-28 h-28 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                {enToFaNumber(1)}
              </div>
              <div className="absolute flex justify-center items-center text-white">
                <GoSignIn size={50} />
              </div>
            </div>
          </div>
          <p className="text-white text-sm md:text-lg">ثبت نام</p>
        </div>
        {/* first arrow */}
        <div className="transform opacity-50 -rotate-90 md:rotate-0 hidden 2xl:block 2xl:mt-7 mt-0">
          <ArrowHigh />
        </div>
        {/* second step */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 2xl:w-48 2xl:h-48 lg:w-40 lg:h-40 md:w-36 md:h-36 w-28 h-28 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                {enToFaNumber(2)}
              </div>
              <div className="absolute flex justify-center items-center text-white">
                <SlNote size={50} />
              </div>
            </div>
          </div>
          <p className="text-white text-sm md:text-lg">برنامه مطابق با شما</p>
        </div>
        {/* second arrow */}
        <div className="transform opacity-50 -rotate-90 md:rotate-0 hidden 2xl:block 2xl:mt-16 mt-0">
          <ArrowLow />
        </div>

        {/* third step */}

        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 2xl:w-48 2xl:h-48 lg:w-40 lg:h-40 md:w-36 md:h-36 w-28 h-28 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                {enToFaNumber(3)}
              </div>
              <div className="absolute flex justify-center items-center text-white">
                <TbDeviceAnalytics size={50} />
              </div>
            </div>
          </div>
          <p className="text-white text-sm md:text-lg">آنالیز بدن</p>
        </div>
        {/* third arrow */}
        <div className="transform opacity-50 -rotate-90 md:rotate-0 hidden 2xl:block 2xl:mt-7 mt-0">
          <ArrowHigh />
        </div>

        {/* fourth step */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 2xl:w-48 2xl:h-48 lg:w-40 lg:h-40 md:w-36 md:h-36 w-28 h-28 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                {enToFaNumber(4)}
              </div>
              <div className="absolute flex justify-center items-center text-white">
                <IoFitnessSharp size={50} />
              </div>
            </div>
          </div>
          <p className="text-white text-sm md:text-lg">فیتنس</p>
        </div>
      </div>
      <div className="flex justify-center pt-12">
        <p className="tracking-wider font-light text-sm rtl text-slate-300 w-[80%] leading-loose rtl text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است،{" "}
          <span className="font-bold text-pink-600">کلمات مهم</span> و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
          باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
          جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
          طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
          <span className="font-bold text-pink-600">کلمات مهم</span> ایجاد کرد،
          در این صورت می توان امید داشت که تمام و دشواری موجود
          <span className="font-bold text-pink-600">کلمات مهم</span> در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
          دستاوردهای اصلی، و جوابگوی سوالات پیوسته{" "}
          <span className="font-bold text-pink-600">کلمات مهم</span>اهل موجود
          طراحی مورد استفاده قرار گیرد.
        </p>
      </div>
      <div className="flex justify-center pt-12">
        <button className="flex flex-row gap-4 text-white group border-2 px-6 py-4 my-2  items-center rounded-bl-lg rounded-tr-lg hover:bg-pink-600 hover:border-pink-600 ">
          آنالیز بدن
          <TbReportAnalytics size={30} />
        </button>
      </div>
    </div>
  );
};

export default StepSection;
