import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import landing from "../../public/images/landing.jpg";

const Main = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-20 rtl">
      <div className="text-white flex flex-col gap-10 p-8">
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
      </div>
      <div className="relative cursor-pointer">
        <div className="h-80 md:h-full">
          <Image src={landing} layout="fill" />
        </div>
        {/* overlay */}
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
