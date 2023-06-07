import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import landing from "../../public/images/Main.png";
import { TbReportAnalytics } from "react-icons/tb";
const staticData = {
  1: {
    text: " ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با",
    className: "leading-8 text-slate-300 font-light text-base",
  },
  2: {
    text: " ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفه تولید سادگی نامفهوم از صنعت چاپ، و با",
    className: "leading-8 text-slate-300 font-light text-base",
  },
  3: {
    text: " ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ وسادگی نامفهوم از صنعت چوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با",
    className: "leading-8 text-slate-300 font-light text-base",
  },
};

const Main = () => {
  const [text, setText] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((perv) => {
        if (perv == 3) return 1;
        return perv + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // grid grid-cols-1 md:grid-cols-2
    <div className="rtl bg-gradient-to-r from-[#000000] to-[#130F40] h-screen">
      <div className="flex justify-evenly items-center pt-20">
        <div className="flex flex-col items-center md:w-[50%] w-full px-4 justify-center gap-10">
          {/* first col */}
          <div className="text-white font-bold tracking-wider ">
            <h2 className="text-4xl text-center">
              چرا <span className="font-bold text-pink-600">بلست</span>؟
            </h2>
          </div>
          {/* second col */}
          <div className="flex flex-row gap-2 items-center justify-center text-sm md:text-lg text-white w-full ">
            <div
              className={`${
                text === 1
                  ? "bg-pink-600 px-5 py-2 rounded-lg cursor-pointer text-white"
                  : "opacity-70 bg-transparent px-5 py-2"
              } duration-500 cursor-pointer`}
              onClick={() => setText(1)}
            >
              <p className="font-light tracking-tighter text-center">ثبت نام</p>
            </div>
            <div className="border-t-2 w-[20%] border-dotted border-slate-500 opacity-50"></div>
            <div
              className={`${
                text === 2
                  ? "bg-pink-600 px-5 py-2 rounded-lg cursor-pointer text-white"
                  : "opacity-70 bg-transparent px-5 py-2"
              } duration-500 cursor-pointer`}
              onClick={() => setText(2)}
            >
              <p className="font-light tracking-tighter text-center">
                آنالیز بدن
              </p>
            </div>
            <div className="border-t-2 w-[20%] border-dotted border-slate-500 opacity-50"></div>
            <div
              className={`${
                text === 3
                  ? "bg-pink-600 px-5 py-2 rounded-lg cursor-pointer text-white"
                  : "opacity-70 bg-transparent px-5 py-2"
              } duration-500 cursor-pointer`}
              onClick={() => setText(3)}
            >
              <p className="font-light tracking-tighter text-center">
                بدن ایده آل
              </p>
            </div>
          </div>
          {/* third col */}
          <div className="flex justify-center items-center w-full p-3">
            <p
              className={`${staticData[text].className} tracking-tight font-light leading-loose w-[80%] text-center`}
            >
              {staticData[text].text}
            </p>
            {/* <p className="text-slate-500 tracking-tight font-light leading-loose w-[80%]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده،
          </p> */}
          </div>
          {/* fourth col */}
          <div className="flex justify-center pt-12">
            <button className="flex flex-row gap-4 text-white group border-2 px-6 py-4 my-2  items-center rounded-bl-lg rounded-tr-lg hover:bg-pink-600 hover:border-pink-600 ">
              آنالیز بدن
              <TbReportAnalytics size={30} />
            </button>
          </div>
        </div>

        <div className="brightness-50 md:h-full md:block hidden">
          <Image src={landing} width={300} height={100} />
        </div>

        {/* <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
          <p className="text-slate-400 hidden group-hover:block">
            <FaInstagram size={50} className="z-10" />
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Main;
