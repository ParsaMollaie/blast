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
    <div id="blastStep" className="container mx-auto pt-20 rtl">
      <div className="font-bold flex flex-col gap-6 items-center  text-center">
        <h1 className="text-4xl text-white">همین الان شروع کن</h1>
        <p className="font-light text-slate-300 tracking-wider">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده
        </p>
      </div>
      <div className="flex md:flex-row md:gap-4 flex-col justify-center gap-32 items-center w-full pt-16">
        {/* first step */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 lg:w-48 lg:h-48 md:w-40 md:h-40 w-36 h-36 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                {enToFaNumber(1)}
              </div>
              <div className="absolute flex justify-center items-center text-white">
                <GoSignIn size={50} />
              </div>
            </div>
          </div>
          <p className="text-white">ثبت نام</p>
        </div>
        {/* first arrow */}
        <div className="transform opacity-50 -rotate-90 md:rotate-0 sm:hidden block lg:block">
          <ArrowHigh />
        </div>
        {/* second step */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 lg:w-48 lg:h-48 md:w-40 md:h-40 w-36 h-36 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                {enToFaNumber(2)}
              </div>
              <div className="absolute flex justify-center items-center text-white">
                <SlNote size={50} />
              </div>
            </div>
          </div>
          <p className="text-white">برنامه مطابق با شما</p>
        </div>
        {/* second arrow */}
        <div className="transform opacity-50 -rotate-90 md:rotate-0 sm:hidden block lg:block">
          <ArrowLow />
        </div>

        {/* third step */}

        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 lg:w-48 lg:h-48 md:w-40 md:h-40 w-36 h-36 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                {enToFaNumber(3)}
              </div>
              <div className="absolute flex justify-center items-center text-white">
                <TbDeviceAnalytics size={50} />
              </div>
            </div>
          </div>
          <p className="text-white">آنالیز بدن</p>
        </div>
        {/* third arrow */}
        <div className="transform opacity-50 -rotate-90 md:rotate-0 sm:hidden block lg:block">
          <ArrowHigh />
        </div>

        {/* fourth step */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="rounded-full bg-pink-300 lg:w-48 lg:h-48 md:w-40 md:h-40 w-36 h-36 flex items-center justify-center relative">
            <div className="absolute bg-pink-600 w-[80%] h-[80%] rounded-full flex justify-center items-center">
              <div className="absolute bg-green-400 w-[40%] h-[40%] rounded-full flex justify-center items-center font-bold text-white text-2xl -top-7">
                {enToFaNumber(4)}
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
        <p className="tracking-wider font-light text-sm rtl text-slate-300 w-[80%] leading-loose">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
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
