import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImg from "@img/Logo1.png";

const Reserve = () => {
  return (
    <div className="rtl ">
      <div className="bg-[url('https://www.mankan.me/wp-content/uploads/2022/10/pattern-mankan-gray.png')]  min-h-[400px] bg-left-top bg-repeat bg-gray-900 flex flex-col items-center justify-center gap-8 pt-8 ">
        {/* col 1 */}
        <div className="flex flex-row items-center gap-4">
          <div className="cursor-pointer">
            <Link href="/">
              <Image src={logoImg} width={100} height={100} />
            </Link>
          </div>
          <div>
            <h1 className="font-bold text-white md:text-4xl text-2xl">
              بانک غذایی <span className="text-pink-600">بلست</span> اینجاست
            </h1>
          </div>
        </div>
        {/* col 2 */}

        <div className="relative">
          <input
            type="text"
            className="focus:outline-none shadow-md shadow-gray-600 block w-full md:px-48 py-5 px-20 text-gray-900 border border-slate-200  rounded-full bg-slate-200 md:text-center text-right"
            placeholder="اینجا رزرو کن"
          />
          <button className="btn-outline-primary px-6 py-2 absolute left-2 bottom-2 top-2 ">
            رزرdsdsdو
          </button>
        </div>

        {/* col 3 */}
        <div className="w-full">
          <p className="text-slate-300 leading-5 md:px-96 px-10">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
