import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephoneFill, BsFillEnvelopeAtFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto rtl mt-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
        {/* first col */}
        <div className="text-white">
          <h1 className="font-light text-lg">شبکه های اجتماعی</h1>
          <div className="flex justify-center flex-row gap-2 pt-4">
            <div className="rounded-xl bg-pink-600 text-white  flex justify-center items-center p-1 cursor-pointer">
              <FaInstagram className="px-[2px] py-[2px]" size={30} />
            </div>
            <div className="rounded-xl bg-blue-500 text-white  flex justify-center items-center p-1 cursor-pointer">
              <FaTelegramPlane className="px-[2px] py-[2px]" size={30} />
            </div>
            <div className="rounded-xl bg-red-600 text-white  flex justify-center items-center p-1 cursor-pointer">
              <TiSocialYoutube className="px-[2px] py-[2px]" size={30} />
            </div>
          </div>
        </div>
        {/* second col */}
        <div className="text-white">
          <ul className="flex flex-col gap-4 font-light">
            <li className="text-lg">خدمات</li>
            <li className="text-sm text-slate-300 cursor-pointer">
              رژیم غذایی
            </li>
            <li className="text-sm text-slate-300 cursor-pointer">
              برنامه تمرین
            </li>
            <li className="text-sm text-slate-300 cursor-pointer">مشاوره</li>
            <li className="text-sm text-slate-300 cursor-pointer">
              پذیرش حضوری
            </li>
          </ul>
        </div>
        {/* third col */}
        <div className="text-white">
          <ul className="flex flex-col gap-4 font-light">
            <li className="text-lg">بلست</li>
            <li className="text-sm text-slate-300 cursor-pointer">ثبت نام</li>
            <li className="text-sm text-slate-300 cursor-pointer">درباره ما</li>
            <li className="text-sm text-slate-300 cursor-pointer">
              قوانین و مقررات
            </li>
            <li className="text-sm text-slate-300 cursor-pointer">
              تماس با ما
            </li>
            <li className="text-sm text-slate-300 cursor-pointer">وبلاگ</li>
          </ul>
        </div>
        {/* fourth col */}
        <div className="text-white">
          <ul className="flex flex-col gap-4 font-light">
            <li className="text-lg">ارتباط با ما</li>
            <li className="flex flex-row gap-1 justify-center items-center text-sm text-slate-300">
              <CiLocationOn size={20} />
              <p>کرمانشاه، کمربندی غربی، مجموعه ورزشی زرین</p>
            </li>
            <li className="flex flex-row gap-1 justify-center items-center text-sm text-slate-300">
              <BsTelephoneFill size={20} />
              <p>083-2587413</p>
            </li>
            <li className="flex flex-row gap-1 justify-center items-center text-sm text-slate-300">
              <BsFillEnvelopeAtFill size={20} />
              <p>blastacademy@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
