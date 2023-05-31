import React, { useState } from "react";
import { competitionData } from "../../../competitionData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

const CompetitionSlider = () => {
  const [activeSlide, setactiveSlide] = useState(0);
  const [showData, setShowData] = useState(10);

  // const handleData = () => {
  //   setShowData()
  // }

  // transform scale-125 duration-1000
  return (
    // bg-[url('../public/images/darkBlueBackground.png')] bg-center bg-cover
    <div
      className={`${
        competitionData.length > 10 ? "overflow-y-scroll" : "overflow-hidden"
      } bg-gradient-to-r from-[#000428] to-[#004e92]  duration-700 w-full h-screen rtl`}
    >
      <div className="flex justify-center text-white text-4xl font-semibold tracking-wider pt-20">
        <h1>
          مسابقات در <span className="text-pink-600 ">بلست</span>
        </h1>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pt-20 pb-5 px-4">
        {competitionData.map((e) => {
          return (
            <div className="flex flex-col justify-center items-center">
              <div className="w-64 h-72 relative flex justify-center items-center clip-path-img glassmorphism">
                <div className="absolute bottom-0 w-full">{e.imageSlider}</div>
                <div className="absolute font-light tracking-wide text-slate-300 flex justify-center items-center right-[50%] left-[50%] bottom-[5%] hover:text-white">
                  {e.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center p-5">
        <button className="font-light text-slate-300 items-center rounded-full px-8 py-4 border-slate-300 outline-none border-2 hover:text-white hover:border-slate-300 ">
          see more
        </button>
      </div>
      {/* <div className="flex flex-col sm:flex-row items-center justify-around gap-10 pt-14 pb-0">
        <select
          id="gender_status"
          className="focus:outline-none bg-slate-300 border border-slate-300 text-gray-900 text-sm rounded-2xl focus:ring-slate-500 focus:border-slate-500 block px-14 py-4"
        >
          <option selected>انتخاب مسابقه</option>
          <option value="football">قوتبال</option>
          <option value="crosfit">کراسفیت</option>
          <option value="fitness">آمادگی جسمانی</option>
        </select>

        <select
          id="gender_status"
          className="focus:outline-none bg-slate-300 border border-slate-300 text-gray-900 text-sm rounded-2xl focus:ring-slate-500 focus:border-slate-500 block px-14 py-4 "
        >
          <option selected>جنسیت مسابقه</option>
          <option value="male">آقایان</option>
          <option value="female">بانوان</option>
        </select>
      </div>
      <div className="flex flex-col justify-center items-center mt-40">
        <Swiper
          effect={"coverflow"}
          onSlideChange={(e) => {
            setactiveSlide(e.activeIndex);
          }}
          grabCursor={true}
          centeredSlides={true}
          // slidesPerView={"auto"}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 10,
            stretch: 20,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="w-full"
        >
          {competitionData.map((e, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`${
                  activeSlide === index
                    ? "brightness-100 bg-green-400 "
                    : "brightness-50"
                }`}
              >
                <div className="w-[60%] bg-center bg-red-600 clip-path-img relative">
                  <div
                    className={`${
                      activeSlide === index &&
                      "transform scale-125 duration-1000"
                    }  `}
                  >
                    {e.imageSlider}
                  </div>
                  <p
                    className={`${
                      activeSlide === index &&
                      "transform scale-125 text-white absolute left-1/2 top-[90%]"
                    }  `}
                  >
                    {e.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}
    </div>
  );
};

export default CompetitionSlider;
