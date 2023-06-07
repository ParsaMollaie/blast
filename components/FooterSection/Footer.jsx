import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephoneFill, BsFillEnvelopeAtFill } from "react-icons/bs";
import logoImg from "../../public/images/Logo1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mx-auto rtl mt-20 pb-10 rtl">
      <div className="flex flex-col gap-4 justify-center items-center">
        {/* first col */}
        <div className="flex flex-col sm:flex sm:flex-row sm:justify-center items-center gap-4 w-[80%]">
          <div>
            <Image src={logoImg} className="xl:w-72 sm:w-60 w-40" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-center sm:text-right">
              <h2 className="font-bold text-4xl text-slate-300">
                مجموعه ورزشی تخصصی <span className="text-pink-600"> بلست</span>
              </h2>
            </div>
            <div>
              <p className="tracking-wide text-slate-300 leading-8">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
          </div>
        </div>
        {/* second col */}
        <div className="border-t-2 w-[60%] border-solid border-slate-500 opacity-50"></div>
        {/* third col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center pt-3">
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
              <li className="text-sm text-slate-300 cursor-pointer duration-300 glassmorphism py-2 hover:bg-pink-600 hover:text-white">
                رژیم غذایی
              </li>
              <li className="text-sm text-slate-300 cursor-pointer duration-300 glassmorphism py-2 hover:bg-pink-600 hover:text-white">
                برنامه تمرین
              </li>
              <li className="text-sm text-slate-300 cursor-pointer duration-300 glassmorphism py-2 hover:bg-pink-600 hover:text-white">
                مشاوره
              </li>
              <li className="text-sm text-slate-300 cursor-pointer duration-300 glassmorphism py-2 hover:bg-pink-600 hover:text-white">
                پذیرش حضوری
              </li>
            </ul>
          </div>
          {/* third col */}
          <div className="text-white">
            <ul className="flex flex-col gap-4 font-light">
              <li className="text-lg">بلست</li>
              <li className="text-sm text-slate-300 cursor-pointer duration-300 glassmorphism py-2 hover:bg-pink-600 hover:text-white">
                ثبت نام
              </li>
              <li className="text-sm text-slate-300 cursor-pointer duration-300 glassmorphism py-2 hover:bg-pink-600 hover:text-white">
                درباره ما
              </li>
              <li className="text-sm text-slate-300 cursor-pointer duration-300 glassmorphism py-2 hover:bg-pink-600 hover:text-white">
                قوانین و مقررات
              </li>
              <li className="text-sm text-slate-300 cursor-pointer duration-300 glassmorphism py-2 hover:bg-pink-600 hover:text-white">
                تماس با ما
              </li>
              <li className="text-sm text-slate-300 cursor-pointer duration-300 glassmorphism py-2 hover:bg-pink-600 hover:text-white">
                وبلاگ
              </li>
            </ul>
          </div>
          {/* fourth col */}
          <div className="text-white">
            <ul className="flex flex-col gap-4 font-light">
              <li className="text-lg">ارتباط با ما</li>
              <li className="flex flex-row gap-1 justify-center items-center text-sm text-slate-300 duration-300 glassmorphism py-4 px-2 hover:bg-pink-600 hover:text-white">
                <CiLocationOn size={20} />
                <p>کرمانشاه، کمربندی غربی، مجموعه ورزشی زرین</p>
              </li>
              <li className="flex flex-row gap-1 justify-center items-center text-sm text-slate-300 duration-300 glassmorphism py-4 px-2 hover:bg-pink-600 hover:text-white">
                <BsTelephoneFill size={20} />
                <p>083-2587413</p>
              </li>
              <li className="flex flex-row gap-1 justify-center items-center text-sm text-slate-300 duration-300 glassmorphism py-4 px-2 hover:bg-pink-600 hover:text-white">
                <BsFillEnvelopeAtFill size={20} />
                <p>blastacademy@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
