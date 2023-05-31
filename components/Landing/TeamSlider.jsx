import React from "react";
import { blastTeam } from "../../blastTeamData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const TeamSlider = () => {
  return (
    <div className="bg-[url('https://www.mankan.me/wp-content/uploads/2022/10/pattern-mankan-gray.png')] bg-left-top bg-repeat bg-[#040c18] flex flex-col items-center p-10 mt-14">
      <div className="flex justify-center items-center text-4xl rtl">
        <h1 className="text-white">
          تیم تخصصی <span className="text-pink-600 font-bold">بلست</span>
        </h1>
      </div>
      <div className="flex justify-center items-center max-h-screen xl:max-w-[1240px] lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[450px] max-w-[300px]  mx-auto mt-16 rtl">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 320px
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            1024: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            // when window width is >= 1200px
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          grabCursor={true}
          modules={[Autoplay]}
        >
          {blastTeam.map((e) => {
            return (
              <SwiperSlide>
                <div className="flex flex-col items-center font-light">
                  <div
                    className="flex flex-row justify-center items-center rounded-full gap-8 w-44 h-44 relative bg-slate-300"
                    key={e.id}
                  >
                    <div className="absolute w-[90%] h-[90%] flex justify-center items-center">
                      {e.personImage}
                    </div>
                  </div>
                  <p className="text-white text-2xl">{e.name}</p>
                  <p className="text-sm text-slate-300">{e.position}</p>
                  <p>{e.iconPosition}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;
