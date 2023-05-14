import React, { useState } from "react";
import { competitionData } from "../../../competitionData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper";
import { BiFootball } from "react-icons/bi";

const CompetitionSlider = () => {
  const [activeSlide, setactiveSlide] = useState(0);

  return (
    <div className="bg-[url('../public/images/darkBlueBackground.png')] bg-center bg-cover w-full h-screen rtl">
      <div className="flex justify-center text-white text-4xl font-bold pt-20">
        <h1>
          مسابقات در <span className="text-pink-600 ">بلست</span>
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-around gap-10 pt-14 pb-0">
        <select
          id="gender_status"
          className="focus:outline-none bg-slate-300 border border-slate-300 text-gray-900 text-sm rounded-2xl focus:ring-slate-500 focus:border-slate-500 block px-14 py-4"
        >
          <option selected>انتخاب مسابقه</option>
          <option value="football">s</option>
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
                  activeSlide === index ? "brightness-100 " : "brightness-50"
                }`}
              >
                <div className="w-96 h-full bg-center clip-path-img relative">
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
      </div>
    </div>
  );
};

export default CompetitionSlider;
