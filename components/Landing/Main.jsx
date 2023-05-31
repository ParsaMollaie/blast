import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import landing from "../../public/images/landing.jpg";
import { TbReportAnalytics } from "react-icons/tb";

const Main = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-20 rtl">
      {/* <div className="text-white flex flex-col gap-10 p-8">
        <h1 className="text-4xl text-center">
          چرا <span className="font-bold text-pink-600">بلست</span>؟
        </h1>
        <p className="text-slate-400 text-right ">
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
        <ul className="  text-slate-400 text-right">
          <li>خصوصیات</li>
          <li>خصوصیات</li>
          <li>خصوصیات</li>
          <li>خصوصیات</li>
          <li>خصوصیات</li>
        </ul>
        <div className="flex justify-center pt-12">
          <button className="text-white group border-2 px-6 py-4 my-2 rounded-bl-lg rounded-tr-lg flex items-center hover:bg-pink-600 hover:border-pink-600 ">
            شروع کن!
          </button>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center gap-10 rtl">
        {/* first col */}
        <div className="text-white font-bold tracking-wider ">
          <h1 className="text-4xl text-center">
            چرا <span className="font-bold text-pink-600">بلست</span>؟
          </h1>
        </div>
        {/* second col */}
        <div className="flex flex-row gap-2 items-center justify-center text-sm md:text-lg text-white w-full ">
          <p className="font-light tracking-tighter opacity-100">ثبت نام</p>
          <div className="border-t-2 w-[20%] border-dotted border-slate-500 opacity-50"></div>
          <p className="font-light tracking-tighter opacity-50">آنالیز بدن</p>
          <div className="border-t-2 w-[20%] border-dotted border-slate-500 opacity-50"></div>
          <p className="font-light tracking-tighter opacity-50 ">بدن ایده آل</p>
        </div>
        {/* third col */}
        <div className="flex justify-center items-center w-full p-3">
          <p className="text-slate-500 tracking-tight font-light leading-loose w-[80%]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده،
          </p>
        </div>
        {/* fourth col */}
        <div className="flex justify-center pt-12">
          <button className="flex flex-row gap-4 text-white group border-2 px-6 py-4 my-2  items-center rounded-bl-lg rounded-tr-lg hover:bg-pink-600 hover:border-pink-600 ">
            آنالیز بدن
            <TbReportAnalytics size={30} />
          </button>
        </div>
      </div>
      <div className="relative cursor-pointer">
        <div className="h-80 md:h-full">
          <Image src={landing} layout="fill" />
        </div>

        <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
          <p className="text-slate-400 hidden group-hover:block">
            <FaInstagram size={50} className="z-10" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
