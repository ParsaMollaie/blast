import React from "react";
import { blastTeam } from "../../blastTeamData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const TeamSlider = () => {
  return (
    <>
      <div className="flex justify-center items-center text-4xl pt-24 rtl">
        <h1 className="text-white">
          تیم تخصصی <span className="text-pink-600 font-bold">بلست</span>
        </h1>
      </div>
      <div className="flex justify-center items-center max-h-screen mt-16 rtl">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 320px
            370: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            600: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            850: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          grabCursor={true}
          modules={[Autoplay]}
        >
          {blastTeam.map((e) => {
            return (
              <SwiperSlide>
                <div className="flex flex-col items-center gap-4 font-light">
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
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default TeamSlider;
